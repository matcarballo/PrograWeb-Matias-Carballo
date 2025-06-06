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


let carrito = [];

const botonesAgregar = document.querySelectorAll('.producto button');
const carritoItems = document.getElementById('carrito-items');
const carritoTotal = document.getElementById('carrito-total');

// actualiza la vista del carrito
function renderCarrito() {
  carritoItems.innerHTML = '';
  let total = 0;
  carrito.forEach((item, i) => {
    total += item.precio * item.cantidad;
    const div = document.createElement('div');
    div.className = 'carrito-item';
    div.innerHTML = `
      <span class="carrito-item-nombre">${item.nombre}</span>
      <div class="carrito-item-cantidad">
        <button class="restar" data-idx="${i}">-</button>
        <span>${item.cantidad}</span>
        <button class="sumar" data-idx="${i}">+</button>
      </div>
      <span>$${item.precio * item.cantidad}</span>
      <button class="eliminar-item" data-idx="${i}">&times;</button>
    `;
    carritoItems.appendChild(div);
  });
  carritoTotal.textContent = total;

  // eventos para sumar restar y elimniar
  carritoItems.querySelectorAll('.sumar').forEach(btn => {
    btn.onclick = () => {
      carrito[btn.dataset.idx].cantidad++;
      renderCarrito();
    };
  });
  carritoItems.querySelectorAll('.restar').forEach(btn => {
    btn.onclick = () => {
      if (carrito[btn.dataset.idx].cantidad > 1) {
        carrito[btn.dataset.idx].cantidad--;
      } else {
        carrito.splice(btn.dataset.idx, 1);
      }
      renderCarrito();
    };
  });
  carritoItems.querySelectorAll('.eliminar-item').forEach(btn => {
    btn.onclick = () => {
      carrito.splice(btn.dataset.idx, 1);
      renderCarrito();
    };
  });
  document.getElementById('carrito-cantidad').textContent = carrito.reduce((acc, item) => acc + item.cantidad, 0);
}

// evento para agregar productos al carrito
botonesAgregar.forEach((btn) => {
  btn.addEventListener('click', () => {
    const productoDiv = btn.closest('.producto');
    const nombre = productoDiv.querySelector('h3').textContent;
    const precio = parseFloat(productoDiv.querySelector('.precio').textContent.replace('$', ''));
    const index = carrito.findIndex(item => item.nombre === nombre);
    if (index > -1) {
      carrito[index].cantidad += 1;
    } else {
      carrito.push({ nombre, precio, cantidad: 1 });
    }
    renderCarrito();
  });
});