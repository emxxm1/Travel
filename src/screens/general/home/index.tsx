import React from 'react';
import { ScrollView } from 'react-native';
import Wrapper from '../../../shared/components/wrapper';
import HomeHeader from './components/homeHeader';
import HomeSearch from './components/homeSearch';
import HomeFilters from './components/homeFilters';
import Tours from './components/tours';

const Home = () => {
    return (
        <Wrapper>
            <ScrollView>
                <HomeHeader />
                <HomeSearch />
                <HomeFilters />
                <Tours />
            </ScrollView>
        </Wrapper>
    );
};


export default Home;
