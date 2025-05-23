import { View, StyleSheet, Pressable, useColorScheme } from 'react-native'
import { useCallback, useState } from 'react'
import useStore from '@/store';
import ThemedIcon from '../ui/ThemedIcon';
import ThemedInput from '../ui/ThemedInput';
import { getTheme } from '@/lib/theme';
import Animated, { FadeInLeft } from 'react-native-reanimated';
import { useKeyboardHeight } from '@/hooks/use-keyboard-height';

const ChatBox = ({ channelId, channelTitle, serverId }: { channelTitle: string; channelId: number; serverId: number; }) => {
    const [text, setText] = useState<string>('');
    const theme = useColorScheme() ?? "dark"
    const { keyboardHeight } = useKeyboardHeight()

    const { userProfile, updateMessage } = useStore()


    const handleSendMessage = useCallback(() => {
        if (text.length == 0) return;
        const message = {
            channelId: channelId,
            serverId: serverId,
            message: text,
            datetime: new Date().toLocaleString(),
            user_details: userProfile,
        }
        updateMessage(message);
        setText('')
    }, [text])


    return (
        <View className=' w-full flex-row items-end justify-between px-4 gap-2' style={{ paddingBottom: keyboardHeight }}>
            {
                text.length > 0 ?
                    <Animated.View entering={FadeInLeft} style={[styles.icon_container]}>
                        <ThemedIcon name={"chevron-right"} type='Entypo' />
                    </Animated.View> :
                    <Animated.View entering={FadeInLeft} className=' flex-row gap-2 p-2 rounded-full' style={{ backgroundColor: getTheme[theme].background.surface }}>
                        <View style={[styles.icon_container,]}>
                            <ThemedIcon name={"plus"} type='Entypo' size={18} color={getTheme[theme].icon.secondary} />
                        </View>
                        <View style={[styles.icon_container,]}>
                            <ThemedIcon name={"gift"} type='Feather' size={18} color={getTheme[theme].icon.secondary} />
                        </View>
                    </Animated.View>
            }
            <View className=' flex-1 w-full relative justify-center items-center border rounded-lg overflow-hidden' style={{ borderColor: getTheme[theme].border }} >
                <ThemedInput
                    placeholder={"Message #" + channelTitle}
                    multiline={true}
                    onChangeText={setText}
                    defaultValue={text}
                    className=' w-full px-2 pr-12 py-2 min-h-14'
                    numberOfLines={text.length ? 5 : 1}

                />
                <ThemedIcon name={"smile-o"} type='FontAwesome' size={18} style={{ position: "absolute", right: 14, bottom: 8 }} />
            </View>
            <View style={[{ backgroundColor: getTheme[theme].background.surface, borderRadius: "100%" }]} className='rounded-full flex justify-center items-center w-12 h-12'>
                {
                    text.length > 0 ?
                        <Pressable onTouchEnd={handleSendMessage}>
                            <ThemedIcon name={"send"} type='Feather' />
                        </Pressable>
                        :
                        <ThemedIcon name={"microphone"} type='FontAwesome' />
                }
            </View>
        </View>
    )
}

export default ChatBox



const styles = StyleSheet.create({
    icon_container: {
        width: 30,
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputStyle: {
        minHeight: 35,
        maxHeight: 100,
        width: 300,
        borderBottomWidth: 0,
        borderRadius: 20,
        paddingLeft: 14,
        fontSize: 15,
        fontFamily: 'ggsans-Regular',
        paddingRight: 40,
        paddingTop: 10

    }
})