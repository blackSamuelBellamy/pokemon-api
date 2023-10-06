import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { DataContext } from '../hooks/DataContext'
import Video from '../components/Video'
import '../css/pokemones.css'
import UseFetch from '../hooks/UseFetch'

const Pokemones = () => {

    const { pokemon } = useParams()
    const { secondData, setSecondData, newFetch, secondURL, loading }
        = useContext(DataContext)
    newFetch && UseFetch(secondURL, setSecondData)

    useEffect(() => {
        if(Object.entries(secondData).length > 0) {
            const capitaliza = secondData.name.charAt(0).toLocaleUpperCase() + secondData.name.slice(1)
            document.title = `Pokemon | ${capitaliza}`   
            console.log(secondData.name)
        }
        else document.title = 'Pokemon | Api'
        // eslint-disable-next-line
    }, [secondData]) 

    return (

        <div className='pokemones'>
            {
                loading &&
                <div className='loading'></div>
            }

            {
               (!loading && Object.entries(secondData).length > 0) &&

                <div className='card'>
                    <h3 lang='en' translate='no'>{secondData.name}</h3>
                    <span className='effects'></span>
                    <div className='imageContainer'>
                        <img src={secondData.sprites.other.home.front_default} alt=
                            {pokemon} />
                    </div>
                    <p>{secondData.weight} Libras </p>
                    <p className='height'>{secondData.height * 10}&nbsp;cms</p>
                </div>

            }

            {
                (!loading && !secondURL) &&
                <div className='default'>
                    <h2 className='title'>
                        Escoge un pokemon en Home
                    </h2>
                    <span className='blastoise'></span>
                </div>
            }

            <Video />

        </div>

    )
}

export default Pokemones
