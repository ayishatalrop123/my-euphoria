
import React from 'react';
import styled from 'styled-components';

const Template = () => {
  return (
    <TemplateContainer>
      <TemplateSection bgImage={require("../../assets/bg-2.jpg")}>
        <Content />
      </TemplateSection>
      <TemplateSection bgImage={require("../../assets/bg-3.jpg")}>
        <Content />
      </TemplateSection>
    </TemplateContainer>
  );
};

const Content = () => (
  <TemContent>
    <Span>Low Price</Span>
    <H2>High Coziness</H2>
    <Small>UPTO 50% OFF</Small>
    <Explore href="#">Explore items</Explore>
  </TemContent>
);

const TemplateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2%;
  padding: 5% 0 0;

  @media (max-width: 768px) {
    gap: 5%;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
  }
  @media (max-width: 540px) {
    padding-top: 10%;
  }
`;

const TemplateSection = styled.div`
  width: 50%;
  background: url(${(props) => props.bgImage}) top/cover no-repeat;
  height: 45vh;
  border-radius: 25px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  @media (max-width: 980px) {
    height: 25vh;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const TemContent = styled.div`
  padding: 12% 0 0 10%;
  display: flex;
  flex-direction: column;
`;

const Span = styled.span`
  color: #fff;
  font-weight: bold;
`;

const H2 = styled.h2`
  color: #fff;
`;

const Small = styled.small`
  color: #fff;
`;

const Explore = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  margin-top: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

export default Template;
