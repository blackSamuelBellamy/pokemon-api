import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import MusicAnimation from './MusicAnimation'
import { useContext } from 'react'
import { DataContext } from '../hooks/DataContext'
import '../css/planilla.css'
import NotFound from './NotFound'

const Planilla = () => {
    const { error } = useContext(DataContext)
    return (
        <div className='planilla'>
            {error && <NotFound />}
            <Navbar />
            <MusicAnimation />
            <Outlet />
        </div>
    )
}

export default Planilla
