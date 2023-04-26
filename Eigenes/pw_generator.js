// const signPool = {
    // signs: "a","b", "c", "d", "e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    //          "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    //         "1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","(",")","-","_","=","<",">","?","/","[","]","{","}","|"};
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

        // Abfrage der gewünschten Passwort-Länge
const passwordLength = parseInt(prompt("Geben Sie die gewünschte Länge des Passworts ein:"));

// Festlegen der maximalen Passwort-Länge
const maxLength = 200;

// Generierung einer zufälligen Zeichenfolge aus dem signPool-Array
let password = "";
for (let i = 0; i < passwordLength && i < maxLength; i++) {
  const randomIndex = Math.floor(Math.random() * signPool.signs.length);
  password += signPool.signs[randomIndex];
}
// console.log(password); // Gibt das zufällige Passwort aus
alert(password); // Gibt das zufällige Passwort in einer alert-box aus!