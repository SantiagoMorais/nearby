import { View, Text } from "react-native"
import {
    useFonts,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold
} from "@expo-google-fonts/rubik"
import { Loading } from "@/components/loading"
import { Welcome } from "@/components/welcome";
import { Steps } from "@/components/steps";

export default function Index () {
    const [fontsLoaded] = useFonts({
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_600SemiBold,
        Rubik_700Bold
    })

    if(!fontsLoaded) return <Loading />;

    return(
    <View style={{flex: 1, padding: 40, gap: 40}}>
        <Welcome />
        <Steps />
    </View>
)}