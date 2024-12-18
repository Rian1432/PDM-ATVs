import { View, Text, TextInput, StyleSheet, TextInputProps, ColorValue } from 'react-native'
import React, { useState } from 'react'
import { THEME_COLORS } from '../../constants/GlobalStyles';
import { Ionicons } from '@expo/vector-icons';

export type CustomTextInputProps = TextInputProps & {
    placeholderTextColor?: ColorValue;
    icon?: string;
}

export default function CustomInput({ placeholderTextColor = '#888', icon, ...props }: CustomTextInputProps) {
    const [isFocused, setIsFocused] = useState(false);

    const renderIcon = () => {
        if(icon) {
             return <Ionicons 
                name={icon} 
                size={18} 
                color={THEME_COLORS.GRAY_COLOR} 
            />
        }
    }

    return (
        <View style={[styles.inputContainer, isFocused && styles.inputFocused]}>
            {renderIcon()}

            <TextInput 
                style={[styles.input, isFocused && styles.inputFocused]}
                keyboardType={props.keyboardType ? props.keyboardType : 'default'}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholderTextColor={THEME_COLORS.GRAY_COLOR}
                {...props} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: THEME_COLORS.DARK_GRAY_COLOR,
        backgroundColor: THEME_COLORS.DARK_GRAY_COLOR,
        paddingHorizontal: 10,
        paddingVertical: 5,
        outlineWidth: 0,
        gap: 10,
    },
    input: {
        width: 250,
        outlineWidth: 0,
        color: THEME_COLORS.TEXT_COLOR,
    },
    inputFocused: {
        borderColor: THEME_COLORS.PRIMARY_COLOR,
    },
});
