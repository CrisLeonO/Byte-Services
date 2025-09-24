console.log("✅ componentes.js cargado correctamente");

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.submenu-toggle').forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      e.preventDefault(); // evita que se cierre el dropdown
      const parent = this.parentElement;

      // Cierra cualquier otro submenú abierto
      document.querySelectorAll('.dropdown-submenu').forEach(item => {
        if (item !== parent) item.classList.remove('show');
      });

      // Alterna el submenú clicado
      parent.classList.toggle('show');
    });
  });
});
