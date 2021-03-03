import axios from 'axios'
import Cookie from 'js-cookie'
import Auth from './auth'

// Change this if the server running somewhere else
export const server = 'http://localhost:5000'

export const isValidEmail = (email) => {
    return /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email)
}

export const isValidPassword = (password) => {
    // Minimum 8 characters, at least one upper case letter,
    // one lower case letter and one number
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(password)
}

export const fetchUser = async () => {
    const id = await Cookie.get('scraper')
    const user = await axios.post(`${server}/user/`,
        {
            id
        },
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    return user.data.user

}

export const authenticate = (res) => {
    if(res.data.success) {
        const {id} = res.data.user

        Cookie.set('scraper', id, { expires: 7 });
        Auth.login(() => window.location.assign('/'))

    } else {
        console.log(res.data.message)
    }
}

export const isValidURL = (url) => {
    return   /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/.test(url)
}
