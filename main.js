// Fechar modais com ESC
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    const modais = document.querySelectorAll('.modal.show');
    modais.forEach(modal => {
      const modalInstance = bootstrap.Modal.getInstance(modal);
      if (modalInstance) modalInstance.hide();
    });
  }
});

// Foco automático no formulário de contato
window.addEventListener('DOMContentLoaded', function() {
  const nomeInput = document.querySelector('#nome');
  if (nomeInput) nomeInput.focus();
});

// Rolagem suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Validação do formulário de contato
const formContato = document.querySelector('form');
if (formContato) {
  const nome = formContato.querySelector('#nome');
  const email = formContato.querySelector('#email');
  const mensagem = formContato.querySelector('#mensagem');
  const btnEnviar = formContato.querySelector('button[type="submit"]');

  function validarEmail(valor) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
  }

  function validarCampos() {
    const nomeValido = nome.value.trim().length > 0;
    const emailValido = validarEmail(email.value.trim());
    const mensagemValida = mensagem.value.trim().length > 0;
    btnEnviar.disabled = !(nomeValido && emailValido && mensagemValida);

    // Mostra feedback enquanto digita
    if (email.value.length > 0) {
      email.classList.toggle('is-invalid', !emailValido);
    } else {
      email.classList.remove('is-invalid');
    }
  }

  nome.addEventListener('input', validarCampos);
  email.addEventListener('input', validarCampos);
  mensagem.addEventListener('input', validarCampos);

  formContato.addEventListener('submit', function(e) {
    e.preventDefault();
    // Exibe o toast estilizado
    const toastEl = document.getElementById('toastContato');
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
    formContato.reset();
    btnEnviar.disabled = true;
    email.classList.remove('is-invalid');
  });
}