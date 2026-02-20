document.addEventListener('DOMContentLoaded', function() {
  const nombre = prompt('Cuál es tu nombre?');
  if (nombre && nombre.trim() !== '') {
    const h1 = document.querySelector('h1');
    if (h1) {
      h1.textContent = `Hola, ${nombre}`;
    }
  }

  const habilidadesList = document.querySelector('#habilidades ul');
  const contadorParrafo = document.createElement('p');
  
  if (habilidadesList) {
    habilidadesList.parentNode.appendChild(contadorParrafo);

    const items = habilidadesList.querySelectorAll('li');
    items.forEach(item => {
      item.addEventListener('click', function() {
        this.classList.toggle('seleccionado');
        const seleccionados = habilidadesList.querySelectorAll('li.seleccionado').length;
        contadorParrafo.textContent = `Habilidades seleccionadas: ${seleccionados}`;
      });
    });
  }


  const inputHabilidad = document.createElement('input');
  inputHabilidad.type = 'text';
  inputHabilidad.placeholder = 'Ingresa una nueva habilidad';

  const botonAgregar = document.createElement('button');
  botonAgregar.textContent = 'Agregar';

  if (habilidadesList) {
    habilidadesList.parentNode.insertBefore(inputHabilidad, habilidadesList);
    habilidadesList.parentNode.insertBefore(botonAgregar, habilidadesList.nextSibling);

    botonAgregar.addEventListener('click', function() {
      const valor = inputHabilidad.value.trim();
      
      
      if (valor.length >= 3) {
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = valor;
        
        nuevoLi.addEventListener('click', function() {
          this.classList.toggle('seleccionado');
          const seleccionados = habilidadesList.querySelectorAll('li.seleccionado').length;
          contadorParrafo.textContent = `Habilidades seleccionadas: ${seleccionados}`;
        });
        
        habilidadesList.appendChild(nuevoLi);
        inputHabilidad.value = '';
      } else if (valor.length > 0) {
        alert('La habilidad debe tener al menos 3 caracteres');
      }
    });

    
    inputHabilidad.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        botonAgregar.click();
      }
    });
  }
  
 
  const form = document.getElementById('form-contacto');
  const nombreContacto = document.getElementById('nombre-contacto');
  const emailContacto = document.getElementById('email-contacto');
  const mensaje = document.getElementById('mensaje');
  const errorMsg = document.getElementById('error-msg');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (!errorMsg) return;
      errorMsg.textContent = '';
      
      const nombreVal = nombreContacto ? nombreContacto.value.trim() : '';
      if (nombreVal.length < 3) {
        errorMsg.textContent = 'El nombre debe tener al menos 3 caracteres';
        if (nombreContacto) nombreContacto.focus();
        return;
      }
      
      const mensajeVal = mensaje ? mensaje.value.trim() : '';
      if (mensajeVal === '') {
        errorMsg.textContent = 'El mensaje no puede estar vacío';
        if (mensaje) mensaje.focus();
        return;
      }
      alert('Mensaje enviado correctamente');
      form.reset();
      errorMsg.textContent = '';
    });
  }
  
});

