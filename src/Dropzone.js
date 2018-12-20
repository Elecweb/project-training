import React from "react";
import Dropzone from "react-dropzone";
import './Form.css'

class DropzoneUpload extends React.Component {
  state = {
    files: []
  };

  onDrop = (file, callback) => {
    this.setState({
      onChange: file.map(file => Object.assign(file, { preview: URL.createObjectURL(file) }))
    });
    this.setState({
      files: file.map(file => Object.assign(file, { preview: URL.createObjectURL(file) }))
    });
    callback(file)
  }

  render() {
    const { files } = this.state;

    const thumbs = files.map(file => (
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
          onDrop={(files) => this.onDrop(files, this.props.input.onChange)}
        >
          {({ getRootProps, getInputProps }) => (
            <div className="Form-Dropzone" {...getRootProps()}>
              <input {...getInputProps()} />
              <div >Select Phofile Picture</div>
            </div>
          )}
        </Dropzone>
        {thumbs}
      </div>
    );
  }
}

export default DropzoneUpload