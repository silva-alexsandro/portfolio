export function githubAPI() {
 $.get(`https://api.github.com/users/silva-alexsandro/repos`, function (repos) {
  console.log(repos);
  repos.forEach(function (repo) {
   if (repo.name !== 'silva-alexsandro' && repo.name !== 'portfolio') {
    $('#repos').append(`
          <li class="postit-card color-base-postit">
          <h2 class="postit-card__title">${repo.name}</h2>
          <p class="postit-card__description" data-tooltip="${
           repo.description || ''
          }">
          ${repo.description || ''}
          </p>

          <footer id="postit-card__bottom">
            <div class="badge">${repo.language || ''}</div>
            <a href="${repo.html_url}">
              <i class="icon ph ph-github-logo"></i>
            </a>
          </footer>
          </li>
          `);
   }
  });
 });
}
