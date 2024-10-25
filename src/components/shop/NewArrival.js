
import React, { useRef } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import leftarrow from "../../assets/arrow-left.svg";
import rightarrow from "../../assets/arrow-right.svg";
import products from './Products'; 

const NewArrival = () => {
    const productsSlider = useRef(null);

    const ProductPrevArrow = (props) => {
        const { onClick } = props;
        return (
            <ProductLeftArrow onClick={onClick} position="left">
                <ArrowIcon><img src={leftarrow} alt="Previous" /></ArrowIcon>
            </ProductLeftArrow>
        );
    };

    const ProductNextArrow = (props) => {
        const { onClick } = props;
        return (
            <ProductRightArrow onClick={onClick} position="right">
                <ArrowIcon><img src={rightarrow} alt="Next" /></ArrowIcon>
            </ProductRightArrow>
        );
    };

    const productSliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe: false,
        draggable: false,
        prevArrow: <ProductPrevArrow />,
        nextArrow: <ProductNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <NewArrivalContainer>
            <NewArrivalHeader>
                <Block />
                <NewArrivalTitle>New Arrival</NewArrivalTitle>
            </NewArrivalHeader>
            <ProductsSliderWrapper>
                <Slider ref={productsSlider} {...productSliderSettings}>
                    {products.map(item => (
                        
                            <ProductCard>
                                <StyledLink to={`/product/${item.id}`} key={item.id}>
                                    <ProductImageContainer>
                                        <ProductImage src={item.image} alt={item.title} />
                                    </ProductImageContainer>
                                </StyledLink>
                                <ProductInfo>
                                    <ProductTitle>{item.title}</ProductTitle>
                                </ProductInfo>
                            </ProductCard>                       
                    ))}
                </Slider>
            </ProductsSliderWrapper>
        </NewArrivalContainer>
    );
};

const ProductsSliderWrapper = styled.div`
  position: relative;

  .slick-dots {
      margin: 0px;
  }

  .slick-prev, .slick-next {
      display: none !important;
  }
`;

const NewArrivalContainer = styled.div`
  padding: 3% 0;
`;

const NewArrivalHeader = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Block = styled.span`
  background: #8A33FD;
  width: 5px;
  height: 3vh;
  border-radius: 5px;
`;

const NewArrivalTitle = styled.h1`
  letter-spacing: 3px;
  font-size: 1.5rem;
`;

const ProductLeftArrow = styled.div`
  position: absolute;
  top: 50%;
  ${props => props.position}: -40px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  transition: all 0.3s ease;

  &:hover {
      background-color: #f0f0f0;
  }

  @media (max-width: 480px) {
      top: 105%;
      left: 35%;
  }
`;

const ProductRightArrow = styled.div`
  position: absolute;
  top: 50%;
  ${props => props.position}: -40px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  transition: all 0.3s ease;

  &:hover {
      background-color: #f0f0f0;
  }

  @media (max-width: 480px) {
      top: 105%;
      right: 35%;
  }
`;

const ArrowIcon = styled.span`
  font-size: 20px;
  color: #333;
`;

const ProductCard = styled.div`
  position: relative;
`;

const ProductImageContainer = styled.div`
  overflow: hidden;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
//   <margin-left: 8px;>
  width: 82%;
  padding: 5%;

  @media (max-width: 540px) {
      height: 40vh;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  display: block;
`;

const ProductInfo = styled.div`
  padding: 10px 25px;
`;

const ProductTitle = styled.h3`
  margin: 0;
  font-size: 0.9em;
  color: #333;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default NewArrival;
