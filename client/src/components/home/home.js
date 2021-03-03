import { useState, useEffect } from 'react'
import Searchbar from './searchbar/searchbar'
import Results from './results/results'
import axios from 'axios'
import {server, isValidURL} from '../../utils/helper'

const Home = () => {

    const [url, setUrl] = useState(null)
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {

    }, [])

    const onInputChange = (e) => {
        setUrl(e.target.value)
        setError('')
    }

    const onSubmit = () => {
        setLoader(true)
        setData([])

        if(!isValidURL(url)) {
            setLoader(false)
            setError('Please provider a valid URL')
        } else {
            axios.post(`${server}/data`, {
                    url
                },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                if (res.data.success) {
                    setData(res.data.data)
                    setLoader(false)
                    setError('')
                }

            }).catch(err => {
                setLoader(false)
                setError('Page not found')
            })
        }
    }

    return(
        <div className="home__container">
            <h4>Place a site URL below to fetch word occurrences</h4>
            <Searchbar onInputChange={onInputChange} onSubmit={onSubmit} />
            {(error.length > 0) ? <div className="home__error">{error}</div> : null}
            <Results data={data} loader={loader}/>
        </div>
    )
}

export default Home
