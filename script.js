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

encryptButton.onclick = function () {
  var text = textArea.value;
  var pw = pwField.value;
  outputArea.value = CryptoJS.AES.encrypt(text, pw);
}

decryptButton.onclick = function () {
  var text = textArea.value;
  var pw = pwField.value;
  outputArea.value = CryptoJS.AES.decrypt(text, pw).toString(CryptoJS.enc.Utf8);
}