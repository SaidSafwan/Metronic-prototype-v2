import React from 'react';
import FeatureSection from './FeatureSection';
import FilterSection from './FilterSection';
import './index.css'; 

const HeroContainer = () => {
    return (
        <div className="app-hero-container">
            <FeatureSection />
            <FilterSection />
        </div>
    );
};

export default HeroContainer;
