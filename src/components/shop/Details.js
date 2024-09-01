
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import color1 from "../../assets/Ellipse 7.png";
import color2 from "../../assets/Ellipse 6 (1).png";
import color3 from "../../assets/Ellipse 6 (2).png";
import color4 from "../../assets/Ellipse 6.png";
import star from "../../assets/Frame 260.png";
import { MdOutlineComment, MdOutlinePayment } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosGitCompare } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoShirtOutline } from "react-icons/io5";

const ProductDetail = ({ toggleWishlist, toggleCart }) => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const [activeSection, setActiveSection] = useState("description");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleToggleCart = () => {
    if (product) {
      toggleCart(product);
      setAddedToCart(!addedToCart);
    }
  };

  const handleToggleWishlist = () => {
    if (product) {
      toggleWishlist(product);
      setAddedToWishlist(!addedToWishlist);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <MainContainer>
      <ProductSection>
        <ImgContainer>
          <ProductImage src={product.image} alt={product.title} />
        </ImgContainer>
        <ProductInfo>
          <Title>{product.title}</Title>
          <Review>
            <Rating><img src={star} alt="star" />{product.rating.rate}</Rating>
            <Comment><MdOutlineComment />{product.rating.count}</Comment>
          </Review>
          <SizeBox>
            <SelectSize>Select Size</SelectSize>
            <SizeGuide>Size Guide <FaArrowRight /></SizeGuide>
          </SizeBox>
          <Size>
            <SizeItem>XS</SizeItem>
            <SizeItem>S</SizeItem>
            <SizeItem>M</SizeItem>
            <SizeItem>L</SizeItem>
            <SizeItem>XL</SizeItem>
          </Size>
          <ColorBox>
            <SelectColor>Colours Available</SelectColor>
            <Colors>
              <ColorItem><img src={color1} alt="color1" /></ColorItem>
              <ColorItem><img src={color2} alt="color2" /></ColorItem>
              <ColorItem><img src={color3} alt="color3" /></ColorItem>
              <ColorItem><img src={color4} alt="color4" /></ColorItem>
            </Colors>
          </ColorBox>
          <Buttons>
            <Button onClick={handleToggleCart}>
              {addedToCart ? 'REMOVE FROM BAG' : 'ADD TO BAG'}
            </Button>
            <Button onClick={handleToggleWishlist}>
              {addedToWishlist ? 'REMOVE FROM WISHLIST' : 'ADD TO WISHLIST'}
            </Button>
            <Price>${product.price}</Price>
          </Buttons>
          <ServiceBox>
            <ServiceItem><IconBox><MdOutlinePayment /></IconBox>Secure Payment</ServiceItem>
            <ServiceItem><IconBox><IoShirtOutline /></IconBox>Size & Fit</ServiceItem>
            <ServiceItem><IconBox><CiDeliveryTruck /></IconBox>Free Shipping</ServiceItem>
            <ServiceItem><IconBox><IoIosGitCompare /></IconBox>FreeShipping & Returns</ServiceItem>
          </ServiceBox>
        </ProductInfo>
      </ProductSection>
      <ProductDescription>
        <Block />
        <ProductTitle>Product Description</ProductTitle>
      </ProductDescription>
      <BottomDetails>
        <LeftSection>
          <Tabs>
            <TabButton
              className={activeSection === "description" ? "active" : ""}
              onClick={() => setActiveSection("description")}
            >
              Description
            </TabButton>
            <TabButton
              className={activeSection === "review" ? "active" : ""}
              onClick={() => setActiveSection("review")}
            >
              User Comments
            </TabButton>
            <TabButton
              className={activeSection === "question" ? "active" : ""}
              onClick={() => setActiveSection("question")}
            >
              Question & Answer
            </TabButton>
          </Tabs>
          <TabContent>
            {activeSection === "description" && (
              <ContentParagraph>{product.description}</ContentParagraph>
            )}
            {activeSection === "review" && (
              <ContentParagraph>100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.</ContentParagraph>
            )}
            {activeSection === "question" && (
              <ContentParagraph>how can we trust? <br /> check on review</ContentParagraph>
            )}
          </TabContent>
        </LeftSection>
        <RightSection>
          <Category>{product.category}</Category>
        </RightSection>
      </BottomDetails>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductSection = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  width: 50%;
  padding: 5%;

  @media (max-width: 980px) {
    width: 37%;
  }

  @media (max-width: 640px) {
    margin: 0 auto;
  }
`;

const ProductImage = styled.img`
  display: block;
  width: 100%;
`;

const ProductInfo = styled.div`
  width: 50%;
  padding-left: 20px;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 25px;
`;

const Review = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-bottom: 30px;
`;

const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Comment = styled.span`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SizeBox = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 15px;
`;

const SelectSize = styled.span`
  font-weight: bold;
`;

const SizeGuide = styled.span`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  color: #807D7E;
`;

const Size = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const SizeItem = styled.span`
  border: 1px solid #807D7E;
  padding: 5px 10px;
  margin-right: 10px;
  color: #807D7E;
  cursor: pointer;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const ColorBox = styled.div`
  margin-bottom: 20px;
`;

const SelectColor = styled.div`
  font-weight: bold;
  margin-bottom: 15px;
`;

const Colors = styled.div`
  display: flex;
`;

const ColorItem = styled.span`
  margin-right: 10px;
  cursor: pointer;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background-color: #8A33FD;
  display: flex;
  align-items: center;
  color: white;
  padding: 10px 20px;
  border: none;
  gap: 20px;
  cursor: pointer;
  border-radius: 10px;
  margin-right: 25px;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 480px) {
    margin-right: 5px;
    font-size: 10px;
  }
`;

const Price = styled.span`
  padding: 5px 20px;
  border: 1px solid #000;
  cursor: pointer;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;

  @media (max-width: 480px) {
    padding: 5px 10px;
    font-size: 10px;
  }
`;

const ServiceBox = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ServiceItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  font-weight: bold;
  color: #807D7E;
`;

const IconBox = styled.span`
  font-size: 25px;
`;

const ProductDescription = styled.div`
  margin-top: 50px;
`;

const Block = styled.span`
  display: block;
  height: 1px;
  background-color: #807D7E;
  margin-bottom: 20px;
`;

const ProductTitle = styled.h1`
  font-size: 24px;
`;

const BottomDetails = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  width: 70%;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

const TabButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #807D7E;
  background-color: transparent;
  cursor: pointer;
  font-weight: bold;

  &.active {
    background-color: #8A33FD;
    color: white;
  }
`;

const TabContent = styled.div``;

const ContentParagraph = styled.p`
  font-size: 14px;
`;

const RightSection = styled.div`
  width: 30%;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const Category = styled.h1`
  font-size: 24px;
`;

export default ProductDetail;
