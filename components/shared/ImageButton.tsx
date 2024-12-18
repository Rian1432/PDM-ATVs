import { Text, TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native'
import React from 'react'
import { THEME_COLORS } from '../../constants/GlobalStyles'
import Loading from './Loading'

type ImageButtonProps = {
    title?: string
    source?: string
    handlePress: any
    customStyle?: object
    loading?: boolean
}

export default function ImageButton({ title, source, handlePress, customStyle, loading }: ImageButtonProps) {
    const renderLoading = () => {
        if (loading) {
            return <Loading></Loading>
        } else {
            return <Text style={styles.title}>{title}</Text>
        }
    }

    return (
        <TouchableOpacity onPress={handlePress} style={[styles.button, loading && styles.buttonDisabled, customStyle]} disabled={loading}>
            <Image source={{uri: source}} style={styles.image} />
            {renderLoading()}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        position: 'relative',
        borderRadius: 20,
        backgroundColor: THEME_COLORS.PRIMARY_COLOR,
        minHeight: 45,
        minWidth: 200,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonDisabled: {
        opacity: 0.5,
    },
    title: {
        color: THEME_COLORS.TEXT_COLOR,
        textAlign: 'center',
        position: 'absolute',
        fontWeight: 'bold'
    },
});