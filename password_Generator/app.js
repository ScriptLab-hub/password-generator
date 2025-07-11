function generatePassword(){
    const length = parseInt (document.getElementById("length").value);
    if (length>32){
        alert("Length should be within 32 characters");
        return;
    }
    const includeUpperCase= document.getElementById("uppercase").checked;
    const includeLowerCase= document.getElementById("lowercase").checked;
    const includeNumbers= document.getElementById("numbers").checked;
    const includeSymbols= document.getElementById("symbols").checked;


    const UppercaseChars= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LowerCaseChars= "abcdefghijklmnopqrstuvwxyz";
    const NumberChars= "0123456789";
    const SymbolsChars= "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let allChars="";
    let password="";

    if (includeUpperCase) allChars +=UppercaseChars;
    if (includeLowerCase) allChars +=LowerCaseChars;
    if (includeNumbers) allChars += NumberChars;
    if (includeSymbols) allChars += SymbolsChars;

    if (allChars===""){
        alert("Please Select Atleast one Option");
        return;
    }

    for (let i=0; i< length; i++){
        const randomIndex= Math.floor(Math.random()*allChars.length);
        password += allChars[randomIndex];
    }
    document.getElementById("result").innerText=password;
}

// Function to copy password to clipboard
function CopyPassword() {
      console.log("Copy button clicked ✅"); // Check if click is detected

  const password = document.getElementById("result").innerText;

  if (!password || password.trim() === "") {
    alert("No password to copy!");
    return;
  }

  navigator.clipboard.writeText(password)
      .then(() => alert("Password copied to clipboard! ✅"))

    // .then(() => alert("Password copied to clipboard!"))
    // .catch(() => alert("Failed to copy password."));
.catch(err => {
      console.error("Clipboard Error ❌", err);
      alert("Failed to copy password.");
    });
}