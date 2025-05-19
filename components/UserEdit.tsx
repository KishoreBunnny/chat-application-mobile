import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Modal, Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import Toast from "react-native-toast-message";


type UserEditProps = {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    close: () => void;
};


export default function UserEdit({ visible, close, setVisible }: UserEditProps) {
    const [avatar, setAvatar] = useState('')
    const [username, setUsername] = useState('')


    useEffect(()=>{

        
            try {
                const fetch = async () => {
        
                    const res = await axios.get(`${process.env.API}/api/user`)
                    if (res.data.message === "success")
                        setAvatar(res.data.avatar)
                    setUsername(res.data.username)
                }
                fetch()
            } catch (error) {
                Toast.show({
                    type: 'error', // 'success' | 'error' | 'info'
                    text1: 'Something went wrong',
                    text2: "Failed to load data"
                });
                console.log(error)
            }
    },[])



    const handleLogout=async()=>{
        await axios.get(`${process.env.API}/api/logout`)
        router.push("/(auth)/login")
                Toast.show({
                    type: 'error', // 'success' | 'error' | 'info'
                    text1: 'Logged out',
                });
    }

    return (

        <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={close} >
            <SafeAreaView>
                <View className="w-full py-5 px-2 h-[100vh] bg-gray-950">
                    <View className="flex-row items-center justify-between" >
                        <Pressable onPress={() => setVisible(false)} >
                            <View className="flex-row gap-2 items-center " >
                                <Ionicons name="chevron-back" size={40} color="white" />
                                <Text className="text-zinc-200 text-3xl font-bold " >Profile</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={handleLogout} className="p-2 bg-zinc-200 justify-center items-center rounded-xl" >
                            <Text className="text-zinc-900 font-bold text-lg " >Logout</Text>
                        </Pressable>
                    </View>


                    <View className="h-full w-full py-20 items-center  " >
                        <Pressable onPress={() => { }}  >
                            <View className="bg-zinc-500 rounded-full w-[100px] h-[100px]  ">
                                <Image
                                    className="w-full rounded-full h-full"
                                    source={{ uri: avatar }}
                                />
                            </View>
                        </Pressable>
                        <View className="mt-10" >
                            <Text className="text-zinc-300 mb-1 text-xl font-bold " >User Name:</Text>
                            <TextInput value={username} onChangeText={setUsername} placeholder="Enter user name" placeholderTextColor="#a1a1aa" className="border min-w-[70%]  text-zinc-300 border-zinc-100 p-2 py-3 rounded-xl" />
                        </View>

                        <View className="mt-5" ><Pressable onPress={() => setVisible(false)} className="px-3 py-2 rounded-lg w-full bg-zinc-200 " ><Text className="text-xl font-semibold " >Save</Text></Pressable></View>

                        <Text className="text-zinc-500 mt-3" >This is your username, it may be visible for others</Text>

                    </View>
                </View>
                <Toast/>
            </SafeAreaView>
        </Modal>

    )
}