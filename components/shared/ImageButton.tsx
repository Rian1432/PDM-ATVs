import { Text, TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native'
import React from 'react'
import { THEME_COLORS } from '../../constants/GlobalStyles'

type ImageButtonProps = {
    title?: string
    source?: string
    handlePress: any
    customStyle?: object
}

export default function ImageButton({ title, source, handlePress, customStyle }: ImageButtonProps) {
    return (
        <TouchableOpacity onPress={handlePress} style={[styles.button, customStyle]}>
            <Image source={{uri: source}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
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
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 45,
        borderRadius: 20,
    },
    title: {
        color: THEME_COLORS.BASE_COLOR,
        textAlign: 'center',
        position: 'absolute',
        fontWeight: 'bold'
    },
});