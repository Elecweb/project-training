import React from "react";
import Dropzone from "react-dropzone";
import "./Form.css";

class DropzoneUpload extends React.Component {
  state = {
    files: [],
    image: [{ name: "nothing at all" }]
  };

  ApiUpload = (file, callback) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("type", "account");
    formData.append("sub_type", "profile");
    return fetch("http://apiriderr.20scoopscnx.com/api/image/upload/profile?lang=en", {
      method: "POST",
      body: formData
    })
      .then(Response => Response.json())
      .then(res => {
        return res.data.original
      });
  };

  onDrop = (file, callback) => {
    this.setState({
      files: file.map(file =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      )
    });
    this.ApiUpload(file[0]).then(callback);
  };

  render() {
    const { files } = this.state;
    const profilepicture = files.map(file => (
      <div key={file.name}>
        <div>
          <img
            src={file.preview}
            className="Dropzone-img"
            alt="ProfilePicture"
          />
        </div>
      </div>
    ));
    return (
      <div>
        <Dropzone
          onDrop={files => this.onDrop(files, this.props.input.onChange)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className="Form-Dropzone"
              {...getRootProps()}
              style={{ cursor: "pointer" }}
            >
              <input {...getInputProps()} />
              <div>Select Phofile Picture</div>
            </div>
          )}
        </Dropzone>
        {profilepicture}
      </div>
    );
  }
}

export default DropzoneUpload;
