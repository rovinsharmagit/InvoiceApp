/// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screen/HomeScreen";
import CreateBill from "./Screen/CreateBill";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreateBill" component={CreateBill}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );



}