//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
class FooterBin extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerkeyboard}>
                    <View style={styles.containerNumbers}>
                        <TouchableOpacity style={styles.touchableNumber} onPress={() => this.props.cambiarBinario(0)}>
                            <Text style={styles.textCharacter}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableNumber} onPress={() => this.props.cambiarBinario(1)}>
                            <Text style={styles.textCharacter}>1</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.enter}>
                        <TouchableOpacity style={styles.touchableEnter} onPress={() => this.props.borrarBin()}>
                            <Text style={styles.textCharacter}>x</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.touchableEnter} onPress={() => this.props.limpiar()}>
                            <Text style={styles.textCharacter}>Limpiar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 2,
    },
    containerkeyboard: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#7799FB',
    },
    containerNumbers: {
        flex: 7,
        flexDirection: 'row',
    },
    enter: {
        flex: 3,
    },
    touchableNumber: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#517CF7',
    },
    touchableEnter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4976F7',
    },
    textCharacter: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

//make this component available to the app
export default FooterBin;
