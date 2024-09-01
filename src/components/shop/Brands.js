
import React from 'react'
import styled from 'styled-components'
import nike from "../../assets/nike.jpg"
import handm from "../../assets/H&M.jpg"
import levis from "../../assets/levis.jpg"
import polo from "../../assets/USPA.jpg"
import puma from "../../assets/puma.jpg"

const Brands = () => {
  const brands = [nike, handm, levis, polo, puma];
  
  return (
    <StyledBrandsContainer>
      <StyledBrandTitle>Top Brand Deals</StyledBrandTitle>
      <StyledBrandDiscount>Up To <StyledYellow>60%</StyledYellow> off on brands</StyledBrandDiscount>
      <StyledBrandBox>
        {brands.map((brand, index) => (
          <StyledBrandBoxItem key={index}>
            <StyledBrandImage src={brand} />
          </StyledBrandBoxItem>
        ))}
      </StyledBrandBox>
    </StyledBrandsContainer>
  )
}

const StyledBrandsContainer = styled.div`
  background: #323232;
  padding: 3%;
  border-radius: 15px;
  margin: 50px auto 0;
`;

const StyledBrandTitle = styled.h1`
  color: #fff;
  font-size: 45px;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 680px) {
    font-size: 23px;
  }
`;

const StyledBrandDiscount = styled.p`
  color: #fff;
  font-size: 23px;
  text-align: center;
  margin-bottom: 4rem;

  @media all and (max-width: 540px) {
    margin-bottom: 2rem;
    font-size: 18px;
  }
`;

const StyledYellow = styled.small`
  color: yellow;
`;

const StyledBrandBox = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
`;

const StyledBrandBoxItem = styled.li``;

const StyledBrandImage = styled.img`
  height: 7vh;
  border-radius: 6px;

  @media (max-width: 980px) {
    height: 5vh;
  }

  @media (max-width: 640px) {
    height: 4vh;
  }

  @media (max-width: 480px) {
    height: 3vh;
  }
`;

export default Brands
