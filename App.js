import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import Page
import FormPage from './src/form.js'
import CheckPage from './src/check.js'
// As Tab
const Tab = createBottomTabNavigator();
export default function App() {
  return (
     <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    if (route.name === 'Feed') {
      iconName = focused
        ? 'paw-sharp'
        : 'paw-outline';
    } else if (route.name === 'Check') {
      iconName = focused ? 'eye-sharp' : 'eye-outline';
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
})}
>
        <Tab.Screen name="Feed" component={FormPage} />
        <Tab.Screen name="Check" component={CheckPage} logo />
      </Tab.Navigator>
    </NavigationContainer>

  );
}
