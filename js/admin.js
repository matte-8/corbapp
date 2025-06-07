
document.addEventListener('DOMContentLoaded', () => {
  const passInput = document.getElementById('admin-pass');
  const panel = document.getElementById('admin-panel');
  const sezione = document.getElementById('sezione');
  const formContainer = document.getElementById('form-container');

  passInput.addEventListener('change', () => {
    if (passInput.value === 'corb25c5') panel.classList.remove('hidden');
  });

  sezione.addEventListener('change', () => renderForm(sezione.value));

  function renderForm(type) {
    if (type === 'news') {
      formContainer.innerHTML = '<input id="titolo" placeholder="Titolo"><textarea id="testo"></textarea><button id="invia">Invia</button>';
    }
    // altre sezioni...
  }
});
