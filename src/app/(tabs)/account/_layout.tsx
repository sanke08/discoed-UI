import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { getTheme } from '@/lib/theme'

const AccountLayout = () => {
    const theme = useColorScheme() ?? "dark"
    return (
        <Stack screenOptions={{
            headerShown: false,
            contentStyle: {
                backgroundColor: getTheme[theme].background.default
            }
        }}>
            <Stack.Screen name='index' />
            <Stack.Screen name='appearance' />
        </Stack>
    )
}

export default AccountLayout