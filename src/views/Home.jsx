import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../hooks/DataContext'
import UseFetch from '../hooks/UseFetch'
import swal from 'sweetalert'
import '../css/home.css'
import Video from '../components/Video'
import Pikachu from '../sources/pikachu.png'


const Home = () => {

    const mainURL = 'https://pokeapi.co/api/v2/pokemon/'
    const { data, setData, theme, setTheme, setSecondURL, setNewFetch,
        setSecondData } = useContext(DataContext)
    UseFetch(mainURL, setData)

    let inicio = 'mainHome'

    const initial = () => {
        setTheme(true)
    }

    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState('')
    const [list, setList] = useState([])
    const [despliegue, setDespliegue] = useState(true)

    const searchingPokemon = e => {

        const patter = new RegExp('^[A-Z]+$', 'i')
        setDespliegue(true)
        if (patter.test(e.target.value || pokemon === '')) {

            setPokemon(e.target.value)
            const pokeArray = data.results.filter(poke =>
                poke.name.includes(pokemon.toLowerCase()))
            setList(pokeArray)
            setNewFetch(false)
            setSecondData([])


        } else {
            swal({
                title: 'Error',
                text: 'Solo debes ingresar letras sin espacios ni carácteres especiales',
                icon: 'warning',
                button: 'Entendido',
                timer: '7000'
            })
        }


    }

    const inputPokemon = e => {
        setPokemon(e.target.textContent)
        setDespliegue(false)
    }

    const buscar = () => {

        setNewFetch(true)
        const choosenPokemon = (data.results.filter(pok => pok.name === pokemon))
        setSecondURL(choosenPokemon[0].url)
        navigate(`/Pokemones/${pokemon}`)
    }


    const noIntro = () => {
        if (
            window.location.href.includes('home') ||
            window.location.href.includes('pokemones')) {
            return false
        } else {
            return true
        }

    }

    if (window.location.href.includes('home') && theme) {
        inicio = 'mainHome'

    } else if (theme) {
        inicio = 'inicioCanvas'
    }

    const queryButton = () => {
        if ((!pokemon || list.length === 0) ||
            (list.length > 0 && pokemon !== list[0].name && despliegue)) {
            return true

        } else {
            return false
        }
    }



    return (
        <>
            {noIntro() &&

                <div className={theme ? 'inicio rolling' : 'inicio'}>
                    <button className="comenzar" onClick={initial}
                        style={{ zIndex: '10' }}>Comenzar</button>
                </div>
            }

            {(theme || window.location.href.includes('home')) &&

                <div className={inicio}>
                    <div className='homeBackground'>
                        <Video />
                        <img src={Pikachu} alt="pikachu" className={
                            window.location.href.includes('home') ? 'noAnimation' :
                                'pikachu'
                        } />
                        <div className='form'>

                            <input type="text"
                                onChange={searchingPokemon}
                                value={pokemon}
                                autoFocus
                                placeholder='BUSCA TU POKEMON...'
                            />

                            <button onClick={buscar} className={queryButton() ? 'queryDisabled' : 'query'}
                                disabled={queryButton() ? true : false}>
                                Buscar
                            </button>

                            {(pokemon && list.length > 0 && pokemon !== list[0].name) &&
                                <div className='pokemonList'>
                                    {list.map((poke, index) => (

                                        despliegue &&
                                        <div key={index + poke.name}
                                            className='name'
                                            onClick={inputPokemon}>
                                            <p className='pokeName'>{poke.name}</p>
                                        </div>
                                    ))}
                                </div>}
                            {(pokemon !== '' && list.length === 0) &&
                                <p className='sinResultados'>Sin resultados</p>}
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default Home


