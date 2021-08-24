import React from 'react';
import {
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from './ProductItems';

function Products(heading, data) {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((item, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={item.img} alt={item.alt} />
              <ProductInfo>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductDesc>{item.desc}</ProductDesc>
                <ProductPrice>{item.price}</ProductPrice>
                <ProductButton>{item.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
}

export default Products;
