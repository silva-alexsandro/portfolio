const sectionClock = document.getElementById('js-clock');
const relogio = setInterval(() => {
 const agora = new Date();
 const format = { hour: '2-digit', minute: '2-digit', hour12: true };
 sectionClock.textContent = agora.toLocaleTimeString('pt-BR', format);
}, 1000);
