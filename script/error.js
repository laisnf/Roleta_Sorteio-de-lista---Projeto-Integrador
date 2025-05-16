document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const errorMsg = urlParams.get('msg');
    
    if (errorMsg) {
      document.getElementById('error-message').textContent = decodeURIComponent(errorMsg);
    }

    const retryButton = document.getElementById('retry-button');
    
    const fallbackURL = 'formulario.html'; // Substitua pelo nome real da sua página de formulário

    // Botão "Tentar novamente"
    retryButton.addEventListener('click', function() {
      if (document.referrer) {
        window.history.back();
      } else {
        window.location.href = fallbackURL;
      }
    });

    // Redirecionamento automático após 10s
    setTimeout(() => {
      if (document.referrer) {
        window.history.back();
      } else {
        window.location.href = fallbackURL;
      }
    }, 10000);
});
