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

      <button class="navMenu" id="options">
        ☰
      </button>

      <nav class="nav" id="nav-menu">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  `;

  const options = document.getElementById('options');
  const navMenu = document.getElementById('nav-menu');

  options.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !options.contains(e.target)) {
      navMenu.classList.remove('show');
    }
  });

  // Cerrar al seleccionar una opción del menú
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  });

}

export function loadHome(){
  document.getElementById('app').innerHTML = renderHome();
}

export { loadProjects, loadSkills, loadAbout, loadContact };
