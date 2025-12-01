import { skills } from '../model/skillsModel.js';

export function renderSkills(){
  return `
    <section class="skills-section">
      <h2 class="section-title">SKILLS</h2>

      <div class="skills-columns">

        <div class="skills-box">
          <h3 class="skills-subtitle">Habilidades Técnicas</h3>
          <ul class="skills-list">
            ${skills.tecnicas.map(s => `<li class="skill-item">${s.name}</li>`).join('')}
          </ul>
        </div>

        <div class="skills-box">
          <h3 class="skills-subtitle">Habilidades Blandas</h3>
          <ul class="skills-list">
            ${skills.blandas.map(s => `<li class="skill-item">${s.name}</li>`).join('')}
          </ul>
        </div>

      </div>
    </section>
  `;
}
