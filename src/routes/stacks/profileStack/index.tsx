import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ROUTES } from '../../../shared/utils/routes';
import Profile from '../../../screens/general/profile';

const Stack = createStackNavigator();
const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
        </Stack.Navigator>
    );
};

export default ProfileStack;
