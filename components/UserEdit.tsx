import { Image, Modal, Pressable, Text, TextInput, View } from "react-native";

type UserEditProps = {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    close: () => void;
};

export default function UserEdit({ visible, close, setVisible }: UserEditProps) {
    return (
        <Modal visible={visible} animationType="slide" transparent={true} onRequestClose={close} >
            <View className="w-full p-5  h-full bg-gray-950">
                <View className="flex-row gap-5 items-center " >
                    <Pressable onPress={() => setVisible(false)} >
                        <Text className="text-white bg-gray-800 p-2 rounded-lg text-2xl font-bold  " >X</Text>
                    </Pressable>
                    <Text className="text-zinc-200 text-3xl font-bold " >Profile</Text>
                </View>

                <View className="h-full w-full py-20 items-center  " >
                    <Pressable onPress={() => { }}  >
                        <View className="bg-zinc-500 rounded-full w-[100px] h-[100px]  ">
                            <Image
                                className="w-full rounded-full h-full"
                                source={{ uri: "https://avatar.iran.liara.run/public/12" }}
                            />
                        </View>
                    </Pressable>
                    <View className="mt-10" >
                        <Text className="text-zinc-300 mb-1 text-xl font-bold " >User Name:</Text>
                        <TextInput placeholder="Enter Name"  placeholderTextColor="#a1a1aa" className="border min-w-[70%]  text-zinc-300 border-zinc-100 p-2 py-3 rounded-xl" />
                    </View>

                     <View className="mt-5" ><Pressable onPress={()=>setVisible(false)} className="px-3 py-2 rounded-lg w-full bg-zinc-200 " ><Text className="text-xl font-semibold " >Save</Text></Pressable></View>

                    <Text className="text-zinc-500 mt-3" >This is your username, it may be visible for others</Text>

                </View>
            </View>
        </Modal>
    )
}