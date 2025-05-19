import { Ionicons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, useLocalSearchParams } from "expo-router";
import { Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";


const messages = [
    { message: "Hi bro" },
    { img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202504/sam-altman-on-ghibli-trend-305302139-3x4.jpg?VersionId=ZNgLhhEWK2YaYjFGnE_ieERzIOiPXLKF" },
    { message: "Hello bro", img: "https://randomuser.me/api/portraits/men/2.jpg" },
    { message: "What's up?", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPp1M1ACCInjqQoIGdUKltImApyiT_QE7uQ&s" },
    { message: "Are you coming?" },
    { message: "Meeting at 5", img: "https://cdn.pixabay.com/photo/2022/12/22/18/49/summer-7672786_640.jpg" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVrNaV47Inpu__kgC1w-jwotU6BR7hYj3jQ&s" },
    { message: "Don't forget the files" },
    { message: "Check this out", img: "https://randomuser.me/api/portraits/men/4.jpg" },
    { message: "Yeah sure", img: "https://randomuser.me/api/portraits/men/5.jpg" },
];
const messages2 = [{ message: "Nice work bro" },
{ img: "https://randomuser.me/api/portraits/men/6.jpg" },
{ message: "What's the update?" },
{ message: "I'm almost there" },
{ img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyv_ORNd0zcFnrBQlA3SSRU3S3dDs0KSt-NA&s" },
{ message: "See you soon!" },
{ message: "Good night", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVO_fqjk866fuvJ-z_Qsv_5XGFbHs3l4pM5Q&s" },
{ message: "Mac", img: "https://media.kingston.com/kingston/hero/ktc-articles-solutions-speed-up-your-mac-hero-lg.jpg" },
{
    message: "Local path to an image to use as the icon for push notifications. 96x96 all-white png with transparency."
}
]


export default function Chat() {
    const { userName, img } = useLocalSearchParams();
    return (
        <View className="w-full  h-full bg-zinc-950 " >

            <View className="w-full flex-row items-center justify-between px-0 py-2 h-[70px] border-b border-zinc-500/90 " >

                <View className="flex-row items-center gap-2 " >
                    <View>
                        <TouchableOpacity onPress={()=>router.back()} >
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

                <View className="max-w-[75%] my-2 rounded-xl p-2 bg-zinc-800 " >
                    <View className="min-w-full rounded-lg max-h-[200px]  h-[150px]  bg-zinc-700 mb-1 " >
                        <Image className="min-w-[100% ] rounded-lg max-h-[200px]  h-[150px]   " source={{ uri: "https://res.cloudinary.com/dkavvdkki/image/upload/v1742873908/vndkifgnywvtx3cikwno.jpg" }} resizeMode="cover" />
                    </View>
                    <Text className="text-zinc-200 text-lg font-semibold   " >Lorem  magni saepe id exercitationem quibusdam sequi.am!</Text>
                    <Text className="text-zinc-500 mt-2 ">14/03/2025 12:41</Text>
                </View>


                <View className="max-w-[75%] my-2 ml-auto rounded-xl p-2 bg-zinc-300 " >
                    <View className="min-w-full rounded-lg max-h-[200px]  h-[150px]  bg-zinc-400 mb-1 " >
                        <Image className="min-w-[100% ] rounded-lg max-h-[200px]  h-[150px]   " source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNTewNSn3HZiQFSLol-fNyeQRO5t21QBtQFg&s" }} resizeMode="cover" />
                    </View>
                    <Text className="text-zinc-800 text-lg font-semibold  " >Hi bro</Text>
                    <Text className="text-zinc-500 mt-2 ">14/03/2025 12:41</Text>
                </View>

                {
                    messages.map((item, index) => (
                        <View key={index} className="max-w-[75%] my-2 rounded-xl p-2 bg-zinc-800 ">
                            {
                                item.img &&
                                <View className="w-full rounded-lg max-h-[200px]  h-[150px]  bg-zinc-700 mb-1 " >
                                    <Image className="min-w-[100%] rounded-lg max-h-[200px]  h-[150px]   " source={{ uri: item.img }} resizeMode="cover" />
                                </View>
                            }
                            {
                                item.message &&
                                <Text className="text-zinc-200 text-lg font-semibold  ">{item.message}</Text>
                            }
                            <Text className="text-zinc-500 ">14/03/2025 12:41</Text>
                        </View>
                    ))
                }
                {
                    messages2.map((item, index) => (
                        <View key={index} className="max-w-[75%] ml-auto my-2 rounded-xl p-2 bg-zinc-300 ">
                            {
                                item.img &&
                                <View className="w-full rounded-lg max-h-[200px]  h-[150px]  bg-zinc-700 mb-1 " >
                                    <Image className="min-w-[100%] rounded-lg max-h-[200px]  h-[150px]   " source={{ uri: item.img }} resizeMode="cover" />
                                </View>
                            }
                            {
                                item.message &&
                                <Text className="text-zinc-800 text-lg font-semibold  ">{item.message}</Text>
                            }
                            <Text className="text-zinc-500 ">14/03/2025 12:41</Text>
                        </View>
                    ))
                }



            </ScrollView>

            <View className="w-full h-[60px]  bg-zinc-900/50 backdrop:blur-lg  absolute flex-row justify-center items-center gap-1 pb-1  bottom-0 ">
                <TextInput placeholder="Type your message..." placeholderTextColor="#a1a1aa" className="border bg-zinc-900 w-[70%]  text-zinc-300 border-zinc-500/90 p-2 py-3 rounded-lg" />
                <TouchableOpacity className="w-10 p-2 rounded-lg bg-zinc-900 " >
                <AntDesign name="addfile" size={24} color="white" />
                </TouchableOpacity>
                {/* <Text className="text-xl w-10 p-2 bg-zinc-300 text-black text-center rounded-lg ">+</Text> */}
                <View><TouchableOpacity onPress={() => { }} className="px-3 py-2 rounded-lg w-full bg-zinc-200 "><Text className="text-xl font-semibold ">Send</Text></TouchableOpacity></View>
            </View>

        </View>
    )
}