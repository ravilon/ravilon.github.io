$(document).ready(function(){
    $('#title').focus();
      $('#text').autosize();
});


//https://api.whatsapp.com/send?phone=5577981235945&text=Oi%20lindo%20solteiro%20rs?
function callMeOnZap() {
  window.open('https://api.whatsapp.com/send?phone=5577981235945&text=Oi%20lindo%20solteiro%20rs?');
}