/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Button, Modal, Text} from 'react-native';
import Header from '../components/Header';
import styles from '../theme/appTheme';

const ModalScreen = (): JSX.Element => {
    const [isVisible, setVisible] = useState(false);

    return (
        <View style={styles.globalMargin}>
            <Header text="Modals" />
            <Button title="Abrir modal" onPress={() => setVisible(true)} />

            <Modal animationType="fade" visible={isVisible} transparent={true}>
                <View
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    {isVisible && (
                        <View
                            style={{
                                backgroundColor: 'white',
                                width: 200,
                                height: 200,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 5,
                            }}>
                            <Text
                                style={{
                                    marginVertical: 10,
                                    fontSize: 30,
                                    fontWeight: 'bold',
                                    color: 'black',
                                }}>
                                Modal Title
                            </Text>
                            <Text style={{marginVertical: 20}}>
                                Cuerpo del modal
                            </Text>
                            <Button
                                title="cerrar"
                                onPress={() => setVisible(false)}
                            />
                        </View>
                    )}
                </View>
            </Modal>
        </View>
    );
};

export default ModalScreen;
