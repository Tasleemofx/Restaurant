import React from 'react'
import { Navbg, NavItem, NavUl, LogoSpan} from '../styles/Nav';
const Nav = () => {
  return ( <div>
            <Navbg>
              <div>
                <h1>
                  <LogoSpan>QASA</LogoSpan>Restaurant
                </h1>
              </div>
              <NavUl>
                <NavItem>Our Menu</NavItem>
                <NavItem>chefs</NavItem>
                <NavItem>Read blog</NavItem>
                <NavItem>Gallery</NavItem>
                <NavItem>Testimonials</NavItem>
                <NavItem>Contact</NavItem>
              </NavUl>
            </Navbg>
          </div>
  );
};

export default Nav