import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ROUTES } from '../../../shared/utils/routes';
import Time from '../../../screens/general/time';

const Stack = createStackNavigator();
const TimeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name={ROUTES.TIME} component={Time} />
        </Stack.Navigator>
    );
};

export default TimeStack;
