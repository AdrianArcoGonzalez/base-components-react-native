import React, {useContext} from 'react';
import {ScrollView, RefreshControl, View, Text} from 'react-native';
import Header from '../components/Header';
import {useState} from 'react';
import styles from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/ThemeContext';

const PullToRefreshScreen = (): JSX.Element => {
    const {
        theme: {colors, dark},
    } = useContext(ThemeContext);
    const {top} = useSafeAreaInsets();
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const [data, setData] = useState('');
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setData('Hola Mundo');
            setRefreshing(false);
        }, 1500);
    };

    return (
        <ScrollView
            style={{marginTop: refreshing ? top : 0}}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressBackgroundColor={colors.background}
                    colors={[colors.primary, 'red', 'orange']}
                    tintColor={dark ? 'white' : 'black'}
                    style={{backgroundColor: colors.background}}
                />
            }>
            <Header text="Pull To Refresh" />
            <View style={styles.globalMargin}>
                {data && (
                    <Text style={{fontSize: 20, flex: 1, color: colors.text}}>
                        {data}
                    </Text>
                )}
            </View>
        </ScrollView>
    );
};

export default PullToRefreshScreen;
