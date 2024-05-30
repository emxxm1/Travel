import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ROUTES } from '../../../shared/utils/routes';
import Favorite from '../../../screens/general/favorite';

const Stack = createStackNavigator();
const FavoriteStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name={ROUTES.FAVORITE} component={Favorite} />
        </Stack.Navigator>
    );
};

export default FavoriteStack;
