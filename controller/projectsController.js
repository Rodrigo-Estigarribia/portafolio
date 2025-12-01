import { renderProjects } from '../view/projectsView.js';
import { initModal } from './modalController.js';

export function loadProjects(){
  document.getElementById('app').innerHTML = renderProjects();
  initModal();
}
