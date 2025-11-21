export function loadRepos() {
  $.get(
    "https://api.github.com/users/silva-alexsandro/repos",
    function (repos) {
      const $cards = $("#repos");
      const $tableBody = $("#repos-table tbody");

      $cards.empty();
      $tableBody.empty();

      repos
        .filter(
          (repo) =>
            repo.name !== "silva-alexsandro" && repo.name !== "portfolio",
        )
        .forEach((repo) => {
          const card = `
          <li class="repo-card">
            <h3>${repo.name}</h3>
            <p>${repo.description || "Sem descrição"}</p>
            <span class="lang">${repo.language || "?"}</span>
            <a href="${repo.html_url}" target="_blank">
              <i class="ph ph-github-logo"></i>
            </a>
          </li>
        `;
          $cards.append(card);

          const row = `
          <tr>
            <td>${repo.name}</td>
            <td>${repo.description || "Sem descrição"}</td>
            <td>${repo.language || "?"}</td>
            <td><a href="${repo.html_url}" target="_blank">GitHub</a></td>
          </tr>
        `;
          $tableBody.append(row);
        });

      $cards.removeClass("loading");
    },
  );
}

export function setupViewToggle() {
  $("#view-cards").on("click", function () {
    $(this).addClass("active");
    $("#view-table").removeClass("active");

    $("#repos").show();
    $("#repos-table").addClass("hidden");
  });

  $("#view-table").on("click", function () {
    $(this).addClass("active");
    $("#view-cards").removeClass("active");

    $("#repos").hide();
    $("#repos-table").removeClass("hidden");
  });
}
