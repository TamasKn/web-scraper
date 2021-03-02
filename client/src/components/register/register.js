import { useState, useEffect } from 'react'
import InputField from '../inputfield/inputfield'
import { isValidEmail, isValidPassword } from '../../utils/helper'
import axios from 'axios'

const Register = () => {

    const [field, setField] = useState({
        firstname: null,
        lastname: null,
        email: null,
        password: null,
        conf_password: null
    })
    const [errors, setErrors] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        conf_password: ''
    })

    useEffect(() => {

    }, [field])

    const onInputChange = e => {
        e.preventDefault()
        const { name, value } = e.target

        switch (name) {
            case 'firstname':
                setField({...field, firstname: value})
                setErrors({ ...errors, firstname: (value.length < 1 || field.firstname === null) ? "First name is mandatory" : "" })
                break;
            case 'lastname':
                setField({...field, lastname: value})
                setErrors({ ...errors, lastname: (value.length < 1 || field.lastname === null) ? "Last name is mandatory" : "" })
                break;
            case 'email':
                setField({...field, email: value})
                setErrors({ ...errors, email: (isValidEmail(value)) ? "" : "Email is not valid" })
                break;
            case 'password':
                setField({...field, password: value})
                setErrors({ ...errors, password: (!isValidPassword(value)) ? "Password is weak" : "" })
                break;
            case 'conf_password':
                setField({...field, conf_password: value })
                setErrors({ ...errors, conf_password: (field.password === value && (value.length >= 8) ) ? "" : "Passwords are not matching" })
                break;
            default:
                break;
        }
    }

    const onSubmit = () => {
        // Check validations
        axios.post('http://localhost:5000/user/register',
            {
                firstname: field.firstname,
                lastname: field.lastname,
                email: field.email,
                password: field.password,
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(res => {
            console.log(res)
        })
    }

    return(
        <div className="form__container">
            <section>
                <InputField
                    name={'firstname'}
                    type={'text'}
                    label={'First name'}
                    onChange={onInputChange}
                />
                <div className="form__error-msg">{errors.firstname}</div>
                <InputField
                    name={'lastname'}
                    type={'text'}
                    label={'Last name'}
                    onChange={onInputChange}
                />
                <div className="form__error-msg">{errors.lastname}</div>
                <InputField
                    name={'email'}
                    type={'email'}
                    label={'E-mail'}
                    onChange={onInputChange}
                />
                <div className="form__error-msg">{errors.email}</div>
                <InputField
                    name={'password'}
                    type={'password'}
                    label={'Password'}
                    info={'Minimum 8 characters, at least 1 upper case and a number'}
                    onChange={onInputChange}
                />
                <div className="form__error-msg">{errors.password}</div>
                <InputField
                    name={'conf_password'}
                    type={'password'}
                    label={'Confirm password'}
                    onChange={onInputChange}
                />
                <div className="form__error-msg">{errors.conf_password}</div>

                <div className="form__btn-wrapper">
                    <div className="button-cta" onClick={onSubmit}>Register</div>
                </div>
            </section>
        </div>
    )
}

export default Register
