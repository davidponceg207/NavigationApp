import 'react-native-gesture-handler';


import { NavigationContainer } from "@react-navigation/native"
import { Text, View } from "react-native"
import { StackNavigator } from './presentation/routes/StackNavigator';


export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}
