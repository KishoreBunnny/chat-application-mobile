import { API } from "@/config";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from "axios";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";



export type MessageType = {
    _id: string;
    __v: number;
    createdAt: string; // or Date if you're converting it
    updatedAt: string; // or Date
    senderId: string;
    receiverId: string;
    text?: string;
    file?: string;
};


export default function Chat() {
    const { userName, img, id } = useLocalSearchParams();
    const [messages, setMessages] = useState<MessageType[]>([])
    const [loading, setLoading] = useState(false)
    const [user, SetUser] = useState("")
    const [message, setMessage] = useState('')




    const HandleSendMess = async () => {
        console.log("clicked",userName,message)
        try {
            const res = await axios.post(`${API}/api/message/create`, { message, reciver: userName })
        setMessage('')

        if (res.data.message === "success") {
            Alert.alert("Message Sent", "Message sent successfully");
        }
        } catch (error) {
            console.log(error)
        }
    }





    useEffect(() => {
        const data = async () => {
            try {
                setLoading(true)
                const { data } = await axios.get(`${API}/api/messages`)
                const res = await axios.get(`${API}/api/user`)
                SetUser(res.data.id)
                setMessages(data.messages)
            } catch (error) {
                Toast.show({
                    type: 'error', // 'success' | 'error' | 'info'
                    text1: "Something went wrong,Cann`t fetch the data",
                });
            }
            finally {
                setLoading(false)
            }

        }
        data()

    }, [])







    return (
        <View className="w-full  h-full bg-zinc-950 " >

            <View className="w-full flex-row items-center justify-between px-0 py-2 h-[70px] border-b border-zinc-500/90 " >

                <View className="flex-row items-center gap-2 " >
                    <View>
                        <TouchableOpacity onPress={() => router.back()} >
                            <Ionicons name="chevron-back" size={40} color="white" />
                        </TouchableOpacity>

                    </View>

                    <Pressable onPress={() => { }}  >
                        <View className="bg-zinc-500 rounded-full w-[50px] h-[50px]  ">
                            <Image
                                className="w-full rounded-full h-full"
                                source={{ uri: img.toString() }}
                            />
                        </View>
                        <View className="h-3 w-3 rounded-full absolute bg-green-400 bottom-1 right-0  " />
                    </Pressable>
                    <View>
                        <Text className="text-2xl text-zinc-200 font-semibold " >{userName.toString()}</Text>
                        <Text className="text-zinc-400  " >Last Seen 30min</Text>
                    </View>
                </View>

            </View>


            <ScrollView className="w-full h-full mb-20 px-5 py-2 flex-col gap-3  bg-zinc-900" >


                {
                    messages.
                        filter(
                            (msg) =>
                                (msg.senderId === user && msg.receiverId === id) ||
                                (msg.senderId === id && msg.receiverId === user)
                        )
                        .map((msg, index) => (
                            <View key={msg._id} >
                                {
                                    msg.senderId !== user ? (
                                        <View key={index} className="max-w-[75%] my-2 rounded-xl p-2 bg-zinc-800 ">
                                            {
                                                msg.file &&
                                                <View className="w-full rounded-lg max-h-[200px]  h-[150px]  bg-zinc-700 mb-1 " >
                                                    <Image className="min-w-[100%] rounded-lg max-h-[200px]  h-[150px]   " source={{ uri: msg.file }} resizeMode="cover" />
                                                </View>
                                            }
                                            {
                                                msg.text &&
                                                <Text className="text-zinc-200 text-lg font-semibold  ">{msg.text}</Text>
                                            }
                                            <Text className="text-zinc-500 ">{new Date(msg.updatedAt).toLocaleDateString() + " " + new Date(msg.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                                        </View>
                                    ) : (
                                        <View key={index} className="max-w-[75%] ml-auto my-2 rounded-xl p-2 bg-zinc-300 ">
                                            {
                                                msg.file &&
                                                <View className="w-full rounded-lg max-h-[200px]  h-[150px]  bg-zinc-700 mb-1 " >
                                                    <Image className="min-w-[100%] rounded-lg max-h-[200px]  h-[150px]   " source={{ uri: msg.file }} resizeMode="cover" />
                                                </View>
                                            }
                                            {
                                                msg.text &&
                                                <Text className="text-zinc-800 text-lg font-semibold  ">{msg.text}</Text>
                                            }
                                            <Text className="text-zinc-500 ">{new Date(msg.updatedAt).toLocaleDateString() + " " + new Date(msg.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                                        </View>
                                    )
                                }
                            </View>
                        ))


                }

            </ScrollView>

            <View className="w-full h-[60px]  bg-zinc-900/50 backdrop:blur-lg  absolute flex-row justify-center items-center gap-1 pb-1  bottom-0 ">
                <TextInput value={message} onChangeText={setMessage} placeholder="Type your message..." placeholderTextColor="#a1a1aa" className="border bg-zinc-900 w-[70%]  text-zinc-300 border-zinc-500/90 p-2 py-3 rounded-lg" />
                <TouchableOpacity className="w-10 p-2 rounded-lg bg-zinc-900 " >
                    <AntDesign name="addfile" size={24} color="white" />
                </TouchableOpacity>
                {/* <Text className="text-xl w-10 p-2 bg-zinc-300 text-black text-center rounded-lg ">+</Text> */}
                <View><TouchableOpacity onPress={HandleSendMess} className="px-3 py-2 rounded-lg w-full bg-zinc-200 "><Text className="text-xl font-semibold ">Send</Text></TouchableOpacity></View>
            </View>

        </View>
    )
}