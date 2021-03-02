import { useState, useEffect } from 'react'
import Searchbar from './searchbar/searchbar'

const Home = () => {

    const [url, setUrl] = useState(null)

    useEffect(() => {

    }, [])

    const onInputChange = (e) => {
        setUrl(e.target.value)
    }

    const onSubmit = () => {
        console.log('Clicked')
    }

    return(
        <div className="home__container">
            <h4>Place a site URL below</h4>
            <Searchbar onInputChange={onInputChange} onSubmit={onSubmit} />
        </div>
    )
}

export default Home