import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ROUTES } from '../../../shared/utils/routes';
import HomeStack from '../../stacks/homeStack';
import { COLORS } from '../../../shared/theme/colors';
import { RF } from '../../../shared/theme/responsive';
import { ANDROID } from '../../../shared/utils/constants';
import TimeStack from '../../stacks/timeStack';
import FavoriteStack from '../../stacks/favoriteStack';
import ProfileStack from '../../stacks/profileStack';
import TabIcon from '../../../shared/components/tabIcon';
import { favoriteIcon, homeIcon, profileIcon, timeIcon } from '../../../assets/icons';


const Tab = createBottomTabNavigator();
const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route: { name } }) => ({
                tabBarStyle: styles.tabBarStyle,
                headerShown: false,
                tabBarActiveTintColor: COLORS.LIGHT_BLUE,
                tabBarHideOnKeyboard: true,
                tabBarLabelStyle: styles.tabBarLabelStyle,
                tabBarIconStyle: styles.tabBarIconStyle,
                tabBarShowLabel: false
            })}>
            <>
                <Tab.Screen name={ROUTES.HOMESTACK} component={HomeStack} options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={homeIcon} focused={focused} />
                    ),
                }}
                />
                <Tab.Screen name={ROUTES.TIMESTACK} component={TimeStack} options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={timeIcon} focused={focused} />
                    ),
                }} />
                <Tab.Screen name={ROUTES.FAVORITESTACK} component={FavoriteStack} options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={favoriteIcon} focused={focused} />
                    ),
                }} />
                <Tab.Screen name={ROUTES.PROFILESTACK} component={ProfileStack} options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={profileIcon} focused={focused} />
                    ),
                }} />
            </>
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBarStyle: {},
    tabBarLabelStyle: {
        marginBottom: ANDROID ? RF(5) : RF(12),
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarIconStyle: {
        width: RF(20),
        maxHeight: RF(30),
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default BottomTabs;
