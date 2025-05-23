import NotificationForYou from '@/components/notification/for-you';
import NotificationMentions from '@/components/notification/mentions';
import { getTheme } from '@/lib/theme';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();



const NotificationLayout = () => {

    const theme = useColorScheme() ?? "dark"

    return (
        <SafeAreaView className=' flex-1'>
            <Tab.Navigator id={undefined}
                screenOptions={{
                    sceneStyle: {
                        backgroundColor: getTheme[theme].background.default,
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: getTheme[theme].text.secondary,
                    },
                    tabBarStyle: { backgroundColor: getTheme[theme].background.default },
                    tabBarLabelStyle: { color: getTheme[theme].text.primary },
                }}>
                <Tab.Screen name='for-you' component={NotificationForYou} />
                <Tab.Screen name='mentions' component={NotificationMentions} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}

export default NotificationLayout