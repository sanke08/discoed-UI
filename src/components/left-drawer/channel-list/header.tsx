import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ThemedIcon from '@/components/ui/ThemedIcon'
import { ThemedText } from '@/components/ui/ThemedText'

const Header = ({ title }: { title: string }) => {
    return (
        <TouchableOpacity className=' w-full flex-row justify-between'>
            <ThemedText className=' font-bold text-2xl' >{title}</ThemedText>
            {/* <Dots width={30} height={30} /> */}
            <ThemedIcon name={"dots-three-horizontal"} type='Entypo' />
        </TouchableOpacity>
    )
}

export default Header