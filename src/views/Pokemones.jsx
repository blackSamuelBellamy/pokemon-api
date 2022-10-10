import { useParams } from 'react-router-dom'
import { useContext, useState } from 'react'
import { DataContext } from '../hooks/DataContext'
import UseFetch from '../hooks/UseFetch'
import '../css/pokemones.css'

const Pokemones = () => {
    const { pokemon } = useParams()
    const { secondURL } = useContext(DataContext)
    const [secondData, setSecondData] = useState([])
  
    secondURL && UseFetch(secondURL, setSecondData)
    secondURL && console.log(secondData)

    return (
        <div className='pokemones'>
            {
              pokemon ? <h2>El pokemon es: {pokemon} </h2>:
              <h2>Escoge un pokemon</h2>          
            }

        </div>
    )
}

export default Pokemones
