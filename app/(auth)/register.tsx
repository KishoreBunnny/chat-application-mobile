
import { API } from "@/config";
import axios from "axios";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from 'react-native-toast-message';


export default function Register() {
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [avatar, setAvatar] = useState("https://avatar.iran.liara.run/public/12")
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const router = useRouter()
    const handleSubmit = async () => {
        if(!name || !userName || !avatar || !password  ) {
            console.log("all field are requried")
            return Toast.show({
                    type: 'error', // 'success' | 'error' | 'info'
                    text1: 'All fieldes are requried',
                });
        }
        setLoading(true)
        const data = { name, userName, avatar, password };
        try {
            const res = await axios.post(`${API}/api/register`, data)
            if (res.data.message === "UserThere" || res.data.message==="UserName already exists" ) {
               return Toast.show({
                    type: 'error', // 'success' | 'error' | 'info'
                    text1: 'User already exits!',
                    text2: 'Please try with other username',
                });
            }
            
            if (res.data.message === 'Registered') {
                setLoading(false)
                Toast.show({
                    type: 'success', // 'success' | 'error' | 'info'
                    text1: 'Success',
                    text2: 'Registered successfully',
                });
                router.replace('/(auth)/login')
                console.log("user registered success")
            }
        }
         catch (error) {
            Toast.show({
                type: 'error', // 'success' | 'error' | 'info'
                text1: 'Failed to registered',
                text2: 'Something went wrong',
            });
            console.log("register error:", error)
        }
         finally {
            setLoading(false)
            setName('')
            setPassword('')
            setUserName('')
        }

    }

    return (
            <View className="w-full h-full px-5 pt-10  bg-zinc-950">
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ flex: 1 }}
                >
                    <View className="w-full py-6 border flex-col  items-center  px-7 pt-6 border-zinc-500 rounded-3xl" >
                        <Text className="text-zinc-100 text-4xl font-extrabold " >Create an account</Text>
                        <Text className="text-zinc-500 text-xl font-semibold " >Enter your Username below to create your account</Text>
                        <Text className="text-zinc-100 font-bold text-lg underline " >Profile Photo</Text>
                        <Pressable onPress={() => { }}  >
                            <View className="bg-zinc-500 mt-3 rounded-full w-[100px] h-[100px]  ">
                                <Image
                                    className="w-full rounded-full h-full"
                                    source={{ uri: "https://avatar.iran.liara.run/public/12" }}
                                />
                            </View>
                        </Pressable>
                        <View className="mt-5" >
                            <Text className="text-zinc-300 mb-1 text-xl font-bold " >Full Name:</Text>
                            <TextInput value={name} onChangeText={setName} placeholder="Enter full name" placeholderTextColor="#a1a1aa" className="border min-w-[90%]  text-zinc-300 border-zinc-100 p-2 py-3 rounded-xl" />
                        </View>
                        <View className="mt-8" >
                            <Text className="text-zinc-300 mb-1 text-xl font-bold " >User Name:</Text>
                            <TextInput value={userName} onChangeText={setUserName} placeholder="Enter user name" placeholderTextColor="#a1a1aa" className="border min-w-[90%]  text-zinc-300 border-zinc-100 p-2 py-3 rounded-xl" />
                        </View>
                        <View className="mt-5 mb-6" >
                            <Text className="text-zinc-300 mb-1 text-xl font-bold " >Password:</Text>
                            <TextInput value={password} onChangeText={setPassword} secureTextEntry={true} placeholder="Enter password" placeholderTextColor="#a1a1aa" className="border min-w-[90%]  text-zinc-300 border-zinc-100 p-2 py-3 rounded-xl" />
                        </View>
                        <View className="mt-5" ><TouchableOpacity onPress={handleSubmit} className="px-20 py-2 rounded-xl w-full bg-zinc-200 " ><Text className="text-xl font-semibold " >{loading ? "Loading..." : "Create account"}</Text></TouchableOpacity></View>
                    </View>
                    <View className="flex-row mt-10 justify-center items-center gap-0" >
                        <Text className="text-zinc-500 text-2xl" >Already have an account?</Text>
                        <Link className="text-blue-500 text-2xl underline " href={"/(auth)/login"} >Login</Link>
                    </View>
                    <Toast />
                </KeyboardAvoidingView>
            </View>

    )
}