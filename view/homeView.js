import { profile } from '../model/profileModel.js';

export function renderHome() {
  return `
    <section class="hero">
      <h1 class="pixel-title">${profile.name}</h1>
      <div class="avatar-wrap">
        <img src="${profile.avatar}" alt="avatar" class="avatar pixel-image"/>
      </div>
      <p class="role">${profile.role}</p>

      <div class="btn-grid">
        <a href="#projects" class="btn pixel-btn">Projects</a>
        <a href="#about" class="btn pixel-btn">About</a>
        <a href="#skills" class="btn pixel-btn">Skills</a>
        <a href="#contact" class="btn pixel-btn">Contact</a>
      </div>
    </section>
  `;
}
