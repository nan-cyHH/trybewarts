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
