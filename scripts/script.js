$(document).ready(function(){
    $('#title').focus();
      $('#text').autosize();
});


//https://api.whatsapp.com/send?phone=5577981235945&text=Oi%20lindo%20solteiro%20rs?
function callMeOnZap() {
  window.open('https://api.whatsapp.com/send?phone=5577981235945&text=Oi%20lindo%20solteiro%20rs?');
}

function openPopup(url) {
  // Specify the size and other parameters for the popup window
  var width = 600;
  var height = 400;
  var left = (screen.width - width) / 2;
  var top = (screen.height - height) / 2;
  var options = 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',resizable=yes,scrollbars=yes';

  // Open the popup window with the specified URL and options
  window.open(url, 'PopupWindow', options);
}