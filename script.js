
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    window.location.href = 'consultar.html'; // Redirige a la nueva página
});

document.getElementById('signupButton').addEventListener('click', function() {
    alert('Crear cuenta');
});

