describe("The registration function", function () {
  it("should be able to get the stored registration numbers", function () {
    let registration = RegistrationFactory();
    registration.storeReg("CA-436754");
    registration.storeReg("CY-336764");
    registration.storeReg("CJ-53");
    registration.storeReg("");
    registration.equal;

    assert.deepEqual(["CA-436754", "CY-336764"], registration.storedNumbers());
  });
  it("should be able to check if the registration number was entered", function () {
    let registration = RegistrationFactory();
    registration.storedNumbers("CA-436754");

    assert.equal(
      "This registration number was already checked",
      registration.storeReg("CA-436754")
    );
  });
  it("should be able to return an error message if there is no registration entered", function () {
    const registration = RegistrationFactory();
    registration.errorMessage();
    assert.equal(
      "Please enter a valid registration number",
      registration.errorMessage("CA-123")
    );
  });
  it("should be able to return an error message if the registration number is not valid", function () {
    const registration = RegistrationFactory();
    registration.errorMessage();

    assert.equal(
      "You forgot to enter your registration number",
      registration.errorMessage("")
    );
  });
  it("should be able to check where the registration number belongs", function () {
    let registration = RegistrationFactory();
    registration.checkReg("CapeTown");
    registration.checkReg("Bellville");
    registration.checkReg("Kuilsriver");
    registration.checkReg("Stellenbosch");

    assert.equal("CA-123453", registration.storedNumbers());
    assert.equal("CY-253453", registration.storedNumbers());
    assert.equal("CJ-253453", registration.storedNumbers());
    assert.equal("CL-253453", registration.storedNumbers());
  });
});
