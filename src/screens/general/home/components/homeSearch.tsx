import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Image } from 'react-native';
import { RF } from '../../../../shared/theme/responsive';
import { divider, filter } from '../../../../assets/icons';
import { GST } from '../../../../shared/theme/globalStyles';
import { COLORS } from '../../../../shared/theme/colors';

const HomeSearch = () => {
    const [search, setSearch] = useState<string>('');

    const onType = (searchValue: string) => {
        setSearch(searchValue);
    }

    return (
        <View style={styles.container}>
            <View style={[GST.FLEX_ROW, styles.input]}>
                <TextInput returnKeyType='search' value={search} onChangeText={onType} placeholder={'Search Places'} placeholderTextColor={COLORS.LIGHTGRAY} style={styles.textInput} />
                <View style={[GST.FLEX_ROW, styles.iconView]}>
                    <Image resizeMode='contain' source={divider} style={styles.divider} />
                    <Image resizeMode='contain' source={filter} style={styles.filterPic} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: RF(10),
        paddingHorizontal: RF(15)
    },
    textInput: {
        flex: 0.8,
        paddingVertical: RF(12),
    },
    filterPic: {
        width: RF(24),
        height: RF(21),
    },
    divider: {
        width: RF(2),
        height: RF(20),
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: RF(10),
        borderRadius: RF(12),
        borderColor: COLORS.BORDERCOLOR
    },
    iconView: {
        paddingRight: RF(10),
        flex: 0.2,
        justifyContent: 'space-between'
    }
});

export default HomeSearch;
