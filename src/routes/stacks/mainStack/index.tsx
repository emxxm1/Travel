import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../../../shared/utils/routes';
import BottomTabs from '../../tabs/bottomTabs';

const Stack = createStackNavigator();
const MainStack = () => {
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                translucent
                backgroundColor="transparent"
            />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={ROUTES.BOTTOMTABS} component={BottomTabs} />
            </Stack.Navigator>
        </>
    );
};

export default MainStack;
