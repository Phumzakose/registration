var numberPlate = document.querySelector("#registration");
var submit = document.querySelector(".bttn1");
var view = document.querySelector(".bttn2");
var message = document.querySelector("#text");
var regNumber = document.querySelector(".plate");
var regNumber2 = document.querySelector(".reg-numbers");
var regEx = /^[A-Z]{2}[-]\d{6}$/g;
var regList = [];

if (localStorage["regNumbers"]) {
  regList = JSON.parse(localStorage.getItem("regNumbers"));
  //createElement(regList);
}
//regNumber.innerHTML = regList;

//const registrationInstance = RegistrationFactory(regList);

submit.addEventListener("click", function () {
  var reg = numberPlate.value;

  if (reg !== "" && !regList.includes(reg) && reg == reg.match(regEx)) {
    regList.push(reg);
    //regNumber.innerHTML = regList;
  } else if (regList.includes(reg)) {
    message.innerHTML = "This registration number was checked";
    message.style.color = "red";
  } else if (reg !== reg.match(regEx)) {
    message.innerHTML = "Please enter a valid registration number";
    message.style.color = "red";
  }
  if (reg == "") {
    message.innerHTML = "You forgot to enter your registration Number";
    message.style.color = "red";
  }
  //regNumber.innerHTML = registrationInstance.storeReg(reg);
  // message.innerHTML = registrationInstance.errorMessage(reg);
  // message.style.color = "red";

  setTimeout(() => {
    message.innerHTML = "";
  }, "3000");
  //regNumber.innerHTML = regList;
  localStorage.setItem("regNumbers", JSON.stringify(regList));

  createElement(regList);
});

function createElement(regList) {
  var reg = numberPlate.value;
  for (let i = 0; i < regList.length; i--) {
    let registration = document.createElement("border");
    registration.textContent = regList[i];
    regNumber.appendChild(registration);
  }
  if (regList.includes(reg)) {
    registration.textContent = "";
  }
}

view.addEventListener("click", newDiv);
function newDiv() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("border");
  regNumber.appendChild(newDiv);
  regNumber.innerHTML = newDiv;
}
view.addEventListener("click", function () {
  var checkedRadioBtn = document.querySelector(
    "input[name='greet-language']:checked"
  );
  if (checkedRadioBtn) {
    var town = checkedRadioBtn.value;
  }
});
