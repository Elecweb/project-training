import React, { Component } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Profile extends Component {
  state = { data: [] };
  onLogout = () => {
    localStorage.removeItem("Id_token");
  };

  componentDidMount = () => {
    fetch("http://apiriderr.20scoopscnx.com/api/me", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Id_token")
      }
    })
      .then(Response => Response.json())
      .then(res => this.props.saveData(res.data))
      .catch(() => this.props.history.push("/Login"));
  };

  render() {
    const userdata = this.props.data;
    
    return (
      <div className="Form-box">
        <form>
          <img className="Dropzone-img" src={userdata.profile_image} />
          <div className="Form-input">
            Display name: {userdata.display_name}{" "}
          </div>
          <div className="Form-input">Email: {userdata.email} </div>
          <div className="Form-input">Facebook {userdata.facebook} </div>
          <div className="Form-input">Google Puls {userdata.google_plus} </div>
          <div className="Form-input">ID {userdata.id}</div>
          <div className="Form-input">Instragram{userdata.instragram}</div>
          <div className="Form-input">Linkedin{userdata.linkedin}</div>
          <div className="Form-input">
            Recive Newsletter{userdata.newsletter}
          </div>
          <div className="Form-input">Twitter{userdata.twitter}</div>
        </form>
        <Link to="/Login">
          <button onClick={this.onLogout} className="Form-submit">
            Logout
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.saveData
});

const mapDispatchToProps = dispatch => ({
  saveData(res) {
    dispatch({
      type: "Login",
      data: res
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
