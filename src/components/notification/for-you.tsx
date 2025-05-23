import { Image, ScrollView, useColorScheme, View } from "react-native"
import { ThemedText } from "../ui/ThemedText"
import { getTheme } from "@/lib/theme"

const NotificationForYou = () => {
    const theme = useColorScheme() ?? "dark"
    return (
        <ScrollView style={{ flex: 1, padding: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}>
                <View className=" w-12 h-12 rounded-full overflow-hidden">
                    <Image
                        source={{ uri: "https://unsplash.it/400/400?image=1" }}
                        style={{ width: 48, height: 48, borderRadius: 24 }}
                    />
                </View>
                <View style={{ flex: 1, }}>
                    <ThemedText style={{ fontSize: 16, fontWeight: "500", color: getTheme[theme].text.primary, flexWrap: "wrap" }}>
                        Test Community Session
                        <ThemedText style={{ color: getTheme[theme].text.primary, flexWrap: "wrap" }}> started in </ThemedText>
                        <ThemedText style={{ color: getTheme[theme].text.secondary, flexWrap: "wrap" }}>Test Server</ThemedText>
                    </ThemedText>

                    <ThemedText style={{ color: getTheme[theme].text.secondary, marginTop: 4 }}>5d</ThemedText>
                </View>
            </View>

        </ScrollView>
    )
}

export default NotificationForYou