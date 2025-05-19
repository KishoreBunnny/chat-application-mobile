import UserEdit from "@/components/UserEdit"
import axios from "axios"
import { useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native"
import Toast from "react-native-toast-message"


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


type User = {
  username: string;
  avatar: string;
  // add other fields if necessary
};


export default function Users() {

    const [visible, setVisible] = useState(false)
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const[userAvatar,setUserAvatar]=useState('')
    // const [chat,setChat]=useState(true)
    // const [close,setClose]=useState()
    const router = useRouter()

    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await axios.get(`${process.env.API}/api/chatusers`)
                const res=await axios.get(`${process.env.API}/api/user`)
                if(res.data.message==="success") setUserAvatar(res.data.avatar)
                console.log(userAvatar)
                setUsers(data)
                console.log(data)
            } catch (error) {
                Toast.show({
                    type: 'error', // 'success' | 'error' | 'info'
                    text1: 'Something went wrong',
                });
            }
            finally {
                setLoading(false)
            }

        }
        fetch()

    }, [])

    return (
        <>
            <View className="flex bg-zinc-950 flex-row justify-between items-center py-2 px-2 w-full text-zinc-100">
                <View className="flex-row items-center  gap-2" >
                    <Pressable onPress={() => setVisible(true)}  >
                        <View className="bg-zinc-500 rounded-full w-[50px] h-[50px]  ">
                            <Image
                                className="w-full rounded-full h-full"
                                source={{ uri: userAvatar }}
                            />
                        </View>
                    </Pressable>
                    <Text className="text-4xl text-zinc-100 font-bold "  >Chats</Text>
                </View>

                <View>
                    <Pressable onPress={() => router.push("/(screens)/add")} className="px-3 py-2 rounded-lg w-full bg-zinc-200 " >
                        <Text className="text-xl font-semibold " >Add Chat</Text>
                    </Pressable>
                </View>
            </View>
            <View className="w-full h-full bg-zinc-950 pt-1 pb-20 ">

                  {users.length===0 &&  <Text style={{marginTop:50,marginLeft:50}} className="text-zinc-200 text-3xl font-bold  " >Add Chat to start chating</Text> }

                {
                    users &&
                    <FlatList
                        data={users}
                        keyExtractor={(_, index) => (index.toString())}
                        renderItem={({ item }:{item:User}) =>
                        (
                            <TouchableOpacity onPress={() => {
                                router.push({ pathname: "/(screens)/chat",
                                params: { userName: item.username, img: item.avatar }
                                })
                                    }}
                                    className="py-2  " >
                                <View className=" p-3 gap-3 flex-row items-center  w-full h-20 " >
                                    <View className="bg-zinc-500 rounded-full w-[50px] h-[50px]  ">
                                        <Image
                                            className="w-full rounded-full h-full"
                                            source={{ uri: item.avatar }}
                                        />
                                    </View>
                                    <View style={{ width: 285 }} className=" flex-row justify-between h-full  " >
                                        <View>
                                            <Text className="text-2xl text-zinc-200 font-semibold " >{item.username}</Text>
                                            <Text numberOfLines={1} ellipsizeMode="tail" style={{ maxWidth: 220 }} className="text-zinc-500/90  font-medium " >nothing for now</Text>
                                        </View>
                                        <Text className="w-13 text-sm text-zinc-500  " >09:55 AM</Text>
                                    </View>

                                </View>
                            </TouchableOpacity>
                        )
                        }

                        ItemSeparatorComponent={() => (
                            <View className="h-[.5px] w-full bg-zinc-200/50" ></View>
                        )}

                />
} 
            </View>
            {
                visible && <UserEdit setVisible={setVisible} visible={visible} close={() => setVisible(false)} />
            }
            {/* {
                chat && <Chat/>
            } */}
        </>
    )
}