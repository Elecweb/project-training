export function required(value) {
  if (!value || value.length < 4 || value.length > 16) {
    return "Required field ,  between 4-16 character";
  } else {
    return null;
  }
}

export function requiredpicture(value) {
  if (!value) {
    return "Required Profile Picture";
  } else {
    return null;
  }
}

export function checkmatchpassword(value, allValues) {
  let password = allValues.password;
  let confirmpass = value;

  if (password !== confirmpass) {
    return "Password do not match";
  } else if (!confirmpass) {
    return "Required field ,  between 4-16 character";
  }
}

export function requiredemail(value) {
  let validemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])/;
  if (!validemail.test(value)) {
    return "Required E-mail";
  }
}

export function newslatterCheck(value) {
  if (value == true) {
    return 1
  } else {
    return 0
  }
}
