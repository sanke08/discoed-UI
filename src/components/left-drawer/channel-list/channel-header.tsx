import { View, Text } from 'react-native'
import React from 'react'
import ThemedIcon from '@/components/ui/ThemedIcon'
import { ThemedText } from '@/components/ui/ThemedText'

const ChannelHeader = ({ title }: { title: string }) => {
    return (
        <View key={Math.floor(Math.random() * 9999999).toString()} style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <View style={{ flexDirection: 'row' }}>
                <ThemedIcon name={"chevron-down"} type='Entypo' size={16} />
                <ThemedText className=' font-semibold text-sm uppercase'  >
                    {title}
                </ThemedText>
            </View>
            <ThemedIcon name={"plus"} type='FontAwesome6' size={20} />
        </View>
    )
}

export default ChannelHeader