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
      .then(res => {
        if (res.success === false) {
          throw new Error();
        } else {
          return res;
        }
      })
      .then(res => {
        this.props.history.push("/Profile");
        this.props.saveData(res.data);
      })
      .catch(() => {
        const pathName = this.props.location.pathname;
        if (pathName) {
        } else {
          this.props.history.push("Login");
        }
      });
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

export default compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps
  )
)(AuthCheck);
