/* global VIRTUO*/
'use strict';

(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const template = actors.map(actor => {
      return `
        <div class="actor">
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">${actor.who} ${actor.type}</h6>
            <small class="text-muted"></small>
          </div>
          <span class="text-muted">${actor.amount}</span>
        </li>

         
        </div>
      `;
    }).join('');

    div.innerHTML = template;
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(fragment);
  };

  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    const car = VIRTUO.getCar();
    const begin = document.querySelector('#js-rental-begin').value;
    const end = document.querySelector('#js-rental-end').value;
    const distance = document.querySelector('#js-rental-distance').value;
    const option = document.querySelector('#js-rental-option').checked;
    const actors = VIRTUO.payActors(car, begin, end, distance, option);

    render(actors);

    return;
  });
})();
