
import React, { useState} from 'react';
import styled from 'styled-components';
import { PiUserThin } from "react-icons/pi";
import { Link } from 'react-router-dom';



const Dropdown = ({ username, handleLogout }) => {
    const [isOpen, setIsOpen] = useState(false);


  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };
  
    return (
      <StyledDropdown  onClick={toggleDropdown}>
        {username ? (
          <span>{username}</span>
        ) : (
          <PiUserThin/>
        )}
        <DropdownMenu isOpen={isOpen}>
          {!username && <DropdownItem to="/login">Login</DropdownItem>}
          {!username && <DropdownItem to="/signup">Signup</DropdownItem>}
          {username && <DropdownItem to="/user/accountsettings">Profile</DropdownItem>}
          {username && (
            <DropdownItem to="/" onClick={handleLogout}>Logout</DropdownItem>
          )}
        </DropdownMenu>
      </StyledDropdown>
    );
  };


// Styled components remain the same
const StyledDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownMenu = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius: 4px;
  overflow: hidden;
`;

const DropdownItem = styled(Link)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
`;
export default Dropdown;
