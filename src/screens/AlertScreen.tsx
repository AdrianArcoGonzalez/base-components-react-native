import React from 'react';
import {View, Button, Alert, Text} from 'react-native';
import prompt from 'react-native-prompt-android';
import Header from '../components/Header';
import styles from '../theme/appTheme';

export const AlertScreen = (): JSX.Element => {
    const showAlert = () => {
        Alert.alert(
            'Título',
            'Este es el mensaje',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel pressed'),
                    style: 'destructive',
                },
                {
                    text: 'Ok',
                    onPress: () => console.log('Ok pressed'),
                },
            ],
            {cancelable: true, onDismiss: () => console.log('Dismissed')},
        );
    };
    //Solo Funciona enIOS
    const showPropmt = () => {
        // Alert.prompt(
        //     'Está seguro?',
        //     'Esta opción no se puede revertir',
        //     (value: string) => console.log('info :', value),
        //     'plain-text',
        //     'Hola Mundo',
        //     'email-adress',
        // );

        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: password =>
                        console.log('OK Pressed, password: ' + password),
                },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder',
            },
        );
    };

    return (
        <>
            <Header text="Alerts" />
            <View style={{...styles.globalMargin, marginVertical: 20}}>
                <Button title="Show Alert" onPress={showAlert} />
            </View>
            <View style={{...styles.globalMargin, marginVertical: 20}}>
                <Text> Solo funciona en IOS</Text>
                <Button title="Show Prompt" onPress={showPropmt} />
            </View>
        </>
    );
};

export default AlertScreen;
