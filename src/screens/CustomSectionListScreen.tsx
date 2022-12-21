import React, {useContext} from 'react';
import {View, Text, SectionList} from 'react-native';
import Header from '../components/Header';
import ItemSeparator from '../components/ItemSaparator';
import {ThemeContext} from '../context/ThemeContext';
import casas from '../data/casas';
import styles from '../theme/appTheme';

const CustomSectionListScreen = (): JSX.Element => {
    const {
        theme: {colors},
    } = useContext(ThemeContext);
    return (
        <View style={styles.globalMargin}>
            <SectionList
                keyExtractor={(item, index) => item + index}
                sections={casas}
                ListHeaderComponent={<Header text="Section List" />}
                ListFooterComponent={
                    <Header text={'Total de casas globales  ' + casas.length} />
                }
                renderItem={({item}) => (
                    <Text style={{fontSize: 20, color: colors.text}}>
                        {item}
                    </Text>
                )}
                renderSectionHeader={({section}) => (
                    <Header text={section.casa} />
                )}
                renderSectionFooter={({section}) => (
                    <Header text={'Total de casas ' + section.data.length} />
                )}
                ItemSeparatorComponent={ItemSeparator}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default CustomSectionListScreen;
