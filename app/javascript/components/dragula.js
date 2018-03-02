import dragula from 'dragula';

dragula([
  document.querySelector('#left'),
  document.querySelector('#right'),
  document.querySelector('#top')
  ],
  {revertOnSpill: true});

import 'dragula/dist/dragula.css';
