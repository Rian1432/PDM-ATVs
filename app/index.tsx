import { Alert, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

import FullScreen from '../components/containers/FullScreen'
import CustomInput from '@/components/shared/CustomInput'
import ImageButton from '@/components/shared/ImageButton'
import Loading from '@/components/shared/Loading'
import useAuth from '@/firebase/hooks/useAuth'
import { THEME_COLORS } from '../constants/GlobalStyles'

export default function login() {
    const { user, login, loading } = useAuth();

    const [username, onChangeUserName] = useState('')
    const [password, onChangePassword] = useState('')
    const [errorMessage, setError] = useState('')

    useEffect(() => {
      if (user) {
        router.replace("/home");
      }
    }, [user]);

    useEffect(() => {
        setError('')
    }, [username])

    useEffect(() => {
        setError('')
    }, [password])

    const handleSubmit = async () => {
      try {
        await login(username, password)
        router.navigate('/home')
      } catch (error:any) {
        Alert.alert("Error", error.toString())
        setError('Usuário ou senha inválidos')
    }
}

    return (
        <FullScreen center>
            <StatusBar 
                backgroundColor={THEME_COLORS.BASE_COLOR}
                translucent={true}
                hidden={false}
            />

            <View style={styles.formContainer}>
                <Text style={styles.welcomeText}>Bem-vindo!</Text>
                <Text style={styles.title}>login</Text>

                <View style={styles.inputGroup}>
                    <CustomInput 
                        placeholder="Nome"
                        icon='person'
                        value={username} 
                        onChangeText={onChangeUserName}
                    />

                    <CustomInput 
                        placeholder="Senha"
                        icon='key'
                        value={password} 
                        onChangeText={onChangePassword}
                        secureTextEntry
                    />

                    <Text style={styles.errorMessage}>
                        { errorMessage }
                    </Text>
                </View>

                <ImageButton
                    title='Entrar'
                    customStyle={{backgroundColor: THEME_COLORS.PRIMARY_COLOR}} 
                    loading={loading}
                    handlePress={handleSubmit} 
                />
            </View>

            <View style={styles.helpContainer}>
                <Text style={styles.helpText}>Esqueceu a senha?</Text>
                <Text style={styles.helpText}>Dica:</Text>
                <Text style={styles.helpText}>email: example@email.com</Text>
                <Text style={styles.helpText}>Senha: 123456</Text>
            </View>

            <View style={{position: 'absolute', bottom: -130, right: -50, transform: [{rotate: '45deg'}], opacity: 0.3}}>
                <Ionicons name="game-controller" size={330} color={THEME_COLORS.DARK_GRAY_COLOR} />
            </View>

            <View style={{position: 'absolute', top: -120, left: -150, transform: [{rotate: '-45deg'}], opacity: 0.3}}>
                <Ionicons name="game-controller" size={330} color={THEME_COLORS.DARK_GRAY_COLOR} />
            </View>
        </FullScreen>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'column',
        gap: 15,
        position: 'relative',
        zIndex: 1,
    },
    welcomeText: {
        color: THEME_COLORS.GRAY_COLOR,
        fontSize: 20,
    },
    logo: {
        width: 150,
        height: 120,
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        textAlign: 'left',
        marginBottom: 20,
        color: THEME_COLORS.TEXT_COLOR,
    },
    inputGroup: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    errorMessage: {
        color: THEME_COLORS.ERROR_COLOR,
        fontWeight: '500',
    },
    helpContainer: {
        marginTop: 10,
        alignItems: 'center',
        opacity: 0.5,
    },
    helpText: {
        color: THEME_COLORS.GRAY_COLOR,
    }
});
