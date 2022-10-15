import { useEffect, useContext } from 'react'
import { DataContext } from './DataContext'


const UseFetch = (url, seTTing) => {

    const { setError, setLoading } = useContext(DataContext)
    
    const fetching = () => {
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(data => seTTing(data))
            .catch(() => setError(true))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        fetching()
        // eslint-disable-next-line
    }, [url])
}

export default UseFetch