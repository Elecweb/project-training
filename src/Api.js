export function apiUpload (file) {
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
};
