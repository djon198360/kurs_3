import { app } from "../index.js";
import { unitCheck } from "./functions.js";
import { timer } from "./renderScreenGame.js";
function gameOver(text, imgs, minutes, seconds) {
      let fragment = new DocumentFragment();
      let screen = document.createElement("div");
      screen.classList.add('screen');
      let p = document.createElement("p");
      p.classList.add('title_' + imgs);
      p.textContent = text;
      let img = document.createElement("img");
      img.classList.add(imgs);
      img.setAttribute('src', './img/' + imgs + '.svg');
      let titleTime = document.createElement("p");
      titleTime.textContent = "Затраченное время:";
      titleTime.classList.add('title_time');
      let time = document.createElement('span');
      time.textContent = `${minutes.toString().padStart(2, '0')}.${seconds.toString().padStart(2, '0')}`;
      time.classList.add('time_over');
      let button = document.createElement("button");
      button.textContent = "Играть снова";
      button.classList.add('start');


      screen.appendChild(img);
      screen.appendChild(p);
      screen.appendChild(titleTime);
      screen.appendChild(time);
      screen.appendChild(button);
      fragment.append(screen);

      return fragment;
}

export function renderOver(text, imgs, minutes, seconds) {
      let div = document.createElement("div");
      div.classList.add('layout');
app.append(div);
      app.append(gameOver(text, imgs, minutes, seconds));
      clearTimeout(timer);
      document.querySelector('.start').addEventListener('click', (e) => {
            localStorage.clear();
            unitCheck('unit', 'Start');
      });


}