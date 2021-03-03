import Cookies from 'js-cookie'

class Auth  {
    constructor() {
        if (Cookies.get('scraper')) {
            this.auth = true
            return
        }
        this.auth = false
    }

    login(cb) {
        this.auth = true
        cb()
    }

    logout(cb) {
        Cookies.remove('scraper')
        this.auth = false
        cb()
    }

    isAuthenticated() {
        return this.auth
    }
}

export default new Auth()
