import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { DrawerNavigationHelpers } from 'node_modules/@react-navigation/drawer/lib/typescript/src/types'
import Header from './header'
import useStore from '@/store'
import Invite from './invite'
import { TChannelSection } from '@/lib/types'
import ChannelHeader from './channel-header'
import ChannelItem from './channel-Item'

const ChannelList = ({ navigation }: { navigation: DrawerNavigationHelpers }) => {

    const { channelData, setChannelData, serverData } = useStore()


    useEffect(() => {
        const firstChannel = serverData?.channels?.[0]?.items?.[0];
        if (firstChannel && (!channelData || channelData.id !== firstChannel.id)) {
            setChannelData(firstChannel);
        }
    }, [serverData])


    const closeDrawer = useCallback(() => {
        navigation.closeDrawer()
    }, [])


    return (
        <View className=' flex-1 pr-4 gap-5'>
            <Header title={serverData.title} />
            {
                serverData.id !== 0 &&
                <Invite />
            }

            {
                channelData.id !== 0 &&
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: 20 }}>
                    {
                        serverData?.channels?.map((channel: TChannelSection, i) => (

                            <View key={i} className=' w-full'>
                                <ChannelHeader title={channel.category} />
                                {
                                    channel.items.map((value) => (
                                        <ChannelItem data={value} image='' key={value.id} closeDrawer={closeDrawer} />
                                    ))
                                }


                            </View>
                        ))
                    }
                </ScrollView>
            }
            {
                channelData.id === 0 &&
                <ScrollView>
                    {
                        serverData.channels[0]?.items.map((item, i) =>
                            <ChannelItem image="https://unsplash.it/400/400?image=1" data={item} closeDrawer={closeDrawer} />
                        )
                    }

                </ScrollView>
            }

        </View>
    )
}

export default ChannelList