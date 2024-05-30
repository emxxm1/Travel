import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import Wrapper from '../../../shared/components/wrapper';

const Profile = () => {
    return (
        <Wrapper noPaddingBottom>
            <View style={styles.container}>
                <Text>Profile Hello</Text>
            </View>
        </Wrapper>
    );
};


export default Profile;
