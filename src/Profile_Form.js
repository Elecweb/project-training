import React, { Component } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Profile extends Component {
  state = { data: [] };
  onLogout = () => {
    localStorage.removeItem("Id_token");
  };

  render() {
    const userdata = this.props.data;

    return (
      <div className="Form-box">
        <form>
          <img className="Dropzone-img" src={userdata.profile_image} />
          <div />
          Display name:
          <div className="Form-input">{userdata.display_name} </div>
          <div>
            Email <span className="Form-input">{userdata.email}</span>
          </div>
          <div>
            Facebook <div className="Form-input">{userdata.facebook} </div>
          </div>
          <div>
            Google Puls
            <div className="Form-input">{userdata.google_plus}</div>
          </div>
          <div>
            ID <div className="Form-input">{userdata.id}</div>
          </div>
          <div>
            Instragram<div className="Form-input">{userdata.instragram}</div>
          </div>
          <div>
            Linkedin<div className="Form-input">{userdata.linkedin}</div>
          </div>
          <div>
            Twitter<div className="Form-input">{userdata.twitter}</div>
          </div>
        </form>
        <Link to="/Login">
          <button onClick={this.onLogout} className="Form-logout">
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

export default connect(
  mapStateToProps,
  null
)(Profile);
