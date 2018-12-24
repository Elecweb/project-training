import React, { Component } from "react";
import Dropzone from "react-dropzone";
import "./Form.css";
import { apiUpload } from "./Api";

class DropzoneUpload extends Component {
  state = {
    files: [],
    image: [{ name: "nothing at all" }]
  };

  onDrop = (file, callback) => {
    this.setState({
      files: file.map(file =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      )
    });
    apiUpload(file[0]).then(callback);
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
