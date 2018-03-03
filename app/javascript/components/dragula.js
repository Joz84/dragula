import dragula from 'dragula';

const dragDecorator = (containers, options, transitZone) => {
  const dragulaConst = dragula( containers, options);
  dragulaConst.on('drop', (el, target, source, sibling) => {
    if (transitZone !== target && target.children.length > 1) {
      const element = sibling ? sibling : el;
      element.classList.remove("gu-transit")
      source.insertAdjacentHTML("beforeend", element.outerHTML);
      element.remove();
    }
  });
};

const top = document.querySelector('#top');
const containers = [
  top,
  document.querySelector('#left'),
  document.querySelector('#center-left'),
  document.querySelector('#center-right'),
  document.querySelector('#right')
];
const options = { };
dragDecorator(containers, options, top)

import 'dragula/dist/dragula.css';

