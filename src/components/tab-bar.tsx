import { Pressable, Text, useColorScheme, View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import Feather from '@expo/vector-icons/Feather';
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import useStore from "@/store";
import ThemedIcon from "./ui/ThemedIcon";
import { getTheme } from "@/lib/theme";



export default function TabBar({ navigation, state, descriptors }: BottomTabBarProps) {

    const { hideBottomTab } = useStore()
    const theme = useColorScheme() ?? "dark"
    const animateStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                translateY: withTiming(hideBottomTab ? 80 : 0)
            }],
            height: withTiming(hideBottomTab ? 0 : 60)
        }
    })


    return (
        <Animated.View style={[animateStyle, { borderTopColor: getTheme[theme].border }]} className=" flex-row border-t justify-center items-center px-4" >
            {
                state.routes.map((route, index) => {


                    const insertSearch = index === 2;

                    const { options } = descriptors[route.key]
                    const isFocused = state.index === index;

                    const onPress = () => {
                        // if(route.name.toLocaleLowerCase()==="search"){}
                        const event = navigation.emit({
                            type: "tabPress",
                            target: route.key,
                            canPreventDefault: true
                        })
                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params)
                        }
                    }




                    return (
                        <>
                            {
                                insertSearch ? <Pressable
                                    key={`${index}_search`}
                                    className=" h-16 flex-1 justify-center items-center fill-black">
                                    <ThemedIcon name="search" type="Feather" size={24} color={getTheme[theme].icon.secondary} />
                                </Pressable> : null
                            }
                            <Pressable key={`${index}_${route.name}`}
                                onPress={onPress}
                                className=" h-16 flex-1 justify-center items-center">
                                {options.tabBarIcon({
                                    focused: isFocused,
                                    color: "",
                                    size: 24,
                                })}
                            </Pressable>
                        </>
                    )
                })
            }


        </Animated.View>
    )
}