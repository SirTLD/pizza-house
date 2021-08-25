import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureItems';

function Feature() {
  return (
    <FeatureContainer>
      <h1>Pizza of the month </h1>
      <p>Spicy Pineapple Vegan Toast Pizza</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
}

export default Feature;
