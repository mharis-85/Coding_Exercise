// function that returns true if value is email, false otherwise
export const verifyEmail = value => {
  var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRex.test(value)) {
    return true;
  }
  return false;
};

// function that verifies if a string has a given length or not
export const verifyLength = (value, length) => {
  if (value.length >= length) {
    return true;
  }
  return false;
};

// function that verifies if it contains valid swedish ssn
export const verifySSN = value => {
  var numberRex = new RegExp("[1-2][0|9][0-9]{2}[0-1][0-9][0-3][0-9][-][0-9]{4}");
  if (numberRex.test(value)) {
    return true;
  }
  return false;
};

// function that verifies if value contains only swedish Phone numbers
export const verifyPhoneNumber = value => {
  var phoneNumberRex = new RegExp(
    /^(([+]\d{2}[ ][1-9]\d{0,2}[ ])|([0]\d{1,3}[-]))((\d{2}([ ]\d{2}){2})|(\d{3}([ ]\d{3})*([ ]\d{2})+))$/gm
  );
  if (phoneNumberRex.test(value)) {
    /* alert("true"); */
    return true;
  }
  return false;
};
