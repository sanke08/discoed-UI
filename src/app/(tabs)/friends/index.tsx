import { View, Image, useColorScheme } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ui/ThemedText'
import { getTheme } from '@/lib/theme'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function FriendScreen() {
    const theme = useColorScheme() ?? "dark"
    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 10 }}>
            <ThemedText style={{ paddingHorizontal: 15, marginBottom: 20 }} className=' font-bold'>ONLINE - 1</ThemedText>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, marginBottom: 15 }}>
                <Image source={{ uri: "https://unsplash.it/400/400?image=1" }} className=' h-12 w-12 rounded-full' />
                <View>
                    <ThemedText className=' font-semibold' style={{ fontSize: 18, marginLeft: 15 }}>
                        testUserName
                    </ThemedText>
                    <ThemedText style={{ marginLeft: 15, color: getTheme[theme].text.secondary }}>
                        Hi this is a test message
                    </ThemedText>

                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 }}>
                <Image source={{ uri: "https://unsplash.it/400/400?image=1" }} className=' h-12 w-12 rounded-full' />
                <View>
                    <ThemedText className=' font-semibold' style={{ fontSize: 18, marginLeft: 15 }}>
                        testUserName22
                    </ThemedText>
                    <ThemedText style={{ marginLeft: 15, color: getTheme[theme].text.secondary }}>
                        Hi this is a test message
                    </ThemedText>

                </View>
            </View>
        </SafeAreaView>
    )
} 