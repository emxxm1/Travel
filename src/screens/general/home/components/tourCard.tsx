import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Pressable } from 'react-native';
import { RF } from '../../../../shared/theme/responsive';
import CustomText from '../../../../shared/components/customText';
import { GST } from '../../../../shared/theme/globalStyles';
import { heart, marker, rating } from '../../../../assets/icons';
import { COLORS } from '../../../../shared/theme/colors';

interface TourCardProps {
    item: TourItem;
}
const TourCard = ({ item }: TourCardProps) => {
    return (
        <View key={item?.id} style={styles.container}>
            <ImageBackground resizeMode="cover" style={styles.imageStyle} source={item?.image}>
                <Pressable style={styles.heartView}>
                    <Image source={heart} style={styles.heartIcon} />
                </Pressable>
                <Footer item={item} />
            </ImageBackground>
        </View>
    );
};

interface FooterProps {
    item: TourItem;
}
const Footer = ({ item }: FooterProps) => {
    return (
        <View style={styles.footer}>
            <CustomText size={16} color={COLORS.WHITE}>
                {item?.title}
            </CustomText>
            <View style={GST.FLEX_ROW}>
                <Image resizeMode='contain' style={styles.icons} source={marker} />
                <CustomText size={14} color={COLORS.CARD_TEXT}>
                    {item?.location}
                </CustomText>
                <Image resizeMode='contain' style={styles.icons} source={rating} />
                <CustomText size={14} color={COLORS.CARD_TEXT}>
                    {item?.rating}
                </CustomText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: RF(220),
        height: RF(300),
        borderRadius: RF(20),
        marginRight: RF(20),
        position: 'relative'
    },
    imageStyle: {
        width: '100%',
        height: '100%',
    },
    icons: {
        width: RF(10),
        height: RF(16)
    },
    footer: {
        backgroundColor: 'red',
        marginHorizontal: RF(15),
        padding: RF(10),
        borderRadius: RF(20),
        position: 'absolute',
        bottom: 20

    },
    heartIcon: {
        width: RF(22),
        height: RF(20)
    },
    heartView: {
        backgroundColor: COLORS.TRANSPARENT_ICON,
        width: RF(40),
        height: RF(40),
        borderRadius: RF(20),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginRight: RF(10),
        marginTop: RF(10)
    }
});

export default TourCard;
