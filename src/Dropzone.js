import React, { Component } from "react";
import Dropzone from "react-dropzone";
import "./Form.css";
import { apiUpload } from "./Api";

class DropzoneUpload extends Component {
  state = {
    files: []
  };

  onDrop = (file, callback) => {
    this.setState({
      files: (file, { preview: URL.createObjectURL(file) })
    });
    apiUpload(file).then(callback);
  };

  render() {
    const { files } = this.state;
    const profilepicture = files.preview;
    return (
      <div>
        <Dropzone
          onDrop={files => this.onDrop(files[0], this.props.input.onChange)}
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
        <img src={profilepicture} />
      </div>
    );
  }
}

export default DropzoneUpload;
