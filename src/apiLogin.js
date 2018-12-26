import { checkLogin } from "./Api";

export function apiLogin(data) {
  return fetch("http://apiriderr.20scoopscnx.com/api/login-email?lang=en", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: data.login_email,
      password: data.login_password
    })
  })
    .then(Response => Response.json())
    .then(res => {
      checkLogin(res);
      return res.data;
    });
}
