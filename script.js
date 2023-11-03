document.addEventListener('DOMContentLoaded', function() {
    const balaoFala = document.querySelector('.balao-fala');
    const fecharBalao = document.querySelector('.fechar');

    fecharBalao.addEventListener('click', function() {
        balaoFala.style.display = 'none';
    });
});
