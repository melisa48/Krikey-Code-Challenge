import React, { useState } from 'react';
import './NavigationMenu.css'; // Assuming your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const NavigationMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navigation-menu">
      <img src="krikey-logo.jpg" alt="Krikey Logo" className="logo" />
      <ul className="menu-items">
        <li className="menu-item" onClick={toggleDropdown}>
          How to Animate <FontAwesomeIcon icon={faAngleDown} />
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">Submenu Item 1</li>
              <li className="dropdown-item">Submenu Item 2</li>
              {/* Add more submenu items as needed */}
            </ul>
          )}
        </li>
        <li className="menu-item" onClick={toggleDropdown}>
          Business <FontAwesomeIcon icon={faAngleDown} />
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">Submenu Item 1</li>
              <li className="dropdown-item">Submenu Item 2</li>
              {/* Add more submenu items as needed */}
            </ul>
          )}
        </li>
        <li className="menu-item">Education <FontAwesomeIcon icon={faAngleDown} /></li>  <li className="menu-item">Social Media <FontAwesomeIcon icon={faAngleDown} /></li>  <li className="menu-item">Pricing</li>
        <li className="menu-item">About Us</li>
      </ul>
      <button className="get-started-btn">Get Started</button>
    </nav>
  );
};

export default NavigationMenu;


