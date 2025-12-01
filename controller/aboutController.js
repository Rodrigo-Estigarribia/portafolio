import { renderAbout } from '../view/aboutView.js';

export function loadAbout(){
  document.getElementById('app').innerHTML = renderAbout();
}
