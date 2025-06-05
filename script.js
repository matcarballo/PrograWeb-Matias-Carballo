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