import { Pressable, View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { PrimaryButton } from "../../components/shared/PrimaryButton"
import { DrawerActions, NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../../routes/StackNavigator";
import { useEffect } from "react";
import { Text } from "react-native-gesture-handler";


export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {

    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.dispatch( DrawerActions.toggleDrawer )}>
          <Text>Menu</Text>
        </Pressable>
      )
    });
  
  }, [])
  

  return (
    <View style={globalStyles.container}>

      <PrimaryButton onPress={() => navigation.navigate('Products')} label='Products'/>
      <PrimaryButton onPress={() => navigation.navigate('Settings')} label='Settings'/>

    </View>
  )
}
