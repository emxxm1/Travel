import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Pressable } from 'react-native';
import { RF } from '../../../../shared/theme/responsive';
import CustomText from '../../../../shared/components/customText';
import { GST } from '../../../../shared/theme/globalStyles';
import { heart, marker, rating } from '../../../../assets/icons';
import { COLORS } from '../../../../shared/theme/colors';
import { BlurView } from '@react-native-community/blur';

interface TourCardProps {
    item: TourItem;
    onPressFavorite: () => void;
}
const TourCard = ({ item, onPressFavorite }: TourCardProps) => {
    return (
        <View key={item?.id} style={styles.container}>
            <ImageBackground imageStyle={styles.imageRadius} resizeMode="cover" style={styles.imageStyle} source={item?.image}>
                <Pressable onPress={onPressFavorite} hitSlop={GST.HITSLOP} style={styles.heartView}>
                    <Image tintColor={item?.selection ? COLORS.BLACKGRAY : COLORS.WHITE} source={heart} style={styles.heartIcon} />
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
        <BlurView
            style={styles.blurView}
            blurType="dark"
            blurAmount={7}
            blurRadius={1}
            autoUpdate
            overlayColor={COLORS.TRANSPARENT_ICON}
        >
            <View style={styles.footer}>
                <CustomText style={styles.title} size={16} color={COLORS.WHITE}>
                    {item?.title}
                </CustomText>
                <View style={[GST.FLEX_ROW, styles.descriptionView]}>
                    <View style={GST.FLEX_ROW}>
                        <Image resizeMode='contain' style={styles.icons} source={marker} />
                        <CustomText size={13} color={COLORS.CARD_TEXT}>
                            {item?.location}
                        </CustomText>
                    </View>
                    <View style={GST.FLEX_ROW}>
                        <Image resizeMode='contain' style={styles.icons} source={rating} />
                        <CustomText size={13} color={COLORS.CARD_TEXT}>
                            {item?.rating}
                        </CustomText>
                    </View>
                </View>
            </View>
        </BlurView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: RF(200),
        height: RF(300),
        marginRight: RF(20),
        position: 'relative',
        shadowColor: COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.21,
        shadowRadius: 8.19,
        elevation: 11,
    },
    imageStyle: {
        width: '100%',
        height: '100%',
    },
    icons: {
        width: RF(10),
        height: RF(16),
        marginRight: RF(5)
    },
    descriptionView: {
        justifyContent: 'space-between'
    },
    footer: {},
    blurView: {
        position: 'absolute',
        marginHorizontal: RF(15),
        padding: RF(7),
        borderRadius: RF(10),
        bottom: 20,
        width: '90%',
        alignSelf: 'center'
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
    },
    imageRadius: {
        borderRadius: RF(20)
    },
    title: {
        paddingBottom: RF(5)
    }
});

export default TourCard;
