
import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import playstore from "../../assets/Group.png";
import apple from "../../assets/Group (1).png";


const Footer = () => {
  const footerLinks = [
    {
      title: "Need Help",
      links: ["Contact Us", "Track Order", "Return & Refunds", "FAQ's", "Career"]
    },
    {
      title: "Company",
      links: ["About Us", "Euphoria Blog", "Euphoriastan", "Collaboration", "Media"]
    },
    {
      title: "More Info",
      links: ["Terms & Conditions", "Privacy Policy", "Investor Relations", "Shipping Policy", "Sitemap"]
    },
    {
      title: "Location",
      links: ["support@euphoria.in", "Eklingpura Chouraha, Ahmedabad Main Road", "(NH 8- Near Mahadev Hotel) Udaipur, India- 313002"]
    }
  ];

  return (
    <Container>
      <TopSection>
        <LinkSection>
          {footerLinks.map((section, index) => (
            <LinkBox key={index}>
              <LinkHeading>{section.title}</LinkHeading>
              <LinksList>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}><StyledLink href="#">{link}</StyledLink></li>
                ))}
              </LinksList>
            </LinkBox>
          ))}
        </LinkSection>
      </TopSection>

      <MiddleSection>
        <SocialContainer>
          <SocialIconsList>
            {[FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, index) => (
              <li key={index}>
                <SocialButton>
                  <Icon />
                </SocialButton>
              </li>
            ))}
          </SocialIconsList>
        </SocialContainer>
        <SocialSection>
          <Title>Download The App</Title>
          <div>
            <AppButton><img src={playstore} alt="Play Store" /></AppButton>
            <AppButton><img src={apple} alt="App Store" /></AppButton>
          </div>
        </SocialSection>
      </MiddleSection>

      <BottomSection>
        <CopyrightText>
          Copyright 2024 © Grogin WooCommerce WordPress Theme. All right reserved. Powered by KLBTheme.
        </CopyrightText>
      </BottomSection>
    </Container>
  );
};

const Container = styled.section`
  margin: 0 auto;
  padding: 5% 10%;
  background-color: #3C4242;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5% 4%;
  }
  @media (max-width: 980px) {
    padding: 5% 4%;
  }
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: #fff;
`;

const LinkSection = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const LinkBox = styled.div`
  flex: 1;
  min-width: 150px;

    @media (max-width: 768px) {
        align-items: center;
        display: flex;
        flex-direction: column;
  }
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #fff;
  line-height: 1.8;
  
  &:hover {
    color: #333;
  }
    @media (max-width: 540px) {
     font-size: 10px;
  }
`;

const LinkHeading = styled.h4`
  color: #fff;
  font-size: 1.2rem;
   @media (max-width: 540px) {
     font-size: 1rem;
  }
`;

const MiddleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2% 0;
  border-bottom: 1px solid #BEBCBD;

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  gap: 20px;

  img {
    width: 120px;
    height: auto;
  }
`;

const SocialContainer = styled.div`
`;

const SocialIconsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 3rem;

  @media (max-width: 640px) {
    gap: 2rem;
  }
`;

const SocialButton = styled.button`
  background: none;
  border: 1px solid #fff;
  background: #fff;
  border-radius: 10px;
  padding: 20% 30%;
  cursor: pointer;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
    @media (max-width: 540px) {
     font-size: 1rem;
  }
`;

const BottomSection = styled.div`
  padding: 1rem;
  text-align: center;
`;

const CopyrightText = styled.p`
  font-size: 0.8rem;
  color: #fff;
  @media (max-width: 540px) {
     font-size: 8px;
  }
`;

export default Footer;
