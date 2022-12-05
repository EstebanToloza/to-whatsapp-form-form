function isMobile() {
  if (sessionStorage.desktop) return false;
  else if (localStorage.mobile) return true;
  var mobile = [
    'iphone',
    'ipad',
    'android',
    'blackberry',
    'nokia',
    'opera mini',
    'windows mobile',
    'windows phone',
    'iemobile',
  ];
  for (var i in mobile)
    if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0)
      return true;
  return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '3412296117';

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>';
  buttonSubmit.disabled = true;
  setTimeout(() => {
    let nombre = document.querySelector('#nombre').value;
    let apellidos = document.querySelector('#apellidos').value;
    let email = document.querySelector('#email').value;
    let mensaje =
      '*¿Cual es tu nombre?*\n' +
      nombre +
      '\n\n*¿Cuáles son tus apellidos?*\n' +
      apellidos +
      '\n\n*¿Cuál es tu correo electrónico?*\n' +
      email +
      '';
    if (isMobile()) {
      window.open(
        urlMobile +
          'send?phone=' +
          telefono +
          '&text=' +
          encodeURIComponent(mensaje),
        '_blank'
      );
    } else {
      window.open(
        urlDesktop +
          'send?phone=' +
          telefono +
          '&text=' +
          encodeURIComponent(mensaje),
        '_blank'
      );
    }
    buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp';
    buttonSubmit.disabled = false;
  }, 3000);
});
