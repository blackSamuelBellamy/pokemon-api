import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../hooks/DataContext'
import '../css/notFound.css'

const NotFound = () => {

    const { setError } = useContext(DataContext)
    return (   
    
         <div className='error'>
            <button onClick={() => setError(false)}>
                <Link to='/'>Go back Home</Link></button>
        </div>
    )
} 

export default NotFound