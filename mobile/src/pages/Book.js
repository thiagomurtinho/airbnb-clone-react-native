import React, { useState } from 'react'
import { Platform, SafeAreaView, StyleSheet, AsyncStorage, TouchableOpacity, TextInput, Text, Alert } from 'react-native'

import api from '../services/api'


export default function Book({ navigation }) {
    const [date, setDate] = useState('')
    const id = navigation.getParam('id')

    async function handleSubmit() {
        const user_id = await AsyncStorage.getItem('user')

        await api.post(`/spots/${id}/bookings`, {
            date
        }, {
            headers: { user_id },
        })

        Alert.alert('Solicitação de reserva enviada')

        navigation.navigate('List')
    }

    function handleCancel() {
        navigation.navigate('List')
    }

    return (
        <SafeAreaView style={[styles.container, styles.droidSafeArea]}>
            <Text style={styles.label}>DATA DE INTERESSE</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Qual a data você quer reservar?"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={date}
                    onChangeText={setDate}
                />
                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Solicitar reserva</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.cancelButton]}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    droidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },

    container: {
        margin: 30,
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
        marginTop: 30,
    },

    input: {
        borderWidth: 1,
        borderColor: '#DDD',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius:2,
    },

    button: {
        height: 42,
        backgroundColor: '#F05A5B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginBottom: 10,
    },

    cancelButton: {
        backgroundColor: '#CCC',
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
})