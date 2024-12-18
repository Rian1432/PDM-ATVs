import { View, Alert, StatusBar } from 'react-native'
import { Stack, router, useLocalSearchParams } from 'expo-router'
import React from 'react'

import GameForm from '@/components/games/GameForm'
import useCollection from '@/firebase/hooks/useCollection'
import Game from '@/types/Game'
import globalStyles, { THEME_COLORS } from '@/constants/GlobalStyles'
import useDocument from '@/firebase/hooks/useDocument'
import Loading from '@/components/shared/Loading'

export default function Edit() {
    const { id:userId } = useLocalSearchParams<{ id:string }>()
    const { data, loading:loadingData } = useDocument<Game>("game-list", userId)
    const { update, refreshData, loading } = useCollection<Game>("game-list");

    const handleEdit = async (form: Game) => {
        try {
            await update(userId, form)
            router.replace('/home')
            Alert.alert("Sucesso", "Jogo editado com sucesso!")
            
            refreshData()
        } catch (error:any) {
            Alert.alert("Error", error.toString())
        }
    }
  
    return (
        <View style={globalStyles.pageContainer}>
            <Stack.Screen options={{ title: "Editar" }}/>
            <StatusBar
                backgroundColor={THEME_COLORS.DARK_GRAY_COLOR}
                translucent={true}
                hidden={false}
            />

            {
                loadingData 
                ? <Loading /> 
                : <GameForm onSubmit={handleEdit} isLoading={loading} game={data} />
            }
        </View>
    )
}