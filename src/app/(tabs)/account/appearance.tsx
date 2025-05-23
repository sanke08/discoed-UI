import { View, Text, Appearance } from 'react-native'
import React, { useCallback } from 'react'
import { ThemedText } from '@/components/ui/ThemedText'
import { SafeAreaView } from 'react-native-safe-area-context'

const AppearancePage = () => {
    const handleSetColorMode = useCallback((theme: "dark" | "light") => {
        Appearance.setColorScheme(theme)
    }, [])
    return (
        <SafeAreaView className='  flex-1'>
            <View style={{ height: 50, justifyContent: 'flex-end', paddingVertical: 10, paddingHorizontal: 15, borderBottomColor: 'gray', borderBottomWidth: .5 }}>
                <ThemedText>THEME</ThemedText>
            </View>
            <View style={{ flexDirection: 'row', padding: 20, width: '100%', justifyContent: 'flex-end' }}>
                <View onTouchEnd={() => handleSetColorMode('dark')} style={[{ width: 70, height: 70, marginRight: 15, borderRadius: 50, backgroundColor: 'gray', borderColor: 'gray', borderWidth: .5 },
                    // appColorModeState == 'dark' && {borderWidth: 5, borderColor: colorMode.light_blurple,}
                ]}></View>
                <View onTouchEnd={() => handleSetColorMode('light')} style={[{ width: 70, height: 70, marginRight: 15, borderRadius: 50, backgroundColor: 'white', borderColor: 'gray', borderWidth: .5 },
                    // appColorModeState == 'light' && {borderWidth: 5, borderColor: colorMode.light_blurple,}
                ]}
                >
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AppearancePage