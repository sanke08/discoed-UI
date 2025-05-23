import { View, Text, Pressable } from 'react-native'
import React from 'react'
import ThemedIcon from '@/components/ui/ThemedIcon'
import { ThemedText } from '@/components/ui/ThemedText'

const Invite = () => {
    return (
        <Pressable className=' w-full rounded-lg items-center justify-center flex-row gap-2 border p-2' >
            <ThemedIcon name={"user-plus"} type='Feather' size={20} />
            <ThemedText className='text-sm mr-2 font-semibold' >Invite</ThemedText>
        </Pressable>
    )
}

export default Invite