import { Text, View } from "react-native"
import { HamburgerMenu } from "../../components/shared/HamburgerMenu"
import Icon from "@react-native-vector-icons/ionicons";


export const Tab1Screen = () => {
  return (
    <View>
      <HamburgerMenu />
        <Text>
            Tab1Screen
        </Text>
        <Icon name="rocket-outline" size={60} color="#4F8EF7" />
    </View>
  )
}
