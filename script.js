function enviarCita() {
  const nombre = document.getElementById('nombre').value || 'Cliente';
  const modelo = document.getElementById('modelo').value || 'mi celular';
  const fecha = document.getElementById('fecha').value || 'sin especificar';
  const hora = document.getElementById('hora').value || 'sin especificar';
  const mensaje = document.getElementById('mensaje').value || 'sin descripción';

  const texto = `Hola Iván! 
Nombre: ${nombre}
Modelo: ${modelo}
Día que necesita la reparación: ${fecha}
Hora aproximada que traerá el equipo: ${hora}
Descripción del problema: ${mensaje}

Gracias!`;

  window.open(`https://wa.me/528714837831?text=${encodeURIComponent(texto)}`, '_blank');
}
