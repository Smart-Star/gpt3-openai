import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import { logoSvg } from '../../assets';
import { navLinks } from '../../constants/data';
import { Button } from '../Button';
import './navbar.css';

const Menu = () => (
  <>
    {navLinks.map((link) => (
      <div key={link.label}>
        <a href={link.href}>{link.label}</a>
      </div>
    ))}
  </>
);

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu((menu) => !menu);
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logoSvg} alt="logo svg" />
        </div>

        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="gpt3__navbar-sign">
        <a href="/">Sign in</a>
        <Button label="Sign up" />
      </div>

      <div className="gpt3__navbar-menu">
        <button type="button" onClick={handleClick}>
          {toggleMenu ? (
            <RiCloseLine color="#fff" size={27} />
          ) : (
            <RiMenu3Line color="#fff" size={27} />
          )}
        </button>

        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div
              onClick={handleClick}
              className="gpt3__navbar-menu_container-links"
            >
              <Menu />
            </div>

            <div className="gpt3__navbar-menu_container-links-sign">
              <a href="/">Sign in</a>
              <Button label="Sign up" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
