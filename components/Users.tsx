import { useState } from "react"
import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native"
import UserEdit from "./UserEdit"


const data = [{
    name: "Kishore",
    message: "Hello to my friend",
    img: "https://res.cloudinary.com/dkavvdkki/image/upload/v1741891053/q5d5tmjnv5n78veetwhg.jpg"
},
{
    name: "Mohan",
    message: "Who are you my friend",
    img: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
}, {
    name: "Bunny",
    message: "https://avatar.iran.liara.run/public/42 is the link jakajkakjakj ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZirTv3YUaHSe-VVIQzwXUHXxb8mnJ-krbg&s"
}, {
    name: "Raju",
    message: "Hello to raju and his friend and to all his family what is this raju ",
    img: "https://avatar.iran.liara.run/public/42"
}, {
    name: "Kishore",
    message: "Hello",
    img: "https://avatar.iran.liara.run/public/12"
}, {
    name: "Kishore",
    message: "Hello",
    img: "https://avatar.iran.liara.run/public/42"
}, {
    name: "Kishore",
    message: "Hello",
    img: "https://avatar.iran.liara.run/public/42"
}, {
    name: "Kishore",
    message: "Hello",
    img: "https://avatar.iran.liara.run/public/42"
}, {
    name: "Kishore",
    message: "Hello",
    img: "https://avatar.iran.liara.run/public/42"
}, {
    name: "Kishore",
    message: "Hello",
    img: "https://avatar.iran.liara.run/public/42"
},
{
    name: "Kishore",
    message: "Hello",
    img: "https://avatar.iran.liara.run/public/42"
},
{
    name: "Kishore",
    message: "Hello",
    img: "https://avatar.iran.liara.run/public/42"
},
{
    name: "Last Name",
    message: "Hello",
    img: "https://avatar.iran.liara.run/public/42"
},

]


export default function Users() {

    const [visible,setVisible]=useState(false)
   // const [chat,setChat]=useState(true)
   // const [close,setClose]=useState()

    return (
        <>
            <View className="flex  flex-row justify-between items-center py-2 px-2 w-full text-zinc-100">
                <View className="flex-row items-center  gap-2" >
                    <Pressable onPress={()=>setVisible(true)}  >
                        <View className="bg-zinc-500 rounded-full w-[50px] h-[50px]  ">
                            <Image
                                className="w-full rounded-full h-full"
                                source={{ uri: "https://avatar.iran.liara.run/public/12" }}
                            />
                        </View>
                    </Pressable>
                    <Text className="text-4xl text-zinc-100 font-bold "  >Chats</Text>
                </View>

                <View><Pressable className="px-3 py-2 rounded-lg w-full bg-zinc-200 " ><Text className="text-xl font-semibold " >Add Chat</Text></Pressable></View>
            </View>
            <View className="w-full h-full pt-1 pb-20 " >
                <FlatList
                    data={data}
                    keyExtractor={(item,index) => (index.toString())}
                    renderItem={({ item }) =>
                    (
                        <TouchableOpacity onPress={() => { }} className="py-2  " >
                            <View className=" p-3 flex-row items-center justify-between w-full h-20 " >
                                <View className="bg-zinc-500 rounded-full w-[50px] h-[50px]  ">
                                    <Image
                                        className="w-full rounded-full h-full"
                                        source={{ uri: item.img }}
                                    />
                                </View>
                                <View className=" w-[75%] h-full  " >
                                    <Text className="text-2xl text-zinc-200 font-semibold  " >{item.name}</Text>
                                    <Text numberOfLines={1} ellipsizeMode="tail" className="text-zinc-500/90 font-medium " >{item.message}</Text>
                                </View>
                                <View className="bg-gray-500 rounded-lg w-5 h-10" ><Text className="text-2xl" >...</Text></View>

                            </View>
                        </TouchableOpacity>
                    )
                    }

                    ItemSeparatorComponent={() => (
                        <View className="h-[.5px] w-full bg-zinc-200/50" ></View>
                    )}

                />
            </View>
            {
                visible &&  <UserEdit setVisible={setVisible} visible={visible} close={()=>setVisible(false)}  />
            }
            {/* {
                chat && <Chat/>
            } */}
           
        </>
    )
}