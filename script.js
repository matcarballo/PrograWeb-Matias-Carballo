document.addEventListener('DOMContentLoaded', function () {
  const filtro = document.getElementById('filtro-marca');
  const productos = document.querySelectorAll('.producto');

  filtro.addEventListener('change', function () {
    const marca = filtro.value;
    productos.forEach(producto => {
      if (marca === 'todas' || producto.dataset.marca === marca) {
        producto.style.display = '';
      } else {
        producto.style.display = 'none';
      }
    });
  });
});


const sidebar = document.getElementById('sidebar-carrito');
const btnCarrito = document.querySelector('.icono-carrito');
const btnCerrar = document.getElementById('cerrar-carrito');

btnCarrito.addEventListener('click', () => {
  sidebar.classList.add('abierto');
});

btnCerrar.addEventListener('click', () => {
  sidebar.classList.remove('abierto');
});
