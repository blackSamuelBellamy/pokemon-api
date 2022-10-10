import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../hooks/DataContext'
import '../css/navbar.css'

const Navbar = () => {

    const { theme } = useContext(DataContext)
    const changing = ({ isActive }) => isActive && 'active'

    return (
        <>
            {(theme ||
                window.location.href.includes('Home') ||
                window.location.href.includes('Pokemones') ||
                window.location.href.includes('contacto') ||
                window.location.href.includes('stories'))
                &&
                <nav className='mainNavBar'>
                    <ul>
                        <NavLink to='/Home' className={changing}>Home</NavLink>
                        <NavLink to='/Pokemones' className={changing}>Pokemones</NavLink>
                        <NavLink to='/Stories' className={changing}>Stories</NavLink>
                        <NavLink to='/contacto' className={changing}>Contacto</NavLink>
                    </ul>
                </nav>
            }
        </>
    )
}

export default Navbar