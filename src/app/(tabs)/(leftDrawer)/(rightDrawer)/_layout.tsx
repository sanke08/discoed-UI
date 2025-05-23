
import RightDrawerContent from '@/components/right-drawer/right-drawer-content'
import { getTheme } from '@/lib/theme'
import Drawer from 'expo-router/drawer'
import { useColorScheme } from 'react-native'

const RightLayout = () => {

    const theme = useColorScheme() ?? "dark"

    return (
        <Drawer
            screenOptions={{
                drawerPosition: "right", headerShown: false,
                drawerStyle: { backgroundColor: getTheme[theme].background.default },
            }}
            drawerContent={() => <RightDrawerContent />}
        >
            <Drawer.Screen name='index'

                options={{
                    sceneStyle: { backgroundColor: getTheme[theme].background.default }
                }}
            />
        </Drawer>
    )
}

export default RightLayout