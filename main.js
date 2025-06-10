// Fechar modais com ESC
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    document.querySelectorAll('.modal.show').forEach(modal => {
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

// Validação do formulário de contato (só se existir)
const formContato = document.querySelector('form');
if (formContato && formContato.querySelector('#email') && formContato.querySelector('#nome') && formContato.querySelector('#mensagem')) {
  const nome = formContato.querySelector('#nome');
  const email = formContato.querySelector('#email');
  const mensagem = formContato.querySelector('#mensagem');
  const btnEnviar = formContato.querySelector('button[type="submit"]');

  function validarEmail(valor) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
  }

  function validarCampos() {
    const nomeValido = nome.value.trim();
    const emailValido = validarEmail(email.value.trim());
    const mensagemValida = mensagem.value.trim();
    btnEnviar.disabled = !(nomeValido && emailValido && mensagemValida);
    email.classList.toggle('is-invalid', email.value && !emailValido);
  }

  [nome, email, mensagem].forEach(el => el.addEventListener('input', validarCampos));

  formContato.addEventListener('submit', function(e) {
    e.preventDefault();
    const toastEl = document.getElementById('toastContato');
    if (toastEl && typeof bootstrap !== "undefined") {
      new bootstrap.Toast(toastEl).show();
    }
    formContato.reset();
    btnEnviar.disabled = true;
    email.classList.remove('is-invalid');
  });
}