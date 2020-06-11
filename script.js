/*eslint-env browser*/
/*
 * Encrypts or decrypts text 
 * with a password.
 */

var decryptButton = document.getElementById("decrypt-button");
var encryptButton = document.getElementById("encrypt-button");
var textArea = document.getElementById("text-area");
var outputArea = document.getElementById("output-area");
var pwField = document.getElementById("pw-field");
var link = "";

var urlParams = new URLSearchParams(window.location.search);

if (urlParams.has("text")) {
  textArea.value = urlParams.get("text");
}

encryptButton.onclick = function () {
  var text = textArea.value;
  var pw = pwField.value;
  outputArea.value = CryptoJS.AES.encrypt(text, pw);
  var url = window.location.href + "?text=" + encodeURIComponent(outputArea.value);
  link = url;
}

decryptButton.onclick = function () {
  var text = textArea.value;
  var pw = pwField.value;
  outputArea.value = CryptoJS.AES.decrypt(text, pw).toString(CryptoJS.enc.Utf8);
}

document.getElementById("copy-link-button").onclick = function () {
  copy(link);
}

function copy(value) {
  var tempInput = document.createElement("input");
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}
