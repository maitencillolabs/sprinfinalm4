// USUARIO

function mensajesPedir() {

  let varMensaje = document.querySelector(".imprimirNombres");

  let primerNombre = prompt("primer nombre");
  let primerApellido = prompt("primer apellido");
  let suma = primerNombre + " " + primerApellido;

  varMensaje.innerHTML = `Bienvenido ${suma}`;

}

// CONTADOR

const valor = document.querySelector('#valor');
let contador = 0;

function incrementar() {
  contador++;
  valor.innerHTML = contador; {
    color();
  }
}

function disminuir() {
  contador--;
  valor.innerHTML = contador; {
    color();
  }
}

function resetear() {
  contador = 0;
  valor.innerHTML = contador; {
    color();
  }
}

function color() {
  if (contador < 0) {
    valor.style.color = 'red';
  } else if (contador >= 20) {
    valor.style.color = 'green';
  } else {
    valor.style.color = 'white';
  }
}