//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
class FooterDec extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerkeyboard}>
                    <View style={styles.containerNumbers}>
                        <View style={styles.numbers}>
                            <TouchableOpacity style={styles.touchableNumber} onPress={() => this.props.cambiarDecimal(9)}>
                                <Text style={styles.textCharacter}>9</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchableNumber} onPress={() => this.props.cambiarDecimal(8)}>
                                <Text style={styles.textCharacter}>8</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchableNumber} onPress={() => this.props.cambiarDecimal(7)}>
                                <Text style={styles.textCharacter}>7</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.touchableNumber} onPress={() => this.props.cambiarDecimal(6)}>
                                <Text style={styles.textCharacter}>6</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchableNumber} onPress={() => this.props.cambiarDecimal(5)}>
                                <Text style={styles.textCharacter}>5</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.numbers}>
                            <TouchableOpacity style={styles.touchableNumber} onPress={() => this.props.cambiarDecimal(4)}>
                                <Text style={styles.textCharacter}>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchableNumber} onPress={() => this.props.cambiarDecimal(3)}>
                                <Text style={styles.textCharacter}>3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchableNumber} onPress={() => this.props.cambiarDecimal(2)}>
                                <Text style={styles.textCharacter}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchableNumber} onPress={() => this.props.cambiarDecimal(1)}>
                                <Text style={styles.textCharacter}>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchableNumber} onPress={() => this.props.cambiarDecimal(0)}>
                                <Text style={styles.textCharacter}>0</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.enter}>
                        <TouchableOpacity style={styles.touchableEnter} onPress={() => this.props.borrar()}>
                            <Text style={styles.textCharacter}>x</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableEnter} onPress={() => this.props.limpiar()} >
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
        flex: 8,
        flexDirection: 'column',
    },
    enter: {
        flex: 2,
    },
    numbers: {
        flex: 1,
        flexDirection: 'row',
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
export default FooterDec;
