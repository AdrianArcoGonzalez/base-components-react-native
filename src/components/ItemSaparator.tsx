import React from 'react';
import {View} from 'react-native';
import {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const ItemSeparator = (): JSX.Element => {
    const {
        theme: {dividerColor},
    } = useContext(ThemeContext);

    return (
        <View
            style={{
                borderBottomWidth: 1,
                opacity: 0.4,
                marginVertical: 8,
                borderBottomColor: dividerColor,
            }}
        />
    );
};

export default ItemSeparator;
