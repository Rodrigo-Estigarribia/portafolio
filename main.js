import { initHeader } from './controller/pageController.js';
import { router } from './controller/router.js';

// Inicializa header y carga home por defecto
initHeader();
router(window.location.hash.replace('#','') || 'home');

// Soporta navegación por hash
window.addEventListener('hashchange', ()=>{
  router(window.location.hash.replace('#',''));
});
