import React, { useState, createContext } from 'react'


export const MainContext = createContext()

export default function MainContextProvider({ children }) {

    const [global, setGlobal] = useState({
        showMenu: false,
        showCityDetail: false,
    })

    const toggleMenu = () => {
        setGlobal({
            ...global,
            showMenu: !global.showMenu
        })
    }

    const toggleCityDetail = () => {
        setGlobal({
            ...global,
            showCityDetail: !global.showCityDetail
        })
    }

    const contextValue = {
        global,
        toggleMenu,
        toggleCityDetail
    }

    console.log(global);

    return (
        <MainContext.Provider value={contextValue}>
            {children}
        </MainContext.Provider>
    )
}
