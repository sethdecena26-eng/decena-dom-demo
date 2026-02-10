const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const button = document.getElementById("submitBtn");
const output = document.getElementById("output");
const cursor = document.querySelector('.cursor-pointer');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

button.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const ageValue = ageInput.value;
  const ageNumber = Number(ageValue); 

  output.innerHTML = ""; 

  if (name === "" || ageValue === "") {
    output.innerHTML = "<p class='error'>Please fill in all fields.</p>";
    return;
  }

  output.innerHTML += `<p>Hello, <strong>${name}</strong>!</p>`;
  output.innerHTML += `<p>Your age is <strong>${ageValue}</strong>.</p>`;


  if (ageValue == 18 && ageValue === 18) {
    output.innerHTML += "<p class='success'>Age matches 18 </p>";
  } else if (ageValue == 18) {
    output.innerHTML += "<p class='success'>You are 18 Years old</p>";
  } else {
    output.innerHTML += "<p class='error'>Age does not match 18.</p>";
  }

  if (ageNumber < 18) {
    output.innerHTML += "<p>You are a minor.</p>";
  } else if (ageNumber >= 18 && ageNumber < 60) {
    output.innerHTML += "<p>You are an adult.</p>";
  } else {
    output.innerHTML += "<p>You are a senior.</p>";
  }

  if (ageNumber >= 18) {
    output.style.borderLeft = "5px solid green";
  } else {
    output.style.borderLeft = "5px solid red";
  }
});
