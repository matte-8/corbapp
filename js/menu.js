
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  menu.innerHTML = `
    <a href="index.html">Home</a>
    <a href="news.html">News</a>
    <a href="squadra.html">Team</a>
    <a href="sponsor.html">Sponsor</a>
    <a href="partita.html">Ultima Partita</a>
    <a href="prossima-partita.html">Prossima Partita</a>
    <a href="calendario.html">Calendario</a>
    <a href="admin.html">Admin</a>
    <a href="impostazioni.html">Impostazioni</a>
  `;
  toggle.addEventListener("click", () => menu.classList.toggle("hidden"));
});
