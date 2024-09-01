
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import arrowright from "../../assets/arrow-right.svg";

const Mens = ({ searchQuery }) => {
    const [mensProducts, setMensProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const allProducts = await response.json();
                const menClothing = allProducts.filter(product => product.category === "men's clothing");
                setMensProducts(menClothing);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        getProducts();
    }, []);

    useEffect(() => {
        if (searchQuery) {
            setFilteredProducts(
                mensProducts.filter(product =>
                    product.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        } else {
            setFilteredProducts(mensProducts);
        }
    }, [searchQuery, mensProducts]);

    return (
        <MensSession>
            <MensTitle>
                <Block />
                <Category>Category For Men</Category>
            </MensTitle>
            <MensProducts>
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
            </MensProducts>
        </MensSession>
    );
};

const MensSession = styled.div`
    padding: 3% 0 0 0;
`;

const MensTitle = styled.div`
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

const MensProducts = styled.div`
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
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    height: 35vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    width: 70%;
    padding: 5%;

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

    @media (max-width: 480px) {
        font-size: 13px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default Mens;
