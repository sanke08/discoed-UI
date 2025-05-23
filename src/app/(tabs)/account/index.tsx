import { View, Text, ScrollView, useColorScheme, Image, TouchableOpacity, Appearance } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getTheme } from '@/lib/theme'
import { ThemedText } from '@/components/ui/ThemedText'
import useStore from '@/store'
import { ThemedView } from '@/components/ui/ThemedView'
import ThemedIcon from '@/components/ui/ThemedIcon'
import { useRouter } from 'expo-router'

export default function AccountScreen() {
    const theme = useColorScheme() ?? "dark"
    useColorScheme()
    // Appearance.setColorScheme("")

    const { userProfile } = useStore()
    const router = useRouter()
    return (
        <SafeAreaView className=' flex-1'>
            <ScrollView className=' flex-1'>
                <View className=' h-48 w-full bg-green-400' />
                <View className=' px-5 flex-1'>
                    <View className='relative pt-24 flex-row items-end justify-between'>
                        <ThemedView className=' w-40 h-40 absolute -top-20 rounded-full p-3'>
                            <Image source={{ uri: "https://unsplash.it/400/400?image=1" }} className=' w-full h-full rounded-full' />
                        </ThemedView>
                        <View className=''>
                            <ThemedText className=' font-bold text-3xl' >{userProfile.name}</ThemedText>
                            <ThemedText>{userProfile.user_name}</ThemedText>
                        </View>
                        <View className=' bg-green-500 rounded-full p-1'>
                            <ThemedIcon name={"hash"} type='Feather' size={14} />
                        </View>
                    </View>
                    <View className='rounded-lg overflow-hidden mt-5'>

                        <ListComp title="Set Status" icon={<ThemedIcon name={"user"} type='FontAwesome' />} />
                        <ListComp title="Get Nitro" icon={<ThemedIcon name={"speedometer"} />} />
                        <ListComp title="Account" icon={<ThemedIcon name={"manage-accounts"} type='MaterialIcons' />} />
                        <ListComp title="Profiles" icon={<ThemedIcon name={"pen"} type='FontAwesome6' />} />
                    </View>

                    <ThemedText className=' mt-5 pb-2'>BILLING SETTINGS</ThemedText>
                    <View className='rounded-lg overflow-hidden '>
                        <ListComp title="Nitro Gifting" icon={<ThemedIcon name={"gift"} />} />
                    </View>

                    <ThemedText className=' my-5'>App SETTINGS</ThemedText>
                    <View className='rounded-lg overflow-hidden '>
                        <ListComp callbackFn={() => router.push("account/appearance")} title="Appearance" icon={<ThemedIcon name={"theme-light-dark"} type='MaterialCommunityIcons' />} />
                    </View>

                    <ThemedText className=' my-5'>SUPPORT</ThemedText>
                    <View className='rounded-lg overflow-hidden '>
                        <ListComp title="Support" icon={<ThemedIcon name={"info-with-circle"} type='Entypo' />} />
                        <ListComp title="Upload debug logs to Discord Support" icon={<ThemedIcon name={"info-with-circle"} type='Entypo' />} />
                        <ListComp title="Acknowledgements" icon={<ThemedIcon name={"info-with-circle"} type='Entypo' />} />
                    </View>


                    <ThemedText className=' my-5'>What's New</ThemedText>
                    <View className='rounded-lg overflow-hidden '>
                        <ListComp title="What's New" icon={<ThemedIcon name={"info-with-circle"} type='Entypo' />} />
                    </View>

                    <TouchableOpacity activeOpacity={0.6} className=' w-full rounded-lg p-5 my-10' style={{ backgroundColor: getTheme[theme].background.surface }}>
                        <Text className=' text-rose-500 text-center'>Logout</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}




const ListComp = ({ title, icon, callbackFn }: { title: string, icon: any, callbackFn?: Function }) => {
    const theme = useColorScheme() ?? "dark"
    return (
        <TouchableOpacity activeOpacity={0.6} onPressOut={() => callbackFn?.()} className="flex-row items-center justify-between p-3 w-full" style={{ borderBottomWidth: 1, borderBottomColor: getTheme[theme].border, backgroundColor: getTheme[theme].background.surface }} >
            <View className=' flex-row items-center gap-3 flex-1' >
                <View className=' w-8'>
                    {icon}
                </View>
                <ThemedText className=' font-medium text-lg text-wrap flex-1' >
                    {title}
                </ThemedText>
            </View>

            <ThemedIcon name="chevron-right" type={'Entypo'} size={30} />
        </TouchableOpacity>
    )
}