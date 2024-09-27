// Simulación de una alerta de ejemplo al hacer clic en 'Añadir al carrito'
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Producto añadido al carritoo.');
    });
});
