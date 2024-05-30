import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import TourCard from './tourCard';
import { RF } from '../../../../shared/theme/responsive';
import { tourData } from '../../../../shared/utils/data';

const Tours = () => {
    const [tours, setTours] = useState<any>(tourData)
    return (
        <View style={styles.container}>
            <FlatList
                data={tours}
                showsHorizontalScrollIndicator={false}
                horizontal
                style={styles.flatlist}
                keyExtractor={(item: any, index: number) => `key-${index}`}
                renderItem={({ item }) => <TourCard item={item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatlist: {
        paddingTop: RF(20),
        overflow: 'visible',
        paddingLeft: RF(15)
    }
});

export default Tours;
