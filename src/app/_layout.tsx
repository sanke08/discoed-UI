import { useColorScheme } from "react-native";
import "../global.css";
import { Slot, Stack } from "expo-router";
import { getTheme } from "@/lib/theme";

export default function Layout() {


  const theme = useColorScheme() ?? "dark"

  return (
    <Stack screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: getTheme[theme].background.surface, }
    }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  )
}
