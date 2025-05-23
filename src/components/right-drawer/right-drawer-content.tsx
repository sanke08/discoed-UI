import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from './header'
import useStore from '@/store'
import ThemedIcon from '../ui/ThemedIcon'
import { ThemedText } from '../ui/ThemedText'

const RightDrawerContent = () => {

    const { channelData, userProfile } = useStore()


    return (
        <View className=' px-5 py-10 pt-14 gap-8'>
            <Header title={channelData.title} />


            <View className=' flex-row items-center justify-between border-b border-b-neutral-300 pb-4' >
                <View style={{ alignItems: 'center' }}>
                    <ThemedIcon name={"message"} type='Entypo' />
                    <ThemedText style={{ marginTop: 8 }}>
                        Threads
                    </ThemedText>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <ThemedIcon name={"pin"} type='Entypo' />
                    <ThemedText style={{ marginTop: 8 }}>
                        Pins
                    </ThemedText>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <ThemedIcon name={"notifications"} />
                    <ThemedText style={{ marginTop: 8 }}>
                        Notifications
                    </ThemedText>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <ThemedIcon name={"settings"} />
                    <ThemedText style={{ marginTop: 8 }}>
                        Settings
                    </ThemedText>
                </View>
            </View>



            <View className=' flex-row items-center justify-start gap-4' >
                <ThemedIcon name={"user-plus"} type='Feather' size={18} />
                <ThemedText className=' font-medium text-lg' >Invite Members</ThemedText>
            </View>

            <ThemedText className=' font-bold' >ONLINE - 1</ThemedText>


            <View className=' flex-row items-center gap-4' >
                <Image source={{ uri: "https://unsplash.it/400/400?image=1" }} className=' h-10 w-10 rounded-full' />
                <ThemedText className=' font-medium text-lg' >
                    {userProfile.name}
                </ThemedText>
            </View>



        </View>
    )
}

export default RightDrawerContent