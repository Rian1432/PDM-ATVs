import { View, Alert, StatusBar } from 'react-native'
import { Stack, router } from 'expo-router';
import React from 'react'

import GameForm from '@/components/games/GameForm';
import useCollection from '@/firebase/hooks/useCollection';
import globalStyles, { THEME_COLORS } from '@/constants/GlobalStyles';
import Game from '@/types/Game';

export default function create() {
    const { create, refreshData, loading } = useCollection<Game>("game-list");

    const handleCreate = async (form: Game) => {
        try {
            await create(form)
            router.replace('/home')
            Alert.alert("Sucesso", "Jogo criado com sucesso!")
            
            refreshData()
        } catch (error:any) {
            Alert.alert("Error", error.toString())
        }
    }

    return (
        <View style={globalStyles.pageContainer}>
            <Stack.Screen options={{ title: "Adicionar" }}/>
            <StatusBar
                backgroundColor={THEME_COLORS.DARK_GRAY_COLOR}
                translucent={true}
                hidden={false}
            />

            <GameForm onSubmit={handleCreate} isLoading={loading} />
        </View>
    )
}