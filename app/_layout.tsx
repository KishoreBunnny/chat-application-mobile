import { Slot } from "expo-router";
import { SafeAreaView, StatusBar } from "react-native";



export default function RootLayout() {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <SafeAreaView className="bg-zinc-400" style={{ flex: 1,}}>
        <Slot />
      </SafeAreaView>
    </>
  );
}
