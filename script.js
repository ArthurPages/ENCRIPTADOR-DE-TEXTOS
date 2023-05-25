function encrypt() {
    var inputText = document.getElementById('input-text').value;
    var key = parseInt(document.getElementById('encryption-key').value);
    var outputText = '';
  
    for (var i = 0; i < inputText.length; i++) {
      var charCode = inputText.charCodeAt(i);
  
      if (charCode >= 65 && charCode <= 90) {
        // Caracteres en mayúscula
        charCode = ((charCode - 65 + key) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        // Caracteres en minúscula
        charCode = ((charCode - 97 + key) % 26) + 97;
      }
  
      outputText += String.fromCharCode(charCode);
    }
  
    document.getElementById('output-text').value = outputText;
  }
  
  function decrypt() {
    var inputText = document.getElementById('input-text2').value;
    var key = parseInt(document.getElementById('encryption-key2').value);
    var outputText = '';
  
    for (var i = 0; i < inputText.length; i++) {
      var charCode = inputText.charCodeAt(i);
  
      if (charCode >= 65 && charCode <= 90) {
        // Caracteres en mayúscula
        charCode = ((charCode - 65 - key + 26) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        // Caracteres en minúscula
        charCode = ((charCode - 97 - key + 26) % 26) + 97;
      }
  
      outputText += String.fromCharCode(charCode);
    }
  
    document.getElementById('output-text2').value = outputText;
  }
  