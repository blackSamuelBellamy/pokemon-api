import { useState, createContext } from 'react'

export const DataContext = createContext()

export const States = ( { children } ) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [secondData, setSecondData] = useState([])
    const [theme, setTheme] = useState(false)
    const [secondURL, setSecondURL] = useState('')
    const [newFetch, setNewFetch] = useState(false)
    const allDatas = {data, setData, error, setError, secondData, setSecondData,
    theme, setTheme, secondURL, setSecondURL, loading, setLoading, newFetch,
    setNewFetch}

    return(
        <DataContext.Provider value={allDatas}>
            { children }
        </DataContext.Provider>
    )
} 