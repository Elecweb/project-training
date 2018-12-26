import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
import { Link, withRouter } from "react-router-dom";
import { apiLogin } from "./apiLogin";
import { required, requiredemail } from "./validatefunction";
import { connect } from "react-redux";
import ErrorMessage from "./Errormessage";

class Login_Form extends Component {
  state = { keepToken: [] };
  showResults = values => {
    return apiLogin(values)
      .then(res => this.props.saveData(res))
      .then(() => this.props.history.push("/Profile"))
      .catch(() => ({
        [FORM_ERROR]: "Login Fail!!!"
      }));
  };

  componentDidMount = () => {
    fetch("http://apiriderr.20scoopscnx.com/api/me", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Id_token")
      }
    })
      .then(Response => Response.json())
      .then(res => {
        this.setState({ keepToken: res.success });
      });
  };

  render() {
    if (this.state.keepToken === true) {
      this.props.history.push("/Profile");
    }
    return (
      <div className="Form-box">
        <Form onSubmit={this.showResults}>
          {({ handleSubmit, submitError }) => (
            <form onSubmit={handleSubmit}>
              <div className="Form-headfont">Login</div>
              <div className="Form-box2">
                <Field name="login_email" validate={requiredemail}>
                  {({ input, meta }) => (
                    <div>
                      <label>E-mail</label>
                      <input
                        className="Form-input"
                        {...input}
                        placeholder="E-mail"
                        id="loginemail"
                        required
                      />
                      <ErrorMessage meta={meta} />
                    </div>
                  )}
                </Field>
                <Field name="login_password" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <label>Password</label>
                      <input
                        type="password"
                        className="Form-input"
                        {...input}
                        placeholder="Password"
                        required
                        id="loginpassword"
                      />
                      <ErrorMessage meta={meta} />
                    </div>
                  )}
                </Field>
                {submitError && (
                  <div style={{ color: "red", textAlign: "center" }}>
                    {submitError}
                  </div>
                )}
                <button
                  className="Form-submit"
                  type="submit"
                  onClick={this.checklogin}
                  style={{ marginLeft: "35%" }}
                >
                  Login
                </button>
                <Link to="/Register">
                  <button className="Form-submit" style={{ marginLeft: "35%" }}>
                    Register
                  </button>
                </Link>
              </div>
            </form>
          )}
        </Form>
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login_Form)
);
