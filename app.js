let str = "Hello World Test Test"
let key = 3

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let encryptedWord = []
let decryptedWord = []

function cipher(string, encryption_key) {
  //First we must get the whole alphabet - in an array?
  //Then we can shift.

  for(let i = 0; i < string.length; i++) {
    let getIndex = alphabet.indexOf(string[i].toLowerCase())
    let encryptedChar = alphabet[getIndex - encryption_key]
    encryptedWord.push(encryptedChar)
  }

    console.log(encryptedWord.join(""))
}

function decipher(encryptedStr, decryption_key) {
  for(let i = 0; i < encryptedStr.length; i++) {
    let getIndex = alphabet.indexOf(encryptedStr[i])
    let decryptedChar = alphabet[getIndex + decryption_key]
    decryptedWord.push(decryptedChar)
  }

  console.log(decryptedWord.join(""))
}

window.onload = function() {
  cipher(str, key)
  setTimeout(function() {
    decipher(encryptedWord, key)
  }, 100)
}
