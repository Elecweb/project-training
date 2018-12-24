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

export function apiRegister(file) {
  return fetch("http://apiriderr.20scoopscnx.com/api/register", {
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
      newslatter: file.newslatter,
      profile_image: file.photo
    })
  });
}
