
import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import NewArrival from './NewArrival.js';
import Template from './Template';
import EverydayBanner from './EverydayBanner';
import Mens from './Mens';
import Womens from './Womens';
import Brands from './Brands';
import Limelight from './Limelight';
import Feedback from './Feedback';

const Home = ({ toggleWishlist, wishlist,searchQuery }) => {
  return (
    <HomeContainer>
      <Slider />
      <Container>
        <Template />
        <NewArrival searchQuery={searchQuery}/> 
        <EverydayBanner />
        <Mens searchQuery={searchQuery} />
        <Womens searchQuery={searchQuery} />
        <Brands />
        <Limelight toggleWishlist={toggleWishlist} wishlist={wishlist} searchQuery={searchQuery}/>
        <Feedback />
      </Container>
    </HomeContainer>
  );
};

const HomeContainer = styled.section`
`;

const Container = styled.div`
  max-width: 1200px; 
  margin: 0 auto;
  padding: 0 20px;
  

  @media (max-width: 1440px) {
    padding: 0 55px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

export default Home;
