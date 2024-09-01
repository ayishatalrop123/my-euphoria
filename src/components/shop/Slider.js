
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { ReactComponent as LeftArrow } from '../../assets/left-arrow-bold.svg';
import { ReactComponent as RightArrow } from '../../assets/right-arrow-bold.svg';
import SliderData from './SliderData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderBanner = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <SliderContainer>
      <SliderWrapper>
        <Slider ref={sliderRef} {...sliderSettings}>
          {SliderData.map((item, index) => (
            <Slide key={index} {...item} />
          ))}
        </Slider>
        <Arrow onClick={() => sliderRef.current.slickPrev()} position="left">
          <LeftArrow />
        </Arrow>
        <Arrow onClick={() => sliderRef.current.slickNext()} position="right">
          <RightArrow />
        </Arrow>
        <PaginationBar>
          <BarIndicator style={{ width: `${((currentSlide + 1) / SliderData.length) * 100}%` }} />
        </PaginationBar>
      </SliderWrapper>
    </SliderContainer>
  );
};

const Slide = ({ category, title, description, image }) => (
  <SlideContainer>
    <SlideContent>
      <Category>{category}</Category>
      <Title className='poppins-bold'>{title}</Title>
      <Description>{description}</Description>
      <ShopButton>Shop Now</ShopButton>
    </SlideContent>
    <Image src={image} alt="banner" />
  </SlideContainer>
);

const SliderContainer = styled.div``;

const SliderWrapper = styled.div`
  position: relative;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  ${(props) => (props.position === 'left' ? 'left: 25px;' : 'right: 25px;')}
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;

  svg {
    width: 50px;
    height: 35px;
    fill: white;
  }

  @media (max-width: 640px) {
    svg {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 480px) {
    ${(props) => (props.position === 'left' ? 'left: 10px;' : 'right: 10px;')}
    top: 40%;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const SlideContainer = styled.div`
  height: 100vh;
  display: flex !important;

  @media (max-width: 768px) {
    height: 90vh;
  }
  @media (max-width: 640px) {
    height: 55vh;
  }
  @media (max-width: 540px) {
    height: 45vh;
  }
  @media (max-width: 480px) {
    height: 30vh;
  }
`;

const SlideContent = styled.div`
  position: absolute;
  padding: 0px 150px;
  top: 20%;
  width: 3%;

  @media (max-width: 768px) {
    padding: 20px 100px;
    top: 10%;
  }
  @media (max-width: 540px) {
    top: 15%;
  }
  @media (max-width: 480px) {
    padding: 0 60px;
    top: 5%;
  }
`;

const Category = styled.p`
  margin: 20px 0;
  font-size: 1.2rem;
  color: #fff;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 44px;
  font-weight: bolder;
  color: #fff;
  line-height : 3.5rem;

  @media (max-width: 640px) {
    margin: 0;
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  margin: 40px 0;
  font-size: 1.2rem;
  color: #fff;
  font-weight: bold;
`;

const ShopButton = styled.button`
  padding: 15px 55px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: lightgrey;
  }

  @media (max-width: 640px) {
    padding: 5px 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const PaginationBar = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 5%;
  height: 5px;
  background: rgba(255, 255, 255, 0.5);
`;

const BarIndicator = styled.div`
  height: 100%;
  background: #fff;
`;

export default SliderBanner;
