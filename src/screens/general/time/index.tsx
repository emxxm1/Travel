import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import Wrapper from '../../../shared/components/wrapper';

const Time = () => {
    return (
        <Wrapper noPaddingBottom>
            <View style={styles.container}>
                <Text>Time Hello</Text>
            </View>
        </Wrapper>
    );
};

export default Time;
