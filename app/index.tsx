import Chat from "@/components/Chat";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";



export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-zinc-950" >
      {/* <Users/> */}
      <Chat/>
    </SafeAreaView>
  );
}
