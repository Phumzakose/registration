var numberPlate = document.querySelector("#registration");
var addbtn = document.querySelector(".bttn1");
var view = document.querySelector(".bttn2");
var message = document.querySelector("#text");
var regNumber = document.querySelector(".plate");
var regEx = /^[a-zA-Z]{2}\s{2}\d{3}[-]\d{3}$/g;
var regList = [];

if (localStorage["regNumbers"]) {
  regList = JSON.parse(localStorage.getItem("regNumbers"));
  for (let elem of regList) {
    createElement(elem);
  }
}

addbtn.addEventListener("click", function () {
  var reg = numberPlate.value.toUpperCase();

  if (reg !== "" && !regList.includes(reg) && reg == reg.match(regEx)) {
    regList.push(reg);
    createElement(reg);
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
  localStorage.setItem("regNumbers", JSON.stringify(regList));

  setTimeout(() => {
    message.innerHTML = "";
  }, "3000");
});

addbtn.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  numberPlate.value = "";
});

function createElement(regNumberItem) {
  let registration = document.createElement("li");
  registration.textContent = regNumberItem;
  regNumber.append(registration);
}

view.addEventListener("click", function () {
  var checkedRadioBtn = document.querySelector(
    "input[name='greet-language']:checked"
  );
  if (checkedRadioBtn) {
    var town = checkedRadioBtn.value;
  }
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem("regNumbers");
    if (town === "Cape Town" && value.startsWith("CA")) {
      regNumber.innerHTML = value;
    } else if (town === "Kuilsriver" && value.startsWith("CF")) {
      regNumber.innerHTML = value;
    } else if (town === "Bellville" && value.startsWith("CY")) {
      regNumber.innerHTML = value;
    } else if (town === "Stellenbosch" && value.startsWith("CL")) {
      regNumber.innerHTML = value;
    }

    //regNumber.innerHTML = value;
  }
});
