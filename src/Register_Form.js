import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import Dropzone from 'react-dropzone';
import './Form.css'
import Styles from './Styles';
import classNames from 'classnames'
import Basic from './App';

const showResults = (values) => {
    window.alert(JSON.stringify(values, undefined, 2))
}

const onDrop = (file) => {
    this.prop.input.onChange(file)
}

const required = value => (value ? undefined : 'Required')

class Register extends Component {
    render() {
        return (
            <Styles>
                <div style={{ marginTop: 50 }}> Register Form
                    <Form onSubmit={showResults}>
                        {({ handleSubmit, values }) => (
                            <form onSubmit={handleSubmit} >

                                <Field name="displaytName" validate={required}>{({ input, meta }) => (
                                    <div>
                                        <label>Display Name</label>
                                        <input type="text" {...input} placeholder="First Name"></input>
                                        {meta.error && meta.touched && <span>Required</span>}
                                    </div>
                                )}
                                </Field>

                                <Field name="Email" validate={required}>{({ input, meta }) => (
                                    <div>
                                        <label>Email</label>
                                        <input type="email" {...input} placeholder="example@gmail.com" />
                                        {meta.error && meta.touched && <span>Required</span>}
                                    </div>
                                )}
                                </Field>

                                <Field name="password" validate={required} >{({ input, meta }) => (
                                    <div>
                                        <label>Passsword</label>
                                        <input type="password" {...input} placeholder="Comfirm Password" />
                                        {meta.error && meta.touched && <span>Required</span>}
                                    </div>
                                )}
                                </Field>

                                <Field name="ConfirmPassword" validate={required} >{({ input, meta }) => (
                                    <div>
                                        <label>Confirm Passsword</label>
                                        <input type="password" {...input} placeholder="Comfirm Password" />
                                        {meta.error && meta.touched && <span>Required</span>}
                                    </div>
                                )}
                                </Field>

                                <Field name="newslatter" validate={required} >{({ input, meta }) => (
                                    <div>
                                        <label>Newslatter</label>
                                        <input type="checkbox" {...input} />
                                        {meta.error && meta.touched && <span>Required</span>}
                                    </div>
                                )}
                                </Field>


                                <Field name="ProfilePicture" validate={required} >{({ input, meta }) => (
                                    <div>
                                        <label>Picture</label>
                                        <input type="file" {...input}></input>
                                        {meta.error && meta.touched && <span>Required</span>}
                                    </div>
                                )}
                                </Field>
                               


                               <Field name="upload"> {({input}) => (
                                   <div>
                                       <input type="file" {...input}/>
                                   </div>
                               )}
                               </Field>


                                <button type="submit" >Submit</button>
                                <pre>{JSON.stringify(values, undefined, 2)}</pre>

                            </form>
                        )}
                    </Form>

                </div>
            </Styles>

        )
    }
}

export default Register;