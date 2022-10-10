import { useState, createContext } from 'react'

export const DataContext = createContext()

export const States = ( { children } ) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [secondURL, setSecondURL] = useState('')
    const [theme, setTheme] = useState(false)
    const allDatas = {data, setData, error, setError, secondURL, setSecondURL,
    theme, setTheme}

    return(
        <DataContext.Provider value={allDatas}>
            { children }
        </DataContext.Provider>
    )
} 