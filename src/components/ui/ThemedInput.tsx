import { TextInput, TextInputProps, useColorScheme } from 'react-native'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { getTheme } from '@/lib/theme'

const ThemedInput = ({ className, style, ...rest }: TextInputProps) => {
    const theme = useColorScheme() ?? "dark"
    return (
        <TextInput
            placeholderTextColor={getTheme[theme].text.secondary}
            className={twMerge("  text-white w-full p-4 rounded-lg", className)}
            style={[{ color: getTheme[theme].text.primary }, style]}
            {...rest}
        />

    )
}

export default ThemedInput