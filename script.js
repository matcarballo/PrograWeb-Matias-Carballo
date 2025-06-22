const productos = [
  {
    nombre: "Adidas World Cup",
    precio: 120,
    marca: "adidas",
    imagen: "https://acdn.mitiendanube.com/stores/002/042/897/products/iiiiiiiii1-f46fb48f067b670f9f16688241158981-640-0.jpeg"
  },
  {
    nombre: "Adidas Gold",
    precio: 110,
    marca: "adidas",
    imagen: "https://media2.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/b/o/botines-de-futbol-adidas-f50-league-messi-fg-mg-dorado-100010ig9274001-1.jpg"
  },
  {
    nombre: "Nike Clasicos",
    precio: 115,
    marca: "nike",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd91XbwFcCtVeGrzO2c8vU-BfTpoMxkZZPjw&s"
  },
  {
    nombre: "Puma Borussia Negro",
    precio: 105,
    marca: "puma",
    imagen: "https://images.puma.com/image/upload/f_auto,q_auto,w_600,b_rgb:FAFAFA/global/images/104657/01/sv01/fnd/ARG/fmt/png?sw=480&q=60"
  },
  {
    nombre: "Puma Borussia Blanco",
    precio: 105,
    marca: "puma",
    imagen: "https://images.puma.com/image/upload/f_auto,q_auto,w_600,b_rgb:FAFAFA/global/images/104657/02/sv01/fnd/ARG/fmt/png?sw=480&q=60"
  },
  {
    nombre: "Adidas Vintage",
    precio: 102,
    marca: "adidas",
    imagen: "https://http2.mlstatic.com/D_797222-MLA82082402729_012025-O.jpg"
  },
  {
    nombre: "Puma King",
    precio: 125,
    marca: "puma",
    imagen: "https://marcadegol.com/fotos/2015/11/puma-king-lothar-matthaus.jpg"
  },
  {
    nombre: "Adidas Saragossa",
    precio: 99,
    marca: "adidas",
    imagen: "https://i.pinimg.com/originals/20/89/04/2089045159c708e03c5ac4c2b7f6f3b2.jpg"
  },
  {
    nombre: "Nike Premier 3",
    precio: 95,
    marca: "nike",
    imagen: "https://nikearprod.vtexassets.com/arquivos/ids/997374-1000-1000?v=638556571502630000&width=1000&height=1000&aspect=true"
  },
  {
    nombre: "Nike Tiempo Legend",
    precio: 92,
    marca: "nike",
    imagen: "https://nikearprod.vtexassets.com/arquivos/ids/1369218-1000-1000?v=638739475672630000&width=1000&height=1000&aspect=true"
  },
  {
    nombre: "Adidas Kroos",
    precio: 90,
    marca: "adidas",
    imagen: "https://acdn-us.mitiendanube.com/stores/002/059/331/products/0bf73144-27a61fbebca3bd3bca17048081748477-480-0.png"
  },
  {
    nombre: "Nike Multiground",
    precio: 88,
    marca: "nike",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_900842-MLA45731862394_042021-O.webp"
  },
  {
    nombre: "Nike Zoom",
    precio: 100,
    marca: "nike",
    imagen: "https://depor.com/resizer/RKQ7OF2H0Nev7Dp400sKqanzfAs=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/3HE6C2MLRREUDAIAFMU42NAXDI.jpg"
  },
  {
    nombre: "Nike Ronaldinho",
    precio: 108,
    marca: "nike",
    imagen: "https://fotos.perfil.com//2022/08/18/900/0/botines-nike-tiempo-ronaldinho-1404244.jpg"
  },
  {
    nombre: "Nike Mercurial",
    precio: 112,
    marca: "nike",
    imagen: "https://assets.goal.com/images/v3/blta36ead0518906858/278716.jpg?auto=webp&format=pjpg&width=3840&quality=60"
  },
  {
    nombre: "Puma Torero",
    precio: 107,
    marca: "puma",
    imagen: "https://mercadotecnia.portada-online.com/wp-content/uploads/2017/06/puma-torero-maradona.jpg"
  },
  {
    nombre: "Puma Balotelli",
    precio: 93,
    marca: "puma",
    imagen: "https://cd1.eju.tv/wp-content/uploads/2015/08/0013192665.JPG"
  },
  {
    nombre: "Adidas Predator",
    precio: 85,
    marca: "adidas",
    imagen: "https://i1.t4s.cz//products/fx0274/adidas-predator-absolute-20-fg-314049-fx0278-960.webp"
  }
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const productosGrid = document.querySelector('.productos-grid');
const carritoItems = document.getElementById('carrito-items');
const carritoTotal = document.getElementById('carrito-total');
const filtro = document.getElementById('filtro-marca');
const sidebar = document.getElementById('sidebar-carrito');
const btnCarrito = document.querySelector('.icono-carrito');
const contactoBtn = document.querySelector('a[href="#copyr"]');
const barraContacto = document.getElementById('barra-contacto');

function renderizarProductos(lista) {
  productosGrid.innerHTML = '';
  lista.forEach(producto => {
    productosGrid.innerHTML += `
      <div class="producto" data-marca="${producto.marca}">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <div class="precio">$${producto.precio}</div>
        <button>Agregar al carrito</button>
      </div>
    `;
  });
}

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
  const cantHeader = document.getElementById('carrito-cantidad');
  if (cantHeader) {
    cantHeader.textContent = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  }
  const cantTotal = document.getElementById('carrito-cantidad-total');
  if (cantTotal) {
    cantTotal.textContent = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  }
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

renderizarProductos(productos);
renderCarrito();

productosGrid.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    const productoDiv = e.target.closest('.producto');
    const nombre = productoDiv.querySelector('h3').textContent;
    const producto = productos.find(p => p.nombre === nombre);
    const index = carrito.findIndex(item => item.nombre === producto.nombre);
    if (index > -1) {
      carrito[index].cantidad += 1;
    } else {
      carrito.push({ nombre: producto.nombre, precio: producto.precio, cantidad: 1 });
    }
    renderCarrito();
  }
});

