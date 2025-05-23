import { View, Text, Pressable, FlatList, Image, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import HomeHeader from '@/components/home/home-header'
import { SafeAreaView } from 'react-native-safe-area-context'
import useStore from '@/store'
import MessageBox from '@/components/home/message-box'
import ChatBox from '@/components/home/chat-box'
import ThemedIcon from '@/components/ui/ThemedIcon'
import { ThemedText } from '@/components/ui/ThemedText'

const MainPage = () => {

    const { channelData, serverData, messages } = useStore()


    return (

        <SafeAreaView className=' flex-1 pb-4'>
            <HomeHeader channelTitle={channelData.title} />
            <View style={{ flex: 1 }}>
                <FlatList
                    data={messages.filter(message => message.channelId == channelData.id && message.serverId == serverData.id)}
                    keyExtractor={(_, i) => i.toString()}
                    renderItem={({ item, index }) => <MessageBox data={item} />}
                    ListFooterComponent={() => <WelcomeMessage channelTitle={channelData.title} serverId={serverData.id} uri={channelData.image} />}
                />
            </View>
            <ChatBox channelTitle={channelData?.title} channelId={channelData.id} serverId={serverData.id} />
        </SafeAreaView>
    )
}

export default MainPage



const WelcomeMessage = React.memo(({ channelTitle, serverId, uri }: { channelTitle: string; serverId?: number; uri?: string }) => {
    return (
        <View className=' justify-end  h-full' style={{ paddingHorizontal: 10, marginBottom: 30 }}>
            <View style={{ backgroundColor: 'rgb(80,80,80)', marginBottom: 10, width: 70, height: 70, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                {
                    uri ?
                        <Image source={{ uri }} className=' w-12 h-12 rounded-full' />
                        :
                        <ThemedIcon name={"hash"} type='Feather' size={50} />
                }
            </View>
            <View style={{}}>
                <ThemedText className=' font-bold' style={{ fontSize: 22, marginBottom: 10, }}>
                    {serverId === 0 ? channelTitle : "Welcome to #" + channelTitle}
                </ThemedText>
                <ThemedText style={{ fontSize: 14, marginBottom: 10, }}>
                    {serverId === 0 ? "This is the very beginning of your legandary conversation with " + channelTitle : "This is the start of the #" + channelTitle}
                </ThemedText>
            </View>

            {
                serverId !== 0 &&
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <ThemedText style={{ color: '#3276c4', marginLeft: 10 }}>Edit Channel</ThemedText>
                </View>
            }

        </View>
    )
})
