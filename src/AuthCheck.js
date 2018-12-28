import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class AuthCheck extends Component {
  componentDidMount = () => {
    fetch("http://apiriderr.20scoopscnx.com/api/me?lang=en", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Id_token")
      }
    })
      .then(Response => Response.json())
      .then(res => this.aloha(res.success) & this.props.saveData(res.data));
  };

  aloha(token) {
    if (token === true) {
      this.props.history.push("/Profile");
    } else {
      this.props.history.push("/Login");
    }
  }
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

export default compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps
  )
)(AuthCheck);
