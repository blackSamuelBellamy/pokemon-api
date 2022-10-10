import { useEffect, useContext } from 'react'
import { DataContext } from './DataContext'


const UseFetch = (url, seTTing) => {

    const { setError } = useContext(DataContext)

    const fetching = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => seTTing(data))
            .catch(() => setError(true))
    }

    useEffect(() => {
        fetching()
        // eslint-disable-next-line
    }, [url])
}

export default UseFetch