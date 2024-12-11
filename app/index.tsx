import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
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
        setError(error)
      }
    }

    if (loading) return <Loading />;

    return (
        <FullScreen center>
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
                    handlePress={handleSubmit} 
                />
            </View>
        </FullScreen>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'column',
        gap: 15,
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
        marginTop: 30,
    },
    helpText: {
        color: THEME_COLORS.GRAY_COLOR,
    }
});
