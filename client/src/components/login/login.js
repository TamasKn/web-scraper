import {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import InputField from '../inputfield/inputfield'
import {isValidEmail, authenticate} from '../../utils/helper'
import axios from 'axios'
import UserContext from '../../context/usercontext'

const Login = () => {

    const User = useContext(UserContext)

    const [field, setField] = useState({
        email: null,
        password: null
    })
    const [errors, setErrors] = useState({
        email: ''
    })

    useEffect(() => {

    }, [field])

    const onInputChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target

        switch (name) {
            case 'email':
                setField({...field, email: value})
                setErrors({ ...errors, email: (isValidEmail(value)) ? "" : "Email is not valid" })
                break;
            case 'password':
                setField({...field, password: value})
                break;
            default:
                break;
        }
    }

    const onSubmit = () => {
        // Check validations

        axios.post('http://localhost:5000/user/login',
            {
                email: field.email,
                password: field.password,
            },
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => {
            authenticate(res)
        })
    }

    return(
        <div className="form__container">
            <section>
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
                    onChange={onInputChange}
                />

                <div className="form__btn-wrapper">
                    <div className="button-cta" onClick={onSubmit}>Login</div>
                </div>

                <aside>
                    Don't have an account?&nbsp;
                    <Link to="/register">
                        <span>Register</span>
                    </Link>
                </aside>
            </section>
        </div>
    )
}

export default Login
