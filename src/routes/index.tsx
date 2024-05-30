import React from 'react';
import { StyleSheet } from 'react-native';
import MainStack from './stacks/mainStack';

const Routes = () => {
    return (
        <MainStack />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Routes;
