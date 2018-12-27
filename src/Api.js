export function apiUpload(file) {
  const formData = new FormData();
  formData.append("image", file);
  formData.append("type", "account");
  formData.append("sub_type", "profile");
  return fetch(
    "http://apiriderr.20scoopscnx.com/api/image/upload/profile?lang=en",
    {
      method: "POST",
      body: formData
    }
  )
    .then(Response => Response.json())
    .then(res => {
      return res.data.original;
    });
}

export function checkLogin(data) {
  const loginStatus = data.success;
  if (loginStatus) {
    setToken(data);
  } else {
    throw Error;
  }
}

export function setToken(data) {
  localStorage.setItem("Id_token", data.data.token);
}

export function aloha(file) {
  return apiRegister(file);
}

export function apiRegister(file) {
  if (file.newslatter === true) {
    let newslattercheck = 1;
    return newslattercheck;
  } else {
    let newslattercheck = 0;
    return newslattercheck;
  }
}

export function apiRegisterDone(file) {
  return fetch("http://apiriderr.20scoopscnx.com/api/register?lang=en", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      display_name: file.displayName,
      email: file.Email,
      password: file.password,
      password_confirmation: file.ConfirmPassword,
      g_recaptcha_response: "LUoOhpwUbIe5sfgwsotJ2nDXx99jvflG",
      newsletter: apiRegister(file),
      profile_image: file.photo
    })
  })
    .then(Response => Response.json())
    .then(res => {
      duplicateEmail(res.success);
      return;
    });
}

export function duplicateEmail(success) {
  if (success === false) {
    alert("Already have an e-mail");
    throw new Error();
  } else {
    alert("Register success , Please verify email");
  }
}
