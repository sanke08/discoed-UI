import { View, Text } from 'react-native'
import React from 'react'
import ThemedIcon from '../ui/ThemedIcon'
import { ThemedText } from '../ui/ThemedText'

const Header = ({ title }: { title: string }) => {
    return (
        <View >
            <ThemedIcon name={"hash"} type='Feather' />
            <ThemedText className=' font-bold text-xl'>{title}</ThemedText>
        </View>
    )
}

export default Header