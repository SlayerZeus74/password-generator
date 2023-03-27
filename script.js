const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let generateElOne = document.getElementById("password-elOne")
let generateElTwo = document.getElementById("password-elTwo")

function generate(){
    pwdOne=""
    pwdTwo=""
    for(let i = 0; i<15; i++){
    let randomPwd = Math.floor(Math.random()*characters.length)
    pwdOne += characters[randomPwd]
    generateElOne.value = pwdOne 
  
}
for(let i = 0; i<15; i++){
    let randomPwd = Math.floor(Math.random()*characters.length)
    pwdTwo += characters[randomPwd]
    generateElTwo.value = pwdTwo
   
}
}


function copyPwdOne(){
    const passwordEl = document.getElementById(`password-elOne`);
    passwordEl.select();
    passwordEl.setSelectionRange(0, 99999); // For mobile devices
   
      // Copy the text inside the text field
     navigator.clipboard.writeText(passwordEl.value);
   
     // Alert the copied text
     alert(`Copied the password: ` + passwordEl.value);
}


function copyPwdTwo(){
    const passwordEl = document.getElementById(`password-elTwo`);
    passwordEl.select();
    passwordEl.setSelectionRange(0, 99999); // For mobile devices
   
      // Copy the text inside the text field
     navigator.clipboard.writeText(passwordEl.value);
   
     // Alert the copied text
     alert(`Copied the password: ` + passwordEl.value);
}


//Short-hand

// function copyPwd(id) {
//     const passwordEl = document.getElementById(`password-el${id}`);
//     passwordEl.select();
//     passwordEl.setSelectionRange(0, 99999); // For mobile devices
//     navigator.clipboard.writeText(passwordEl.value);
//     alert(`Password ${id} copied to clipboard: ${passwordEl.value}`);
//   }