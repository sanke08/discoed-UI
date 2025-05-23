import { View, Text, useColorScheme } from 'react-native'
import ThemedIcon from '../ui/ThemedIcon'
import { useNavigation, DrawerActions } from "@react-navigation/native"
import { ThemedText } from '../ui/ThemedText'
import { getTheme } from '@/lib/theme'


const HomeHeader = ({ channelTitle }: { channelTitle: string }) => {
    const navigation = useNavigation()
    const theme = useColorScheme() ?? "dark"

    const openLeftDrawer = () => navigation.getParent().dispatch(DrawerActions.openDrawer())
    const openRighttDrawer = () => navigation.dispatch(DrawerActions.openDrawer())

    return (
        <View className=' w-full flex-row justify-between items-center py-2 pb-4 px-4' style={{ borderBottomWidth: 1, borderBottomColor: getTheme[theme].border }} >
            <View className=' flex-row flex-1 gap-4 items-center' >
                <View onTouchEnd={() => openLeftDrawer()}>
                    <ThemedIcon name={"menu"} type='Entypo' />
                </View>
                <View className=' flex-row items-center gap-1' >
                    <ThemedIcon name={"hash"} type='Feather' />
                    <ThemedText className=' font-bold' >
                        {channelTitle}
                    </ThemedText>
                </View>
            </View>

            <View className=' flex-row gap-6 w-fit' >
                <ThemedIcon name={"search"} type='Feather' />
                <View onTouchEnd={() => openRighttDrawer()}>
                    <ThemedIcon name={"user"} type='FontAwesome' />
                </View>
            </View>

        </View>
    )
}

export default HomeHeader