import { renderContact } from '../view/contactView.js';

export function loadContact(){
  document.getElementById('app').innerHTML = renderContact();

  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Mensaje enviado (simulado). Revisá la implementación para enviar por email).');
    form.reset();
  });
}
