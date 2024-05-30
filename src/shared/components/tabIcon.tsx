import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { RF } from '../theme/responsive';
import { COLORS } from '../theme/colors';

interface TabIconProps {
    icon: any;
    focused: boolean;
}
const TabIcon = ({ icon, focused }: TabIconProps) => {
    return (
        <Image
            source={icon}
            style={styles.icon}
            tintColor={focused ? COLORS.BLACK : COLORS.GRAY}
            resizeMode={'contain'}
        />
    );
};

const styles = StyleSheet.create({
    icon: {
        width: RF(20),
        height: RF(20),
    },
});

export default TabIcon;
