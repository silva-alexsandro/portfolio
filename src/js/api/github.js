export function githubAPI() {
  $.get(`https://api.github.com/users/silva-alexsandro`, function (data) {
    console.log(data)
    $(".avatar").attr("src", data.avatar_url);
    $(".name").text(data.name || data.login);
    $(".bio").text(data.bio || "Sem bio disponível");
    $("#goGithub").attr("href", data.html_url);
  });


  // Lista de repositórios
  $.get(`https://api.github.com/users/silva-alexsandro/repos`, function (repos) {
    repos.forEach(function (repo) {
      if (repo.name !== 'silva-alexsandro' && repo.name !== 'my') {
        $("#repos").append(`
          <li class="card card_small">
          <h2 class="card_title">${repo.name}</h2>
          <p class="card_description" data-tooltip="${repo.description || "Trabalhando na descrição"}">
          ${repo.description || "Trabalhando na descrição"}
          </p>
          <div class="card_bottom">
          <div class="badge">${repo.language || ""}</div>
          <a href="${repo.html_url}">
              <i class="icon ph ph-github-logo"></i>
            </a>
          </div>
          </li>
          `);
      }
    });
  });
};
