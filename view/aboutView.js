import { profile } from "../model/profileModel.js";

export function renderAbout() {

  const cursosHTML = profile.cursos
    .map(curso => `<li>${curso}</li></br>`)
    .join("");

  return `
    <section class="about">
      <h2 class="section-title">ABOUT</h2>
      <div class="about-content">
        <div class="">
          <img src="${profile.avatar}" alt="avatar" class="pixel-image"/>
        </div>

        <div class="about-text">
          <h3>${profile.name}</h3>
          <p>${profile.intro}</p>
        </div>

        <div class="about-text">
          <h3>Cursos Realizados</h3>
          <ul>
            ${cursosHTML}
          </ul>
        </div>
      </div>
    </section>
  `;
}
