
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import arrowright from '../../assets/arrow-right.svg'; 
import images from './images'; 

const Womens = ({ searchQuery }) => {
    const [womensProducts, setWomensProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        setFilteredProducts(
            womensProducts.filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [searchQuery, womensProducts]);

    const getProducts = () => {
        setWomensProducts(images); 
    };

    return (
        <WomensContainer>
            <WomensTitle>
                <Block />
                <Category>Category For Women</Category>
            </WomensTitle>
            <WomensProducts>
                {filteredProducts.map(product => (
                    <ProductCard key={product.id}>
                        <ProductImageContainer>
                            <ProductImage src={product.image} alt={product.title} />
                        </ProductImageContainer>
                        <ProductInfo>
                            <ProductTitle>{product.title.substring(0, 20)}...</ProductTitle>
                            <StyledLink to={`/product/${product.id}`}>
                                <ProductExplore href='#'>Explore Now <img src={arrowright} alt="Explore" /></ProductExplore>
                            </StyledLink>
                        </ProductInfo>
                    </ProductCard>
                ))}
            </WomensProducts>
        </WomensContainer>
    );
};

const WomensContainer = styled.div`
    padding: 3% 0 0;
`;

const WomensTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Block = styled.span`
    background: #8A33FD;
    width: 5px;
    height: 3vh;
    border-radius: 5px;
`;

const Category = styled.h1`
    letter-spacing: 3px;
    font-size: 1.5rem;
`;

const WomensProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;

    @media (max-width: 640px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

    @media (max-width: 540px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;

const ProductCard = styled.div`
    position: relative;
`;

const ProductImageContainer = styled.div`
    border-radius: 8px;
    overflow: hidden;
    height: 45vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    width: 80%;

    @media (max-width: 540px) {
        height: 30vh;
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

const ProductExplore = styled.a`
    text-decoration: none;
    color: #7F7F7F;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;

    &:hover {
        color: #000;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default Womens;
