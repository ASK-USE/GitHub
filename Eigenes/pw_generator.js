const signPool = { 
    signs: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#", "$", "%", "^", "&", "*", ")", "(", "-", "_", "=", "<", ">", "?", "/", 
    "]", "[","}","{", "|"]
};
       
    //   // Generiert zufällige Zahl zwischen 0 (einschließlich) und der Länge des signPool.signs-Arrays (und 1 (ausschließlich))      
    //     const randomIndex = Math.floor(Math.random() * signPool.signs.length);
       
    //     // Greifen Sie auf das zufällige Element zu
    //     const randomSign = signPool.signs[randomIndex];
        
    //      // Gibt ein zufälliges Element aus dem signPool-Array aus
    //     console.log(randomSign);

        // Abfrage der gewünschten Passwort-Länge- leider auch negative Zahlen
// const passwordLength = parseInt(prompt("character-length: "));

// Abfrage der gewünschten Passwort-Länge - nur zahlen werden gewertet minus nicht.
const passwordLength = Math.abs(parseInt(prompt("character-length: ")));

if (passwordLength > 200) {
    alert("uhh.. Bigboy!.. max. 200 characters permitted!");
    passwordLength = 200;
  } else if (passwordLength === 0) {
    alert("at least 1 character needed!");
  } else {
        const maxLength = 200;// Festlegen der maximalen Passwort-Länge
        const actualLength = Math.min(passwordLength, maxLength);
// Generierung einer zufälligen Zeichenfolge aus dem signPool-Array
let password = "";
for (let i = 0; i < passwordLength && i < maxLength; i++) {
  const randomIndex = Math.floor(Math.random() * signPool.signs.length);
  password += signPool.signs[randomIndex];
}
// console.log(password); // Gibt das zufällige Passwort aus
// alert(password); // Gibt das zufällige Passwort in einer alert-box aus!
alert(`Your new Password is: ${password}`);}