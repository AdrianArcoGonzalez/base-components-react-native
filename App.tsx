import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import {DarkTheme, Theme} from '@react-navigation/native';
import {ThemeProvider} from './src/context/ThemeContext';

const customTheme: Theme = {
    dark: true,
    colors: {...DarkTheme.colors, background: 'black'},
};

const App = () => {
    return (
        <ThemeProvider>
            {/* theme={customTheme}*/}
            <Navigation />
        </ThemeProvider>
    );
};

export default App;
