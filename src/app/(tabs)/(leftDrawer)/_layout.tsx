import React from 'react'
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Drawer } from "expo-router/drawer"
import LeftDrawerContent from '@/components/left-drawer/left-drawer-content'
import { getTheme } from '@/lib/theme'
import { useColorScheme } from 'react-native'
import useStore from '@/store'

const LeftLayout = () => {
  const theme = useColorScheme() ?? "dark"
  const { setHideBottomTab } = useStore()
  return (
    <GestureHandlerRootView>
      <Drawer

        screenOptions={{
          drawerPosition: "left", headerShown: false,
          drawerStyle: { width: "90%", backgroundColor: getTheme[theme].background.default }
        }}
        screenListeners={({

          state: (e) => {
            if (e.data.state.history.length >= 2)
              setHideBottomTab(false)
            else setHideBottomTab(true)
          }
        })}
        drawerContent={(props) => <LeftDrawerContent {...props} />}

      >
        <Drawer.Screen name='(rightDrawer)' />
      </Drawer>
    </GestureHandlerRootView>
  )
}

export default LeftLayout