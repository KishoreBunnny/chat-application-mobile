
import { useRouter } from "expo-router";
import { KeyboardAvoidingView, Platform, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Login() {
    const router = useRouter()
    return (
        <SafeAreaView>
            <View className="w-full h-full px-5 pt-20 bg-zinc-950">
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ flex: 1 }}
                >
                    <View className="w-full py-10 border flex-col items-center  px-7 pt-6 border-zinc-500 rounded-3xl" >
                        <Text className="text-zinc-100 text-4xl font-extrabold " >Sign in to ChatApplication</Text>
                        <Text className="text-zinc-500 text-xl font-semibold " >Enter your Username below to login into your account</Text>
                        <View className="mt-8" >
                            <Text className="text-zinc-300 mb-1 text-xl font-bold " >User Name:</Text>
                            <TextInput placeholder="Enter user name" placeholderTextColor="#a1a1aa" className="border min-w-[90%]  text-zinc-300 border-zinc-100 p-2 py-3 rounded-xl" />
                        </View>
                        <View className="mt-5 mb-6" >
                            <Text className="text-zinc-300 mb-1 text-xl font-bold " >Password:</Text>
                            <TextInput placeholder="Enter password" placeholderTextColor="#a1a1aa" className="border min-w-[90%]  text-zinc-300 border-zinc-100 p-2 py-3 rounded-xl" />
                        </View>
                        <View className="mt-5" ><Pressable onPress={() => {router.push("/chat") }} className="px-20 py-2 rounded-xl w-full bg-zinc-200 " ><Text className="text-xl font-semibold " >Sign In</Text></Pressable></View>
                    </View>
                    <View className="flex-row mt-2 justify-center items-center gap-0" >
                        <Text className="text-zinc-500 text-xl" >New User?</Text><TouchableOpacity onPress={() => router.push("/")} ><Text className="text-blue-500 underline  text-xl "  >Register</Text></TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}