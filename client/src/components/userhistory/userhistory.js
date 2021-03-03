import {useEffect, useContext} from 'react'
import UserContext from '../../context/usercontext'
import {fetchUser} from '../../utils/helper'

const UserHistory = () => {

    const user = useContext(UserContext)

    useEffect(() => {
        fetchUser()
    }, [])

    return(
        <div className="history__container">
            <h1>Your scraping history</h1>
            <section>
                {
                    (user)
                        ?
                            user.history.map((el, idx) => (
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
