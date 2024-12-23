import { Text, View } from "react-native";
import {Link} from 'expo-router'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello World</Text>
      <View style={{ flexDirection: "row",justifyContent: "space-between",width:"100%",padding:30,position: "absolute",bottom: 0 }}>
      <Link href="/home">Home</Link>
      <Link href="/delivery">Delivery</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/credentials">Credentials</Link>
      </View>
      
    </View>
  );
}

