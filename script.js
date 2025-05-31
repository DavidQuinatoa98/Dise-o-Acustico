document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contacto');
  const respuesta = document.getElementById('respuesta');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === '' || mensaje === '') {
      respuesta.textContent = 'Por favor completa todos los campos.';
      respuesta.style.color = 'red';
    } else {
      respuesta.textContent = `¡Gracias, ${nombre}! Tu mensaje ha sido enviado correctamente.`;
      respuesta.style.color = 'green';
      form.reset();
    }
  });

  const darkModeBtn = document.getElementById('toggle-dark-mode');
  darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeBtn.textContent = document.body.classList.contains('dark-mode')
      ? '☀️ Cambiar a modo claro'
      : '🌙 Cambiar a modo oscuro';
  });
});
