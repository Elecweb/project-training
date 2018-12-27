/*import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class AuthCheck extends Component {
  componentDidMount = () => {
    fetch("http://apiriderr.20scoopscnx.com/api/me?lang=en", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Id_token")
      }
    })
      .then(Response => Response.json())
      .then(res => this.props.saveData(res.data));
  };

  render() {
    return this.props.children;
  }
}

const mapDispatchToProps = dispatch => ({
  saveData(res) {
    dispatch({
      type: "Login",
      data: res
    });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AuthCheck);
*/