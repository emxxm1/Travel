import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import CustomText from '../../../../shared/components/customText';
import { RF } from '../../../../shared/theme/responsive';
import { COLORS } from '../../../../shared/theme/colors';
import { user, wave } from '../../../../assets/icons';
import { GST } from '../../../../shared/theme/globalStyles';

const HomeHeader = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={GST.FLEX_ROW}>
                    <CustomText style={styles.nameStyle} color={COLORS.BLACKGRAY} size={20}>{'Hi, David'}</CustomText>
                    <Image resizeMode='contain' source={wave} style={styles.wavePic} />
                </View>
                <CustomText color={COLORS.LIGHTGRAY} size={16}>{'Explore the world'}</CustomText>
            </View>
            <View style={styles.profilePicView}>
                <Image resizeMode='contain' source={user} style={styles.profilePic} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: RF(20),
        paddingHorizontal: RF(15),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profilePicView: {
        width: RF(40),
        height: RF(40),
        alignSelf: 'flex-start'
    },
    profilePic: {
        width: '100%',
        height: '100%',
        borderRadius: RF(25),
    },
    nameStyle: {
        fontWeight: '600'
    },
    wavePic: {
        width: RF(25),
        height: RF(25),
        marginLeft: RF(5),
        marginBottom: RF(5)
    }
});

export default HomeHeader;
