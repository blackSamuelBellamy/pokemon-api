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
                window.location.href.toLowerCase().includes('home') ||
                window.location.href.toLowerCase().includes('pokemones'))
                &&
                <nav className='mainNavBar'>
                    <ul>
                        <NavLink to='/home' className={changing}>Home</NavLink>
                        <NavLink to='/pokemones' className={changing}>Pokemones</NavLink>

                    </ul>
                </nav>
            }
        </>
    )
}

export default Navbar