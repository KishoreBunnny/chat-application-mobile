import { API } from "@/config";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { router } from "expo-router";
import { useState } from "react";
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

export default function AddUser() {
    const [findUser, setFindUser] = useState('')
    const [username, setUsername] = useState('')
    const [avatar, setAvatar] = useState('')
    const handleAddUser = async () => {

        const res = await axios.post(`${API}/api/finduser`, { findUser })
        if (res.data.message === "no user found") {
            return Toast.show({
                type: 'error', // 'success' | 'error' | 'info'
                text1: "No user found",
            });
        }
        console.log(res.data)
        // if(res.data.message==="user found") 
        setAvatar(res.data.avatar)
        setUsername(res.data.userName)
    }
    return (
        <View className="w-full h-full bg-zinc-950" >
            <View style={{ marginBottom: 15 }} >
                <Pressable onPress={() => router.back()} >
                    <View className="flex-row mt-3 gap-4 items-center " >
                        <Ionicons name="chevron-back" size={40} color="white" />
                        <Text className="text-zinc-100 text-3xl font-bold " >New Chat</Text>
                    </View>
                </Pressable>
            </View>

            <View className="px-3 w-full " >
                <Text className="text-zinc-300 mb-1  text-3xl font-bold " >Find a user </Text>
                <View className="mt-5 w-full flex-row gap-1 items-center " >
                    <TextInput numberOfLines={1} style={{ width: 280 }} value={findUser} onChangeText={setFindUser} placeholder="Enter user name" placeholderTextColor="#a1a1aa" className="border w-full  text-zinc-300 border-zinc-100 p-3 rounded-xl" />
                    <TouchableOpacity onPress={handleAddUser} className=" justify-center rounded-xl items-center bg-zinc-100 " style={{ width: 60, backgroundColor: "white" }} >
                        <Ionicons name="search" size={24} color="black" className="rounded-lg p-2" />
                    </TouchableOpacity>
                </View>


                {
                    username &&
                    // <Modal animationType="slide" transparent={true}  >
                    <TouchableOpacity
                        onPress={() => {
                            router.push({
                                pathname: "/(screens)/chat",
                                params: { userName:username, img:avatar  }
                            })
                        }}
                        className="py-2 mt-5 border border-zinc-500 rounded-3xl  " >
                        <View className=" p-3 flex-row items-center gap-3 w-full h-20 " >
                            <View style={{ width: 70, height: 70 }} className="bg-zinc-500 rounded-full">
                                <Image

                                    className="w-full rounded-full h-full"
                                    source={{ uri: avatar }}
                                />
                            </View>
                            <Text className="text-2xl text-zinc-200 font-semibold  " >{username}</Text>
                        </View>
                    </TouchableOpacity>
                    // </Modal>
                }
                <Toast />
            </View>
        </View>
    )
}