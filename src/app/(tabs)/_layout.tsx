import { useColorScheme } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '@/components/tab-bar'
import { FontAwesome, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { getTheme } from '@/lib/theme';

const TabLayout = () => {


    const theme = useColorScheme() ?? "dark"

    return (
        <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <TabBar {...props} />}>
            <Tabs.Screen name='(leftDrawer)'
                options={{
                    tabBarIcon: ({ focused, color, size }) => <FontAwesome6 name="discord" size={size} color={focused ? getTheme[theme].icon.primary : getTheme[theme].icon.secondary} />,
                    sceneStyle: { backgroundColor: getTheme[theme].background.default }
                }}
            />
            <Tabs.Screen name='friends/index'
                options={{
                    tabBarIcon: ({ color, focused, size }) => <FontAwesome5 name="user-friends" size={24} color={focused ? getTheme[theme].icon.primary : getTheme[theme].icon.secondary} />,
                    sceneStyle: { backgroundColor: getTheme[theme].background.default }
                }}
            />
            <Tabs.Screen name='notification'
                options={{
                    tabBarIcon: ({ color, focused, size }) => <FontAwesome name="bell" size={24} color={focused ? getTheme[theme].icon.primary : getTheme[theme].icon.secondary} />,
                    sceneStyle: { backgroundColor: getTheme[theme].background.default }
                }}
            />
            <Tabs.Screen name='account'
                options={{
                    tabBarIcon: ({ color, focused, size }) => <FontAwesome name="user-circle" size={24} color={focused ? getTheme[theme].icon.primary : getTheme[theme].icon.secondary} />,
                    sceneStyle: { backgroundColor: getTheme[theme].background.default }
                }}
            />
        </Tabs>
    )
}

export default TabLayout