import React from 'react';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import Deals from '../../features/Deals/DealsContainer';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';
import Brands from '../../features/Brands/BrandsContainer';
import Promoted from '../../features/Promoted/Promoted';
import ChatBox from '../../features/ChatBox/ChatBox';
import Gallery from '../../features/Gallery/Gallery';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <Deals />
    <NewFurniture />
    <Gallery />
    <Feedback />
    <Brands />
    <ChatBox />
  </div>
);

export default Homepage;
