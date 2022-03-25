const input1 = document.querySelector("#input1");
const input1ErrorIcon = document.querySelectorAll("img")[0];
const input1ErrorText = document.querySelectorAll("h5")[0];
const input2 = document.querySelector("#input2");
const input2ErrorIcon = document.querySelectorAll("img")[1];
const input2ErrorText = document.querySelectorAll("h5")[1];
const input3 = document.querySelector("#input3");
const input3ErrorIcon = document.querySelectorAll("img")[2];
const input3ErrorText = document.querySelectorAll("h5")[2];
const input4 = document.querySelector("#input4");
const input4ErrorIcon = document.querySelectorAll("img")[3];
const input4ErrorText = document.querySelectorAll("h5")[3];
const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (input1.value === "") {
    input1.style.borderColor = "hsl(0, 100%, 74%)";
    input1ErrorIcon.style.display = "block";
    input1ErrorText.style.display = "block";
  }
  if (input2.value === "") {
    input2.style.borderColor = "hsl(0, 100%, 74%)";

    input2ErrorIcon.style.display = "block";
    input2ErrorText.style.display = "block";
  }
  if (input3.value === "" || !validateEmail(input3.value)) {
    input3.style.borderColor = "hsl(0, 100%, 74%)";

    input3ErrorIcon.style.display = "block";
    input3ErrorText.style.display = "block";
  }
  if (input4.value === "") {
    input4.style.borderColor = "hsl(0, 100%, 74%)";

    input4ErrorIcon.style.display = "block";
    input4ErrorText.style.display = "block";
  }
});
for (let i = 0; i < 4; i++) {
  document.querySelectorAll("input")[i].addEventListener("click", () => {
    document.querySelectorAll("input")[i].style.borderColor = "gray";
    document.querySelectorAll("img")[i].style.display = "none";
    document.querySelectorAll("h5")[i].style.display = "none";
    document.querySelectorAll("input")[i].value = "";
  });
}
function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }

  return false;
}
