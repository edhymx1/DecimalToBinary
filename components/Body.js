//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// create a component
class Body extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity style={styles.textContainer} onPress={() => this.props.cambiarTeclado('decimal')}>
                        <Text style={styles.text}>Decimal</Text>
                        <Text style={styles.number}>{this.props.decimal}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.textContainer} onPress={() => this.props.cambiarTeclado('binario')}>
                        <Text style={styles.text}>Binario</Text>
                        <Text style={styles.number}>{this.props.binario}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F4F6FC',
        paddingHorizontal: 20,
    },
    textContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        borderColor: '#517CF7',
        borderWidth: 1,
    },
    text: {
        flex:2,
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '200',
        backgroundColor: '#517CF7',
        padding: 5,
    },
    number: {
        flex: 8,
        color: '#000000',
        fontSize: 16,
        fontWeight: '200',
        backgroundColor: '#F4F6FC',
        padding: 5,
    }
});

//make this component available to the app
export default Body;
