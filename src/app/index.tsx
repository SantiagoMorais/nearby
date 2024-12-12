import { View, Text } from "react-native"
import {
    useFonts,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold
} from "@expo-google-fonts/rubik"

export default function Index () {
    const [fontsLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_600SemiBold,
        Rubik_700Bold
    })

    if(!fontsLoaded) return;

    return(
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text style={{fontSize: 22}}>Hello React Native</Text>
    </View>
)}