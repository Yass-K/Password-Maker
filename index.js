const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSpecialChars = "&~#!?%;,\":'@=^";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

// console.log(dataUppercase);
const generatePassword = () => {
    let data = [];
    let password = "";

    if (lowercase.checked) data.push(...dataLowercase);
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (specialChars.checked) data.push(...dataSpecialChars);

    if (data.length === 0) {
        alert('Please check some criters');
        return;
    }

    for (i = 0; i < rangeValue.value; i++) {
        password += data[Math.floor(Math.random() * data.length)];
        // console.log(password);
    }

    passwordOutput.value = password;

    // select the value of the password input and copy it automatically
    passwordOutput.select();
    document.execCommand("copy");

    generateButton.textContent = "Copied !";

    setTimeout(() => {
        generateButton.textContent = "Generate password";
        }, 3000);

}

generateButton.addEventListener("click", generatePassword);
