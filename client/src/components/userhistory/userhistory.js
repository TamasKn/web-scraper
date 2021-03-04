import {useEffect, useContext, useState} from 'react'
import UserContext from '../../context/usercontext'
import {fetchUser} from '../../utils/helper'
import Spinner from '../spinner/spinner'

const UserHistory = () => {

    const user = useContext(UserContext)

    const [loader, setLoader] = useState(true)

    useEffect(() => {

        fetchUser().then(() => setLoader(false))

    }, [])


    return(
        <div className="history__container">
            <h1>Your scraping history</h1>
            <section>
                {
                    (loader)
                        ? <Spinner />
                        : (user && user.history.length > 0)
                            ?
                            user.history.slice(0).reverse().map((el, idx) => (
                                <div key={idx} className="history__list-item">
                                    <p>
                                        <span>URL: </span>
                                        {el.url}
                                    </p>
                                    <p>
                                        <span>Words: </span>
                                        {el.words}
                                    </p>
                                </div>
                            ))
                            : <p>You have not scraped any site yet</p>
                }
            </section>

        </div>
    )
}

export default UserHistory
