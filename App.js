import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cau1 } from './Cau1';
import { Cau2 } from './Cau2';
import { Cau3 } from './Cau3';
import { Cau4 } from './Cau4';
import { Cau5 } from './Cau5';
import { Cau6 } from './Cau6';
import { Cau7 } from './Cau7';

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        {/* <Stack.Screen name="Cau 1" component={Cau1} /> */}
        {/* <Stack.Screen name="Cau 2" component={Cau2} /> */}
        {/* <Stack.Screen name="Cau 3" component={Cau3} /> */}
        {/* <Stack.Screen name="Cau 4" component={Cau4} /> */}
        {/* <Stack.Screen name="Cau 5" component={Cau5} /> */}
        {/* <Stack.Screen name="Cau 6" component={Cau6} /> */}
        <Stack.Screen name="Cau 7" component={Cau7} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}