const form = document.getElementById('form-subscribe');
const formMessage_div = document.getElementById('info-message');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  formMessage_div.style.display = 'block';
  formMessage_div.innerText = '';

  let messages = [
    'Thank You! Please check your email',
    'Oops! Please add your email',
    'Oops! Please check your email'
  ];

  let validRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+))/

  if (form.email.value === '') {
    formMessage_div.innerText = messages[1];
    formMessage_div.classList.add('error-msg');

  } else if (form.email.value.match(validRegex)) {
    formMessage_div.classList.add('validate-msg');
    formMessage_div.innerText = messages[0];
  } else {
    formMessage_div.classList.remove('validate-msg');
    formMessage_div.classList.add('error-msg');
    formMessage_div.innerText = messages[2];
  }

});
