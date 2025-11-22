import { downloadcv } from "./download-cv.js";
import { loadRepos, setupViewToggle } from "./handlegithubAPI.js";
import { initTabs } from "./tabs.js";

/**
 * Função para ativar links do menu conforme a rolagem
 * @param {string} navLinksSelector - Seletor dos links do menu
 * @param {number} offset - Ajuste de topo para header sticky (opcional)
 */
function activateNavOnScroll(navLinksSelector, offset = 70) {
  const $navLinks = $(navLinksSelector);

  function updateActiveLink() {
    const scrollPos = $(window).scrollTop();

    $navLinks.each(function () {
      const $link = $(this);
      const target = $link.attr("href");

      if (target.startsWith("#") && $(target).length) {
        const sectionTop = $(target).offset().top - offset;
        const sectionBottom = sectionTop + $(target).outerHeight();

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
          $navLinks.removeClass("navbar__link--active");
          $link.addClass("navbar__link--active");
        }
      }
    });
  }

  // Executa ao carregar e ao rolar
  $(window).on("scroll", updateActiveLink);
  updateActiveLink();

  // Rolagem suave ao clicar
  $navLinks.on("click", function (e) {
    const target = $(this).attr("href");
    if (target.startsWith("#") && $(target).length) {
      e.preventDefault();
      $("html, body").animate(
        { scrollTop: $(target).offset().top - offset },
        600,
      );
    }
  });
}

$(document).ready(function () {
  initTabs();
  loadRepos();
  setupViewToggle();
  activateNavOnScroll(".navbar__link", 100);
  $("#download-btn-cv").on("click", downloadcv);
});
