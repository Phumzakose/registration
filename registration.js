var numberPlate = document.querySelector("#registration");
var addbtn = document.querySelector(".bttn1");
var view = document.querySelector(".bttn2");
var message = document.querySelector("#text");
var regNumber = document.querySelector(".plate");
var regEx = /^[a-zA-Z]{2}\s\d{3}[-]\d{3}$/g;
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
    "input[name='registration']:checked"
  );
  if (checkedRadioBtn) {
    var town = checkedRadioBtn.value;
    var reg = numberPlate.value.toUpperCase();
  }

  for (let i = 0; i < localStorage.length; i++) {
    let array = regList.filter(function (reg) {
      if (town === "Cape Town" && reg.startsWith("CA")) {
        message.innerHTML = array[i];
      } else if (town === "Bellville" && reg.includes("CY")) {
        regNumber.innerHTML = array[i];
      }
    });
  }
  createElement(reg);
});

// if (localStorage.getItem("regNumbers") !== null) {
//   localStorage.setItem("regNumbers", "[]");
// }
// var oldData = JSON.parse(localStorage.getItem("data"));
// oldData.push(newData);
// localStorage.setItem("data", JSON.stringify(oldData));
// if (localStorage.getItem("data") !== null) {
//   let array = old;
//   regNumber.innerHTML = oldData;
//}
