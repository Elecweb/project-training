import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { Redirect } from "react-router-dom";
import { apiLogin } from "./Api";
import { required } from "./validatefunction";

const showResults = values => {
  apiLogin(values);
};
class Login_Form extends Component {
  state = { redirectToReferrer: false };

  backRegister = () => {
    this.setState({ redirectToReferrer: true });
  };

  render() {
    let { form } = this.props.location.state || {
      form: { pathname: "/Register" }
    };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={form} />;
    return (
      <div className="Form-box">
        <Form onSubmit={showResults}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="Form-headfont">Login</div>
              <div className="Form-box2">
                <Field name="login_email">
                  {({ input }) => (
                    <div>
                      <label>E-mail</label>
                      <input
                        type="email"
                        className="Form-input"
                        {...input}
                        placeholder="E-mail"
                        id="loginemail"
                        required
                      />
                    </div>
                  )}
                </Field>
                <Field name="login_password" validate={required}>
                  {({ input }) => (
                    <div>
                      <input
                        type="password"
                        className="Form-input"
                        {...input}
                        placeholder="Password"
                        required
                        pattern="[A-Za-z0-9]{4-20}"
                        title="A-Z , a-z , 0-9 between 4-20 character"
                        id="loginpassword"
                      />
                    </div>
                  )}
                </Field>
                <button
                  className="Form-submit"
                  type="submit"
                  onClick={this.checklogin}
                  style={{ marginLeft: "35%" }}
                >
                  Login
                </button>
                <button
                  className="Form-submit"
                  type="submit"
                  onClick={this.backRegister}
                  style={{ marginLeft: "35%" }}
                >
                  Register
                </button>
              </div>
            </form>
          )}
        </Form>
      </div>
    );
  }
}

export default Login_Form;
