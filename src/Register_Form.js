import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import DropzoneUpload from './Dropzone';
import './Form.css'
import $ from 'jquery'


const showResults = (values) => {
    alert(JSON.stringify(values, undefined, 2))
}

const required = value => (value ? undefined : 'Required')

class Register extends Component {

    state = {
        files: [],
    };

    onDrop = (file, callback) => {
        this.setState({
            onChange: file.map(file => Object.assign(file, { preview: URL.createObjectURL(file) }))
        });
        callback(file)
    }

    checkPasswordMatch = () => {
        let password = $('#password').val();
        let confirmPassword = $('#confirmpassword').val();
        console.log("password===" + password, "confirmpassword===" + confirmPassword)
        if (password != confirmPassword) {
            $("#divCheckPasswordMatch").html("Passwords do not match");
        }
    }


    render() {

        return (
            <div className="Form-box">
                <Form onSubmit={showResults} >
                    {({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>

                            <div className="Form-headfont">Sign up</div>
                            <div className="Form-box2">
                                <Field name="displayName" validate={required}>{({ input, meta }) => (
                                    <div>
                                        <label style={{ textAlign: "left" }}>Display Name</label>
                                        <input type="text" {...input} className="Form-input" placeholder="First Name"
                                            required pattern="[A-Za-z0-9]{4,20}" title="A-Z , a-z , 0-9 , between 4-20 character" />
                                    </div>
                                )}
                                </Field>

                                <Field name="Email" validate={required}>{({ input }) => (
                                    <div>
                                        <label>Email</label>
                                        <input type="email" {...input} className="Form-input" placeholder="example@gmail.com" />
                                    </div>
                                )}
                                </Field>

                                <Field name="password" validate={required} >{({ input }) => (
                                    <div>
                                        <label>Passsword</label>
                                        <input type="password" {...input} className="Form-input" placeholder="Password"
                                            required pattern="[A-Za-z0-9]{4,20}" title="A-Z , a-z , 0-9 , between 4-20 character"
                                            id="password" />
                                    </div>
                                )}
                                </Field>

                                <Field name="ConfirmPassword" validate={required} >{({ input }) => (
                                    <div>
                                        <label>Confirm Passsword</label>
                                        <input type="password" {...input} className="Form-input" placeholder="Comfirm Password"
                                            required id="confirmpassword" onInput={this.checkPasswordMatch} />
                                    </div>
                                )}
                                </Field>
                                <div>
                                    <Field name="newslatter">{({ input }) => (
                                        <div>
                                            <label>Newslatter</label>
                                            <input type="checkbox" {...input} />
                                        </div>
                                    )}
                                    </Field>
                                </div>
                                <Field name="photo" validate={required}>{({ input, meta }) => (
                                    <div>
                                        <DropzoneUpload input={input} />
                                        {meta.error && meta.touched && <p>Required</p>}
                                    </div>
                                )}
                                </Field>
                                <button type="submit" className="Form-submit" style={{ marginLeft: "35%" }} >Sign up</button>
                            </div>
                        </form>
                    )}
                </Form>
            </div>
        )
    }
}

export default Register;