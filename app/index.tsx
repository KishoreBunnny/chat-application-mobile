import { Redirect } from "expo-router";
import "../global.css";

export default function Index(){
    const isAuthenticated :boolean =false;
   
    return(
       <Redirect href={ "/(auth)/login" }/>
    )
}