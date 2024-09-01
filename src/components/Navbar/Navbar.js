
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CiShoppingCart, CiHeart, CiUser, CiSearch } from "react-icons/ci";
import { FaBars, FaTimes, FaSignOutAlt } from "react-icons/fa";
import logomain from "../../assets/Logo.svg";

function Navbar({ username, handleLogout, wishlistSize, cartSize, onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prevState => !prevState);
  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <Nav>
      <Left>
        <Logo src={logomain} alt="Main Logo" />
      </Left>
      <Middle>
        <MenuButton onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
        <NavItems>
          {['/', '/women', '/men', '/combos', '/joggers'].map((path, index) => (
            <NavItem key={path}>
              <StyledLink to={path}>{['Shop', 'Women', 'Men', 'Combos', 'Joggers'][index]}</StyledLink>
            </NavItem>
          ))}
        </NavItems>
        <SearchContainer>
          <SearchIcon />
          <SearchInput
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </SearchContainer>
      </Middle>
      <Right>
        <Icons>
          <IconWrapper onClick={toggleDropdown}>
            {username ? (
              <FaSignOutAlt onClick={handleLogout} />
            ) : (
              <CiUser />
            )}
            {dropdownOpen && !username && (
              <DropdownMenu>
                <DropdownItem to="/login">Login</DropdownItem>
                <DropdownItem to="/signup">Signup</DropdownItem>
              </DropdownMenu>
            )}
          </IconWrapper>
          <IconWrapper>
            <CiHeart />
            {wishlistSize > 0 && <Count>{wishlistSize}</Count>}
          </IconWrapper>
          <IconWrapper>
            <CiShoppingCart />
            {cartSize > 0 && <Count>{cartSize}</Count>}
          </IconWrapper>
        </Icons>
      </Right>
      <MenuBar open={menuOpen}>
        <ResponsiveNavItems>
          {['/', '/women', '/men', '/combos', '/joggers'].map((path, index) => (
            <NavItem key={path}>
              <StyledLink to={path} onClick={toggleMenu}>{['Shop', 'Women', 'Men', 'Combos', 'Joggers'][index]}</StyledLink>
            </NavItem>
          ))}
        </ResponsiveNavItems>
      </MenuBar>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  position: relative;
  background-color: #fff; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: 1280px) {
    padding: 1rem 3rem;
  }

  @media (max-width: 640px) {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 540px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

const Left = styled.div``;

const Logo = styled.img`
  max-height: 40px;
`;

const Middle = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 540px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    order: 11;
    width: 100%;
    margin-top: 25px;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 980px) {
    display: block;
  }
`;

const MenuBar = styled.div`
  display: none;

  @media (max-width: 980px) {
    display: ${props => (props.open ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    width: 35%;
    height: 100vh;
  }
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 4rem;
  padding: 0;
  margin: 0;

  @media (max-width: 1280px) {
    gap: 2rem;
  }

  @media (max-width: 980px) {
    display: none;
  }
`;

const ResponsiveNavItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin: 0;
  align-items: center;
`;

const NavItem = styled.li`
  cursor: pointer;
  transition: color 0.3s ease;
  font-weight: bold;
  color: #807D7E;

  &:hover {
    color: #000;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 80px;
`;

const SearchIcon = styled(CiSearch)`
  position: absolute;
  left: 10px;
  color: #807D7E;
  font-size: 1.2rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid #fff;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  background-color: #F6F6F6;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  &::placeholder {
    color: #807D7E;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.3rem 0.5rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.5rem 0.5rem 2rem; /* Adjusted padding */
  }
`;

const Right = styled.div``;

const Icons = styled.ul`
  list-style: none;
  display: flex;
  gap: 3rem;
  padding: 0;
  margin: 0;

  @media (max-width: 1280px) {
    gap: 1rem;
  }
`;

const IconWrapper = styled.li`
  cursor: pointer;
  font-size: 1.2rem;
  border: 1px solid #F6F6F6;
  padding: 5px 8px;
  border-radius: 8px;
  background-color: #F6F6F6;
  position: relative;
`;

const Count = styled.span`
  position: absolute;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.7rem;
  top: -5px;
  right: -5px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 0.5rem;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  color: #000;
  text-decoration: none;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export default Navbar;
