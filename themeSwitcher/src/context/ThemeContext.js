
import React from 'react'
import {useContext} from 'react'
export  const ThemeContext = React.createContext(
    {
      themeMode:"dark",
      lightMode:()=>{},
      darkMode:() => {}
    }
)


export const ThemeProvider = ThemeContext.Provider


export default function useTheme(){
    return useContext(ThemeContext)
}