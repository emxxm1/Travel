import React from 'react';
import { Text, TextProps, View } from 'react-native';
import { COLORS } from '../theme/colors';
import { RF } from '../theme/responsive';
import { GST } from '../theme/globalStyles';

const { BLACK } = COLORS;

interface Props extends TextProps {
    center: boolean;
    bold: boolean;
    size: number;
    capital: boolean;
    color: any;
    onPress: () => void;
    semiBold: boolean;
    medium: boolean;
    contain: boolean;
    italic: boolean;
    nestedTxt: string;
    nestedTxtFamily: string;
    nestedTxtSize: number;
    nestedTxtColor: string;
    onNestedTxtPress: () => void;
    oregano?: boolean;
}

const CustomText = (props: Partial<Props>) => {
    const {
        center,
        size = 12,
        color = BLACK,
        style,
        numberOfLines = 0,
        capital = false,
        onPress,
        medium,
        contain,
        bold,
        semiBold,
        italic,
        nestedTxt,
        nestedTxtSize = 12,
        nestedTxtColor = BLACK,
        onNestedTxtPress,
        oregano,
    } = props;
    return (
        <View style={contain && GST.FLEX}>
            <Text
                onPress={onPress}
                allowFontScaling={false}
                numberOfLines={numberOfLines}
                style={[
                    {
                        fontSize: RF(size),
                        color,
                        textTransform: capital ? 'uppercase' : 'none',
                        textAlign: center ? 'center' : 'auto',
                    },
                    style,
                ]}>
                {props.children}
                {nestedTxt && (
                    <Text
                        allowFontScaling={false}
                        style={{
                            fontSize: RF(nestedTxtSize),
                            color: nestedTxtColor,
                        }}
                        onPress={onNestedTxtPress}>
                        {nestedTxt}
                    </Text>
                )}
            </Text>
        </View>
    );
};
export default CustomText;
