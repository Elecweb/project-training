import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import DropzoneUpload from "./Dropzone";
import "./Form.css";
import {
  required,
  requiredpicture,
  checkmatchpassword,
  requiredemail
} from "./validatefunction";
import { apiRegister } from "./Api";
import { Redirect, Link } from "react-router-dom";
import ErrorMessage from "./Errormessage";

class Register extends Component {
  state = { redirectToReferrer: false, keepToken: [] };

  showResults = values => {
    apiRegister(values);
    alert("Register Success");
    this.setState({ redirectToReferrer: true });
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
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to="Login" />;

    return (
      <div>
        <div className="Form-box">
          <Form onSubmit={this.showResults}>
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="Form-headfont">Sign up</div>
                <div className="Form-box2">
                  <Field name="displayName" validate={required}>
                    {({ input, meta }) => (
                      <div>
                        <label style={{ textAlign: "left" }}>
                          Display Name
                        </label>
                        <input
                          type="text"
                          {...input}
                          className="Form-input"
                          placeholder="First Name"
                        />
                        <ErrorMessage meta={meta} />
                      </div>
                    )}
                  </Field>
                  <Field name="Email" validate={requiredemail}>
                    {({ input, meta }) => (
                      <div>
                        <label>Email</label>
                        <input
                          type="email"
                          {...input}
                          className="Form-input"
                          placeholder="example@gmail.com"
                        />
                        <ErrorMessage meta={meta} />
                      </div>
                    )}
                  </Field>
                  <Field name="password" validate={required}>
                    {({ input, meta }) => (
                      <div>
                        <label>Passsword</label>
                        <input
                          type="password"
                          {...input}
                          className="Form-input"
                          placeholder="Password"
                        />
                        <ErrorMessage meta={meta} />
                      </div>
                    )}
                  </Field>
                  <Field name="ConfirmPassword" validate={checkmatchpassword}>
                    {({ input, meta }) => (
                      <div>
                        <label>Confirm Passsword</label>
                        <input
                          type="password"
                          {...input}
                          className="Form-input"
                          placeholder="Comfirm Password"
                          id="confirmpassword"
                        />
                        <ErrorMessage meta={meta} />
                      </div>
                    )}
                  </Field>
                  <div>
                    <Field name="newslatter">
                      {({ input }) => (
                        <div>
                          <input
                            type="checkbox"
                            name="newlatterCheck"
                            {...input}
                          />
                          <label> Subscribe to newsletter?</label>
                        </div>
                      )}
                    </Field>
                  </div>
                  <Field name="photo" validate={requiredpicture}>
                    {({ input, meta }) => (
                      <div>
                        <DropzoneUpload input={input} />
                        <ErrorMessage meta={meta} />
                      </div>
                    )}
                  </Field>
                  <button
                    type="submit"
                    className="Form-submit"
                    style={{ marginLeft: "35%" }}
                  >
                    Sign up
                  </button>
                  <div style={{ textAlign: "center" }}>
                    Already have an account?
                  </div>
                  <Link to="/Login">
                    <button
                      className="Form-submit"
                      style={{ marginLeft: "35%" }}
                    >
                      Login
                    </button>
                  </Link>
                </div>
              </form>
            )}
          </Form>
        </div>
      </div>
    );
  }
}

export default Register;
