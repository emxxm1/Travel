import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import Wrapper from '../../../shared/components/wrapper';

const Favorite = () => {
    return (
        <Wrapper noPaddingBottom>
            <View style={styles.container}>
                <Text>Favorite Hello</Text>
            </View>
        </Wrapper>
    );
};

export default Favorite;
