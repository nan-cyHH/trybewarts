// Captura os elementos de email, senha e botão de login
const email = document.querySelector('input[name="email"]');
const senha = document.querySelector('input[name="password"]');
const btnLogin = document.getElementById('btn-login');

function loginHeader() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', loginHeader);

const textarea = document.getElementById('comment');
const characterCount = document.getElementById('character-count');

function limitTextarea(element, maxLength) {
  if (element.value.length > maxLength) {
    element.value = element.value.slice(0, maxLength);
  }
}

textarea.addEventListener('input', () => {
  const maxLength = 500;
  const currentLength = textarea.value.length;
  const remainingLength = maxLength - currentLength;
  characterCount.textContent = `Caracteres restantes: ${remainingLength}`;

  limitTextarea(textarea, maxLength); // Chama a função limitTextarea para limitar o número máximo de caracteres
});
