import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import InputField from '../inputfield/inputfield'
import {isValidEmail} from '../../utils/helper'

const Login = () => {

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
                    <div className="button-cta">Login</div>
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
