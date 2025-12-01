import { projects } from '../model/projectsModel.js';

export function renderProjects(){
  return `
    <section class="projects">
      <h2 class="section-title">PROJECTS</h2>
      <div class="projects-grid">
        ${projects.map((p, i)=>`
          <article class="project-card">
            <img src="${p.images[0]}" alt="${p.title}" class="project-img pixel-image"/>
            <h3>${p.title}</h3>
            <p class="desc">${p.description}</p>
            <p class="tech">${p.technologies.join(' • ')}</p>
            <div class="card-actions">
              <button class="btn small open-modal" data-index="${i}">Demo</button>
              <a href="${p.github}" target="_blank" class="btn small">Code</a>
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    ${renderProjectModal()}
  `;
}

function renderProjectModal(){
  return `
    <div id="modal" class="modal hidden">
      <div class="modal-content">
        
        <span class="close">×</span>

        <div class="carousel">
          <button id="prev" class="carousel-btn">&#10094;</button>

          <img id="carousel-img" src="" class="carousel-img pixel-image"/>

          <button id="next" class="carousel-btn">&#10095;</button>
        </div>

      </div>
    </div>
  `;
}
