import '../css/musicAnimation.css'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../hooks/DataContext'
import Cancion from '../sources/song.mp3'

const MusicAnimation = () => {

    const { theme } = useContext(DataContext)
    const [pausa, setPausa] = useState(false)
    const [playing, setPlaying] = useState(false)
    const song = new Audio(Cancion)
    
    const paused = () => {
        song.pause()
        
    }

    useEffect(() => {
        if (theme) {
            song.play()
            setPlaying(true)
        }
    
    },[theme])

    

    return (

        <>
            <div className={theme ? "musicAnimation visible" : "musicAnimation"}>
                <span style={{ '--i': 0 }}></span>
                <span style={{ '--i': .3 }}></span>
                <span style={{ '--i': .6 }}></span>
                <span style={{ '--i': .9 }}></span>
                <span style={{ '--i': .6 }}></span>
                <span style={{ '--i': .3 }}></span>
                <span style={{ '--i': 0 }}></span>
            </div>
        
        </>

    )
}

export default MusicAnimation
