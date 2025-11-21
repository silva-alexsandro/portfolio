export function initTabs() {
  const container = $("#about");
  if (!container.length) return;

  const buttons = container.find("aside.sidebar-about button");
  const sections = container.find(".contents .section");
  const titleTarget = container.find(".title-section-active");

  buttons.on("click", function () {
    const button = $(this);
    const targetId = button.attr("aria-controls");
    const targetSection = $("#" + targetId);

    // Mostra a seção correspondente
    sections.removeClass("show");
    targetSection.addClass("show");

    // Atualiza botões
    buttons.removeClass("active").attr("aria-selected", "false");
    button.addClass("active").attr("aria-selected", "true");

    // Atualiza o título principal
    if (titleTarget.length) {
      titleTarget.html(`<h1>${button.text()}</h1>`);
    }
  });
}
