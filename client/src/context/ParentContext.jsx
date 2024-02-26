import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const ParentContext = ({ children }) => {
    const [movieList, setMovieList] = useState([])
    const [language, setLanguage] = useState("All")
    const [MListRender, setMListRender] = useState(0)
    const [signedIn, setSignedIn] = useState(false)

    return <AppContext.Provider value={{ movieList,setMovieList,language, setLanguage, MListRender, setMListRender, signedIn, setSignedIn }}>
        {children}
    </AppContext.Provider>
}

export default ParentContext