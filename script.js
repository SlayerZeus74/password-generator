const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



generateElOne = document.getElementById("password-elOne")
generateElTwo = document.getElementById("password-elTwo")

let pwdOne = ""
let pwdTwo = ""

function generate(){
    for(let i = 0; i<15; i++){
    let randomPwd = Math.floor(Math.random()*characters.length)
    pwdOne += characters[randomPwd]
    generateElOne.textContent = pwdOne 
    console.log(generateElOne)      
}
for(let i = 0; i<15; i++){
    let randomPwd = Math.floor(Math.random()*characters.length)
    pwdTwo += characters[randomPwd]
    generateElTwo.textContent = pwdTwo
    console.log(generateElTwo)      
}
   pwdOne=""
   pwdTwo=""
}