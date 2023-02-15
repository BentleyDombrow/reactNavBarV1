import React, { useState } from 'react';
import './MyNavBar.css'
import MyNavBarLogo from './Components/MyNavBar-logo'
import CreateNavItem from './Components/MyNavBar-CreateNavItem'
import MyNavBarContact from './Components/MyNavBar-Contact'

const MyNavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [contactButton, setContactButton] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleContactButton = () => {
    setContactButton(!contactButton);
  };

  return (
    <div className='MyNavBarContainer'>
      <MyNavBarLogo />
      <div className='NavItems'>
        <ul className='NavItemsList'>
            <CreateNavItem itemName='Features' />

            <CreateNavItem itemName='Portfolio' />

            <CreateNavItem itemName='Blog' />

            <CreateNavItem itemName='Pricing' />
            
        </ul>

        <MyNavBarContact />
      </div>

      {showMenu && (
        <div className="NavDropdown">
          <ul>
            <li className="NavItemLi">
              <a>Home</a>
            </li>
            <li className="NavItemLi">
              <a>Features</a>
            </li>
            <li className="NavItemLi">
              <a>Portfolio</a>
            </li>
            <li className="NavItemLi">
              <a>Blog</a>
            </li>
            <li className="NavItemLi">
              <a>Pricing</a>
            </li>
            <li className="NavItemLi" onClick={handleContactButton}>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MyNavBar;