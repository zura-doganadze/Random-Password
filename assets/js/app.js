const passwordBox = document.getElementById("password");
const generateButton = document.getElementById("generate-button");
const copyImg = document.getElementById("copy-img");
const lenght = 12;

// The data from which the code will be generated
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

// A function that will generate a password when the button is clicked
generateButton.addEventListener("click", function () {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (lenght > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
});

// copy button
// copyImg.addEventListener("click", function copyPassword() {
//     passwordBox.select();
//     document.execCommand("copy")
// })

// There is a button that will copy the password when you click on the copy button
copyImg.addEventListener("click", async function () {
  const passwordToCopy = passwordBox.value;

  try {
    await navigator.clipboard.writeText(passwordToCopy);
    console.log("Password copied to clipboard.");
  } catch (err) {
    console.error("Failed to copy password: ", err);
  }
});