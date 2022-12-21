import React from 'react';
import {View, FlatList} from 'react-native';
import FlatListMenuItem from '../components/FlatListMenuItem';
import Header from '../components/Header';
import ItemSeparator from '../components/ItemSaparator';
import menuItems from '../data/menuItems';
import styles from '../theme/appTheme';

const HomeScreen = (): JSX.Element => {
    return (
        <View style={{flex: 1, ...styles.globalMargin}}>
            <FlatList
                data={menuItems}
                renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={item => item.name}
                ListHeaderComponent={<Header text="Opciones de Menú" />}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
    );
};

export default HomeScreen;
