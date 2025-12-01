import { profile } from '../model/profileModel.js';
import { renderHome } from '../view/homeView.js';
import { loadProjects } from './projectsController.js';
import { loadSkills } from './skillsController.js';
import { loadAbout } from './aboutController.js';
import { loadContact } from './contactController.js';

export function initHeader(){
  const header = document.getElementById('site-header');
  header.innerHTML = `
    <div class="header-inner">
      <div class="logo pixel-title">Portafolio</div>
      <nav class="nav">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  `;
}

export function loadHome(){
  document.getElementById('app').innerHTML = renderHome();
}

export { loadProjects, loadSkills, loadAbout, loadContact };
