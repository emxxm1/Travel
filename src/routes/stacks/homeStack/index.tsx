import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ROUTES } from '../../../shared/utils/routes';
import Home from '../../../screens/general/home';

const Stack = createStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name={ROUTES.HOME} component={Home} />
        </Stack.Navigator>
    );
};

export default HomeStack;
