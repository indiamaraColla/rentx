import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screen/Home';
import { CarDetails } from '../screen/CarDetails';
import { Scheduling } from '../screen/Scheduling';
import { SchedulingComplete } from '../screen/SchedulingComplete';
import { SchedulingDetails } from '../screen/SchedulingDetails';

const { Navigator, Screen } = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen name="CarDetails" component={CarDetails} options={{ headerShown: false }} />
      <Screen name="Scheduling" component={Scheduling} options={{ headerShown: false }} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} options={{ headerShown: false }} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} options={{ headerShown: false }} />
    </Navigator>
  );
}