filtro.addEventListener('change', function () {
  const marca = filtro.value;
  let productosFiltrados = productos;
  if (marca !== 'todas') {
    productosFiltrados = productos.filter(producto => producto.marca === marca);
  }
  renderizarProductos(productosFiltrados);
  renderCarrito();
});

btnCarrito.addEventListener('click', () => {
  if (sidebar.classList.contains('abierto')) {
    sidebar.classList.remove('abierto');
  } else {
    sidebar.classList.add('abierto');
  }
});

document.addEventListener('click', function(e) {
  if (e.target && e.target.id === 'cerrar-carrito') {
    sidebar.classList.remove('abierto');
  }
});

contactoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  barraContacto.classList.toggle('visible');
});

function mostrarResumenPedido() {
  const resumenDiv = document.getElementById('resumen-pedido');
  if (!carrito.length) {
    resumenDiv.innerHTML = '<p>No hay productos en el carrito.</p>';
    return;
  }
  let html = '<h3>Resumen de tu pedido</h3><ul style="text-align:left">';
  let total = 0, cantidad = 0;
  carrito.forEach(item => {
    html += `<li>${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}</li>`;
    total += item.precio * item.cantidad;
    cantidad += item.cantidad;
  });
  html += `</ul><p><strong>Total productos:</strong> ${cantidad}</p>`;
  html += `<p><strong>Total a pagar:</strong> $${total}</p>`;
  resumenDiv.innerHTML = html;
}

document.getElementById('btn-comprar').addEventListener('click', () => {
  if (carrito.length === 0) {
    alert('El carrito está vacío.');
    return;
  }
  mostrarResumenPedido();
  document.getElementById('modal-compra').style.display = 'flex';
  document.getElementById('mensaje-exito').style.display = 'none';
  document.getElementById('form-compra').reset();
});

document.getElementById('cerrar-modal-compra').addEventListener('click', () => {
  document.getElementById('modal-compra').style.display = 'none';
});

document.getElementById('form-compra').addEventListener('submit', function(e) {
  e.preventDefault();
  const pago = this.pago.value;
  const domicilio = this.domicilio.value.trim();
  const telefono = this.telefono.value.trim();

  if (!pago) {
    alert('Por favor, seleccioná un método de pago.');
    return;
  }
  if (!domicilio) {
    alert('Por favor, ingresá un domicilio.');
    this.domicilio.focus();
    return;
  }
  if (!/^\d{8,15}$/.test(telefono)) {
    alert('El teléfono debe tener solo números (8 a 15 dígitos).');
    this.telefono.focus();
    return;
  }

  carrito = [];
  localStorage.setItem('carrito', JSON.stringify(carrito));
  renderCarrito();

  document.getElementById('mensaje-exito').style.display = 'block';
  setTimeout(() => {
    document.getElementById('modal-compra').style.display = 'none';
  }, 2500);
});