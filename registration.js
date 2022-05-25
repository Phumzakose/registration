var numberPlate = document.querySelector("#registration");
var addbtn = document.querySelector(".bttn1");
var view = document.querySelector(".bttn2");
var message = document.querySelector("#text");
var regNumber = document.querySelector(".plate");
//var regNumber2 = document.querySelector(".reg-numbers");
var regEx = /^[A-Z\s/]{2}\d{3}[-]\d{3}$/g;
//var regEx = /^[A-Z]{2}\d-[0-9]{6}$/g;
var regList = [];

if (localStorage["regNumbers"]) {
  regList = JSON.parse(localStorage.getItem("regNumbers"));
  //createElement(regList);
}
window.addEventListener("load", function () {
  alert(regList);
  for (let i = 0; i < regList.length; i++) {
    createElement(regList[i]);
  }
});
//regNumber.innerHTML = regList;do
//const registrationInstance = RegistrationFactory(regList);

addbtn.addEventListener("click", function () {
  var reg = numberPlate.value;

  if (reg !== "" && !regList.includes(reg) && reg == reg.match(regEx)) {
    regList.push(reg);
    localStorage.setItem("regNumbers", JSON.stringify(regList));
    alert(regList);
    for (let index = 0; index < regList.length; index++) {
      console.log(regList[index]);
      createElement(regList[index]);
    }
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

  //createElement(regList);
});

addbtn.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  numberPlate.value = "";
});

function createElement(list) {
  //var reg = numberPlate.value;
  // for (let i = 0; i < list.length; i++) {
  let registration = document.createElement("li");
  registration.innerHTML = list;
  regNumber.insertBefore(registration, regNumber.childNodes[0]);
  // }
}

view.addEventListener("click", function () {
  var checkedRadioBtn = document.querySelector(
    "input[name='greet-language']:checked"
  );
  if (checkedRadioBtn) {
    var town = checkedRadioBtn.value;
  }
  for (let i = 0; i < regList.length; i++) {
    if (town === "Cape Town" && regList.startsWith("CA")) {
      return regList[i];
    } else if (town === "Kuilsriver" && regList.startsWith("CF")) {
      return regList[i];
    } else if (town === "Bellville" && regList.startsWith("CY")) {
      return regList[i];
    } else if (town === "Stellenbosch" && regList.startsWith("CL")) {
      return regList[i];
    }
  }
  viewReg();
});

function viewReg() {
  var checkedRadioBtn = document.querySelector(
    "input[name='greet-language']:checked"
  );
  if (checkedRadioBtn) {
    var town = checkedRadioBtn.value;
  }
  if (localStorage.getItem("regNumbers") !== null) {
    for (let i = 0; i < regList.length; i++) {
      if (town === "Cape Town" && regList.startsWith("CA")) {
        regNumber.innerHTML = regList[i];
      } else if (town === "Kuilsriver" && regList.startsWith("CF")) {
        regNumber.innerHTML = regList[i];
      } else if (town === "Bellville" && regList.startsWith("CY")) {
        regNumber.innerHTML = regList[i];
      } else if (town === "Stellenbosch" && regList.startsWith("CL")) {
        regNumber.innerHTML = regList[i];
      }
    }
    //regNumber.innerHTML = JSON.parse(localStorage.getItem("regNumbers"));
  }
}
