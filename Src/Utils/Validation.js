export const validateEmail = email => {
  const emailRegex =
    /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,5}$/;

  email = email.trim();

  if (email === '' || email === undefined || email === null) {
    return {status: false, error: 'Please enter email'};
  } else if (!emailRegex.test(email)) {
    return {status: false, error: 'Email is not valid'};
  } else {
    return {status: true, error: ''};
  }
};

export const validateSpace = text => {
  var ragex = /[*%#:&\s]/;
  if (ragex.test(text)) {
    return {status: false, error: 'Space not allowed'};
  } else {
    return {status: true, error: ''};
  }
};

export const validatePhoneNo = no => {
  // var phoneno = /^\d{10}$/;
  var phoneno =
    /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/;
  no = no.trim();
  if (no == '' || no == undefined || no == null) {
    return {status: false, error: 'Please enter phone number'};
  } else if (!phoneno.test(no)) {
    return {status: false, error: 'Phone number is not valid'};
  } else {
    return {status: true, error: ''};
  }
};
export const validatePassword = no => {
  // var phoneno = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  no = no.trim();
  if (no == '' || no == undefined || no == null) {
    return {status: false, error: 'Please enter password'};
  } else if (no.length < 6) {
    return {status: false, error: 'Password min length is 6 characters'};
  } else {
    return {status: true, error: ''};
  }
};

export const validateFirstName = name => {
  const nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
  const trimmedName = name?.trim(); // Use optional chaining to handle undefined/null safely

  if (!trimmedName) {
    return {status: false, error: 'Please enter a valid name'};
  }

  if (!nameRegex.test(trimmedName)) {
    return {status: false, error: 'Please enter a valid name'};
  }

  return {status: true, error: ''};
};
