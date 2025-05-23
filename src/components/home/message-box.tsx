import { View, Text, Image } from 'react-native'
import React from 'react'
import { TMessage } from '@/lib/types'
import { ThemedText } from '../ui/ThemedText'

const MessageBox = ({ data }: { data: TMessage }) => {
    return (
        <View key={Math.floor(Math.random() * 9999999).toString()} style={{ flexDirection: 'row', paddingHorizontal: 10, marginBottom: 25, alignItems: 'center' }}>
            <Image source={{ uri: data.user_details.image }} className=' h-10 w-10 rounded-full' />
            <View style={{ marginLeft: 15, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginBottom: 5 }}>
                    <ThemedText className=' font-medium' style={{ fontSize: 17, marginRight: 10, }}>
                        {data.user_details.name}
                    </ThemedText>
                    <ThemedText style={{ fontSize: 12 }}>{data.datetime}</ThemedText>
                </View>
                <View>
                    <ThemedText style={{ fontSize: 15 }}>{data.message}</ThemedText>
                </View>
            </View>
        </View>
    )
}

export default MessageBox