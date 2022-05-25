function RegistrationFactory(regList) {
  var regNumber = regList || [];
  var regEx = /^[A-Z]{2}[-]\d{6}$/g;

  function storeReg(reg) {
    if (!reg == "" && !regNumber.includes(reg) && reg == reg.match(regEx)) {
      regNumber.push(reg);
    }
    if (regNumber.includes(reg)) {
      return "This registration number was already checked";
    }
  }
  function errorMessage(reg) {
    if (reg == "") {
      return "You forgot to enter your registration number";
    } else if (reg !== regEx) {
      return "Please enter a valid registration number";
    }
    // else if (regList.includes(reg)) {
    //   return "This registration number was already checked";
    // }
  }
  function storedNumbers() {
    return regNumber;
  }
  function checkReg(town, regNumber) {
    var regTown = regNumber.split(",");
    for (let i = 0; i < regTown.length; i++) {
      if (town === "Cape Town" && regTown.startsWith("CA")) {
        return regTown;
      } else if (town === "Kuilsriver" && regTown.startsWith("CF")) {
        return regTown;
      } else if (town === "Bellville" && regTown.startsWith("CY")) {
        return regTown;
      } else if (town === "Stellenbosch" && regTown.startsWith("CL")) {
        return regTown;
      }
    }
  }

  return {
    storeReg,
    checkReg,
    errorMessage,
    storedNumbers,
  };
}
