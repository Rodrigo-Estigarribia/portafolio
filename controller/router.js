import { loadHome, loadProjects, loadSkills, loadAbout, loadContact } from './pageController.js';

export function router(page){
  switch(page){
    case 'home':
      loadHome();
      break;
    case 'projects':
      loadProjects();
      break;
    case 'skills':
      loadSkills();
      break;
    case 'about':
      loadAbout();
      break;
    case 'contact':
      loadContact();
      break;
    default:
      loadHome();
  }
}
