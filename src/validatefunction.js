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
  let confirmpass = value

  if (password !== confirmpass) {
    return "Password do not match";
  } else if (!confirmpass) {
    return "Required field ,  between 4-16 character";
  }
}
