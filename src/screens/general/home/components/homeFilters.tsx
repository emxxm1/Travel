import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Pressable } from 'react-native';
import { RF } from '../../../../shared/theme/responsive';
import CustomText from '../../../../shared/components/customText';
import { GST } from '../../../../shared/theme/globalStyles';
import { COLORS } from '../../../../shared/theme/colors';
import { filterData } from '../../../../shared/utils/data';

const HomeFilters = () => {
    const [filters, setFilters] = useState<any>(filterData);

    const onPressFilterItem = (item: any) => {
        setFilters(filters?.map((elem: any) => {
            if (item.id === elem.id) {
                return {
                    ...elem,
                    selection: true
                }
            } else {
                return {
                    ...elem,
                    selection: false
                }
            }
        }))
    }
    return (
        <View style={styles.container}>
            <View style={[GST.FLEX_ROW, styles.filterHeaderView]}>
                <CustomText style={styles.popularText} size={16}>{'Popular places'}</CustomText>
                <CustomText size={14} color={COLORS.LIGHTGRAY}>{'View all'}</CustomText>
            </View>
            <FlatList
                data={filters}
                showsHorizontalScrollIndicator={false}
                horizontal
                style={styles.flatlist}
                keyExtractor={(item: any, index: number) => `key-${index}`}
                renderItem={({ item }) => <FilterItem item={item} onPress={() => onPressFilterItem(item)} />}
            />
        </View>
    );
};

interface FilterItemProps {
    item: FilterItem;
    onPress: () => void;
}
const FilterItem = ({ item, onPress }: FilterItemProps) => {
    return (
        <Pressable key={item.id} style={[styles.itemViewStyle, { backgroundColor: item?.selection ? COLORS.BLACK : COLORS.FILTER_BG }]} onPress={onPress}>
            <CustomText style={{ color: item?.selection ? COLORS.WHITE : COLORS.LIGHTGRAY }} size={13}>{item?.title}</CustomText>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: RF(10),
        paddingHorizontal: RF(15),
    },
    filterHeaderView: {
        justifyContent: 'space-between'
    },
    popularText: {
        fontWeight: '600'
    },
    itemViewStyle: {
        padding: RF(12),
        borderRadius: RF(15),
        marginRight: RF(10)
    },
    flatlist: {
        paddingTop: RF(20),
        overflow: 'visible'
    }
});

export default HomeFilters;
