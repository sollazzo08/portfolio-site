document.addEventListener("DOMContentLoaded", function () {
  fetch("public/data/projects.json")
      .then(response => response.json())
      .then(data => {
          let projectsContainer = document.getElementById("projects-container");
          data.forEach(project => {
              let projectElement = `
                  <div class="content">
                      <h3>${project.name}</h3>
                      <p>${project.description}</p>
                      <a href="${project.link}" target="_blank">GitHub Repo</a>
                  </div>`;
              projectsContainer.innerHTML += projectElement;
          });
      });
});
