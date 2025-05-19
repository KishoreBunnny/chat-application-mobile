
import { API } from "@/config";
import axios from "axios";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View } from "react-native";
import Toast from "react-native-toast-message";

export default function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [loading,setLoading]=useState(false)
    const router = useRouter()
    const handleLogin = async () => {
        setLoading(true)
        if(!userName.trim() || !password.trim() ){ 
            return  Toast.show({
                        type: 'error', // 'success' | 'error' | 'info'
                        text1: 'All fields are required',
                        text2: 'Please enter',
                    });
            }
        setUserName('')
        setPassword('')
        const data = { userName, password };
        console.log(data)
        console.log(process.env.API)
        try {
            const res = await axios.post(`${API}/api/login`, data)
        if (res.data.message != 'UserFound') {
            return Toast.show({
                        type: 'error', // 'success' | 'error' | 'info'
                        text1: 'Invalid username or password',
                        text2:"Please enter valid username or password"
                    });
        }
        if(res.data.message==="UserFound"){
            router.replace('/(screens)/users')
            return Toast.show({
                        type: 'success', // 'success' | 'error' | 'info'
                        text1: 'Logged in successfull',
                    });
        }
            setLoading(false)
        } catch (error) {
            console.log(error)
            Toast.show({
                        type: 'error', // 'success' | 'error' | 'info'
                        text1: "Something went wrong",  
                    });
        }finally{
            setLoading(false)
            setPassword('')
            setPassword('')
        }

    }
    return (
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
                        <TextInput value={userName} onChangeText={setUserName} placeholder="Enter user name" placeholderTextColor="#a1a1aa" className="border min-w-[90%]  text-zinc-300 border-zinc-100 p-2 py-3 rounded-xl" />
                    </View>
                    <View className="mt-5 mb-6" >
                        <Text className="text-zinc-300 mb-1 text-xl font-bold " >Password:</Text>
                        <TextInput value={password} onChangeText={setPassword} secureTextEntry={true}  placeholder="Enter password" placeholderTextColor="#a1a1aa" className="border min-w-[90%]  text-zinc-300 border-zinc-100 p-2 py-3 rounded-xl" />
                    </View>
                    <View className="mt-5" ><Pressable disabled={loading} onPress={handleLogin} className={`px-20 py-2 rounded-xl w-full ${loading?"bg-zinc-200/50" :"bg-zinc-200 " } `} ><Text className="text-xl font-semibold " >{loading?"Loading...":"Sign In"}</Text></Pressable></View>
                </View>
                <View className="flex-row mt-10 justify-center items-center gap-1" >
                    <Text className="text-zinc-500 text-2xl" >New User?</Text>
                    <Link className="text-blue-500 text-2xl underline " href={"/(auth)/register"} >Register</Link>
                </View>
            </KeyboardAvoidingView>
            <Toast/>
        </View>

    )
}