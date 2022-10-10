import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import MusicAnimation from './MusicAnimation'
import '../css/planilla.css'

const Planilla = () => {
    return (
        <div className='planilla'>
           <Navbar /> 
           <MusicAnimation />
           <Outlet />
        </div>
    )
}

export default Planilla
