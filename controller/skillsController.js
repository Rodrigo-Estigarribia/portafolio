import { renderSkills } from '../view/skillsView.js';

export function loadSkills(){
  document.getElementById('app').innerHTML = renderSkills();
}
