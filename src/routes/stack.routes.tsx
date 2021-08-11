import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screen/Home';
import { CarDetails } from '../screen/CarDetails';
import { Scheduling } from '../screen/Scheduling';
import { SchedulingComplete } from '../screen/SchedulingComplete';
import { SchedulingDetails } from '../screen/SchedulingDetails';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="CarDetails" component={CarDetails} options={{ headerShown: false }} />
      <Stack.Screen name="Scheduling" component={Scheduling} options={{ headerShown: false }} />
      <Stack.Screen name="SchedulingComplete" component={SchedulingComplete} options={{ headerShown: false }} />
      <Stack.Screen name="SchedulingDetails" component={SchedulingDetails} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
