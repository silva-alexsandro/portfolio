
const menuLinks = document.querySelectorAll('.navbar__link');
const currentPath = window.location.pathname.replace(/\/$/, ''); // remove barra final se existir

menuLinks.forEach((link) => {
 // Remove qualquer ativo anterior
 link.classList.remove('navbar__link--active');

 // Normaliza o href (remove domínio e barra final)
 const linkPath = new URL(link.href).pathname.replace(/\/$/, '');

 // Verifica se o caminho do link corresponde ao atual
 if (linkPath === currentPath) {
  link.classList.add('navbar__link--active');
 }

 // Listener para mudança de classe dentro da mesma página (SPA)
 link.addEventListener('click', () => {
  menuLinks.forEach((link) => link.classList.remove('navbar__link--active'));
  link.classList.add('navbar__link--active');
 });
});

document.body.setAttribute('data-loading', 'true');

window.addEventListener('load', () => {
 // Anima o conteúdo entrando da direita para o lugar
 setTimeout(() => {
  document.body.setAttribute('data-loading', 'false');
 }, 20);
});

document.querySelectorAll('a').forEach((link) => {
 if (link.hostname === location.hostname && link.target !== '_blank') {
  link.addEventListener('click', (e) => {
   e.preventDefault();

   const url = link.href;

   // Anima o conteúdo saindo para a esquerda
   document.body.setAttribute('data-exit', 'true');

   // Espera a animação terminar antes de navegar
   setTimeout(() => {
    location.href = url;
   }, 400);
  });
 }
});
