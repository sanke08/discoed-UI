import { View, Text } from 'react-native'
import React from 'react'
import ChannelList from './channel-list'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import ServerList from './server-list'

const LeftDrawerContent = ({ ...props }: DrawerContentComponentProps) => {
    return (
        <View className=' flex-1 flex-row pt-14' >
            <ServerList />
            <ChannelList navigation={props.navigation} />
        </View>
    )
}

export default LeftDrawerContent