import React, {createContext, useEffect, useReducer} from 'react';
import {Appearance, AppState} from 'react-native';
import {lightTheme, themeReducer, ThemeState, darkTheme} from './themeReducer';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

interface ThemeProviderProps {
    children: JSX.Element | JSX.Element[];
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, dispatch] = useReducer(
        themeReducer,
        Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme,
    );

    useEffect(() => {
        AppState.addEventListener('change', status => {
            if (status === 'active') {
                Appearance.getColorScheme() === 'light'
                    ? setLightTheme()
                    : setDarkTheme();
            }
        });
    });

    const setDarkTheme = () => {
        dispatch({type: 'setDarkTheme'});
    };
    const setLightTheme = () => {
        dispatch({type: 'setLightTheme'});
    };

    return (
        <ThemeContext.Provider value={{setDarkTheme, setLightTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    );
};
