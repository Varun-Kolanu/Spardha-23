import React, { useState, useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import styles from './Header.module.css';
// import { isMobile } from 'react-device-detect';
import { useMediaQuery } from 'react-responsive';

function Header() {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 993});
  //const [home,setHome]=useState(true);
  const [active,setActive]=useState(false);

  useEffect(() => {
    const scrollListener = document.addEventListener('scroll', () => {
      const pos = document.scrollingElement.scrollTop;
      if (pos >= 100) {
        if (!navbar) setNavbar(true);
      } else {
        if (navbar) setNavbar(false);
      }
    });
    return () => {
      document.removeEventListener('scroll', scrollListener);
    };
  }, [navbar]);

  const toggle = () => {
    setOpen((prevState) => {
      return prevState ^ 1;
    });
  };

  return (
    <>
      <Navbar
        expand="lg"
        className={styles['wrap-container']}
        fixed="top"
        style={{
          background: navbar
            ? isMobile
              ? 'transparent'
              : 'white'
            : 'transparent', // isMobile ? 'black' :
        }}
      >
        <div className="nav-contain" style={{ display: 'flex' }}>
          <NavbarBrand>
            <NavHashLink exact="true" to="/" smooth >
              <img
                src={`/images/logo/spardha-logo-${
                  navbar ? (isMobile ? 'white' : 'black') : 'white'
                }.png`}
                alt="Sparhda Logo"
                height="70px"
                // width="80px"
              />
            </NavHashLink>
          </NavbarBrand>
          <div
            className="side"
            style={{
              position: 'absolute',
              right: isMobile?'0':'60px',
              background: open ? 'rgba(255, 255, 255, 0.90)' : 'transparent',
              width:isMobile?'180px':null,
              alignItems:isMobile?'center':null,
              display:isMobile?'flex':null,
              flexDirection:isMobile?'column':null,
              paddingTop:isMobile?'8vh':null,
              height:isMobile?open?'100vh':'0vh':null,
              top:isMobile?'0':null,
            }}
          >
            
            <NavbarToggler
              className={`${
                styles[`navbar-toggler${open ? '-open' : ''}`]
              } mx-2`}
              style={{border:'none'}}
              onClick={toggle}
            ></NavbarToggler>
            
            <Collapse navbar isOpen={open} style={{display:open?null:'none'}}>
              
              <Nav navbar className={`ms-auto ${styles['navbar-nav']}`}>
                <NavItem className={styles['nav-items']}>
                  <NavHashLink
                    exact="true"
                    to="/"
                    className={styles['nav-links']}
                    onClick={() => {
                      setOpen(false);
                    }}
                    // style={({ isActive }) => {
                    //   return {
                    //     color: isActive
                    //       ? '#6db549'
                    //       : navbar
                    //       ? '#000'
                    //       : 'rgba(255, 255, 255, 0.9)',
                    //   };
                    // }}
                    style={({ isActive }) => {
                    
                      return {
                        color: isMobile
                          ? '#000'
                          : navbar
                          ? '#000'
                          : 'rgba(255, 255, 255, 0.9)',
                          borderBottom:isMobile?'1px solid black': active ?  'none': '3px solid red',
                        };
                    }}
                    smooth
                  >
                    Home
                  </NavHashLink>
                </NavItem>
                <NavItem className={styles['nav-items']}>
                  <NavHashLink
                    exact="true"
                    to="/about#about"
                    className={styles['nav-links']}
                    onClick={() => {
                      setOpen(false);
                    }}
                    // style={({ isActive }) => {
                    //   return {
                    //     color
                    //     // : isActive
                    //     //   ? '#6db549'
                    //       : navbar
                    //       ? '#000'
                    //       : 'rgba(255, 255, 255, 0.9)',
                    //   };
                    // }}
                    style={({ isActive }) => {
                      if(isActive){setActive(true)}
                      return {
                        color: isMobile
                          ? '#000'
                          : navbar
                          ? '#000'
                          : 'rgba(255, 255, 255, 0.9)',
                        borderBottom:isMobile?'1px solid black': isActive ? '3px solid red' : null,
                      };
                    }}
                    smooth
                  >
                    About
                  </NavHashLink>
                </NavItem>
                <NavItem className={styles['nav-items']}>
                  <NavHashLink
                    exact="true"
                    // to="/events#events"
                    to="/matches"
                    className={styles['nav-links']}
                    onClick={() => {
                      setOpen(false);
                    }}
                    // style={({ isActive }) => {
                    //   return {
                    //     color
                    //     // : isActive
                    //     //   ? '#6db549'
                    //       : navbar
                    //       ? '#000'
                    //       : 'rgba(255, 255, 255, 0.9)',
                    //   };
                    // }}
                    style={({ isActive }) => {if(isActive){setActive(true)}
                      return {
                        color: isMobile
                          ? '#000'
                          : navbar
                          ? '#000'
                          : 'rgba(255, 255, 255, 0.9)',
                          borderBottom:isMobile?'1px solid black': isActive ? '3px solid red' : null,
                        };
                    }}
                    smooth
                  >
                    Matches
                  </NavHashLink>
                </NavItem>
                <NavItem className={styles['nav-items']}>
                  <NavHashLink
                    exact="true"
                    to="/events#events"
                    // to="/matches#matches"
                    className={styles['nav-links']}
                    onClick={() => {
                      setOpen(false);
                    }}
                    // style={({ isActive }) => {
                    //   return {
                    //     color
                    //     // : isActive
                    //     //   ? '#6db549'
                    //       : navbar
                    //       ? '#000'
                    //       : 'rgba(255, 255, 255, 0.9)',
                    //   };
                    // }}
                    style={({ isActive }) => {if(isActive){setActive(true)}
                      return {
                        color: isMobile
                          ? '#000'
                          : navbar
                          ? '#000'
                          : 'rgba(255, 255, 255, 0.9)',
                          borderBottom:isMobile?'1px solid black': isActive ? '3px solid red' : null,
                        };
                    }}
                    smooth
                  >
                    Events
                  </NavHashLink>
                </NavItem>
                <NavItem className={styles['nav-items']}>
                  <NavHashLink
                    exact="true"
                    to="/espardha#espardha"
                    className={styles['nav-links']}
                    onClick={() => {
                      setOpen(false);
                    }}
                    // style={({ isActive }) => {
                    //   return {
                    //     color
                    //     // : isActive
                    //     //   ? '#6db549'
                    //       : navbar
                    //       ? '#000'
                    //       : 'rgba(255, 255, 255, 0.9)',
                    //   };
                    // }}
                    style={({ isActive }) => {if(isActive){setActive(true)}
                      return {
                        color: isMobile
                          ? '#000'
                          : navbar
                          ? '#000'
                          : 'rgba(255, 255, 255, 0.9)',
                          borderBottom:isMobile?'1px solid black': isActive ? '3px solid red' : null,
                        };
                    }}
                    smooth
                  >
                    ESPARDHA
                  </NavHashLink>
                </NavItem>
                {/* <NavItem className={styles['nav-items']}>
                  <a
                    href="/pdf/RuleBook.pdf"
                    target="_blank"
                    className={styles['nav-links']}
                    onClick={() => {
                      setOpen(false);
                    }}
                    style={{
                      color: isMobile
                        ? '#000'
                        : navbar
                        ? '#000'
                        : 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    RuleBook
                  </a>
                </NavItem> */}
                {/* <NavItem className={styles['nav-items']}>
                  <NavHashLink
                    exact="true"
                    to="/guests#guests"
                    className={styles['nav-links']}
                    onClick={() => {
                      setOpen(false);
                    }}
                    // style={({ isActive }) => {
                    //   return {
                    //     color
                    //     // : isActive
                    //     //   ? '#6db549'
                    //       : navbar
                    //       ? '#000'
                    //       : 'rgba(255, 255, 255, 0.9)',
                    //   };
                    // }}
                    style={({ isActive }) => {
                      return {
                        color: isMobile
                          ? '#000'
                          : navbar
                          ? '#000'
                          : 'rgba(255, 255, 255, 0.9)',
                          borderBottom:isMobile?'1px solid black': isActive ? '3px solid red' : null,
                        };
                    }}
                    smooth
                  >
                    Guests
                  </NavHashLink>
                </NavItem> */}
                <NavItem className={styles['nav-items']}>
                  <NavHashLink
                    exact="true"
                    to="/sponsors#sponsors"
                    className={styles['nav-links']}
                    onClick={() => {
                      setOpen(false);

                    }}
                    // style={({ isActive }) => {
                    //   return {
                    //     color
                    //     //  :isActive
                    //     //   ? '#6db549'
                    //       : navbar
                    //       ? '#000'
                    //       : 'rgba(255, 255, 255, 0.9)',
                    //     borderBottom:isActive
                    //     ? "3px solid red;",
                    //   };
                    // }}
                    style={({ isActive }) => {if(isActive){setActive(true)}
                      return {
                        color: isMobile
                          ? '#000'
                          : navbar
                          ? '#000'
                          : 'rgba(255, 255, 255, 0.9)',
                          borderBottom:isMobile?'1px solid black': isActive ? '3px solid red' : null,
                        };
                    }}
                    smooth
                  >
                    Sponsors
                  </NavHashLink>
                </NavItem>               
                <NavItem className={styles['nav-items']}>
                  <NavHashLink
                    exact="true"
                    to="/team#team"
                    className={styles['nav-links']}
                    onClick={() => {
                      setOpen(false);
                    }}
                    // style={({ isActive }) => {
                    //   return {
                    //     color: isActive
                    //       ? '#6db549'
                    //       : navbar
                    //       ? '#000'
                    //       : 'rgba(255, 255, 255, 0.9)',
                    //   };
                    // }}
                    style={({ isActive }) => {if(isActive){setActive(true)}
                      return {
                        color: isMobile
                          ? '#000'
                          : navbar
                          ? '#000'
                          : 'rgba(255, 255, 255, 0.9)',
                          borderBottom:isMobile?'1px solid black': isActive ? '3px solid red' : null,
                        };
                    }}
                    smooth
                  >
                    Teams
                  </NavHashLink>
                </NavItem>
                <NavItem className={styles['nav-items']}>
                  <NavHashLink
                    exact="true"
                    to="/contactus#contactus"
                    className={styles['nav-links']}
                    onClick={() => {
                      setOpen(false);;
                    }}
                    style={({ isActive }) => {if(isActive){setActive(true)}
                      return {
                        color: isMobile
                          ? '#000'
                          : navbar
                          ? '#000'
                          : 'rgba(255, 255, 255, 0.9)',
                          borderBottom:isMobile?'1px solid black': isActive ? '3px solid red' : null,
                        };
                    }}
                    smooth
                  >
                    Contact
                  </NavHashLink>
                </NavItem>
          
                <NavItem className={styles['nav-items']} style={{marginRight:'60px'}}>
                  <Nav navbar className={`ms-auto ${styles['mini-navbar-nav']}`}>
                  <NavItem className={styles['mini-nav-items']}>
                  <a
                    
                    href="https://www.facebook.com/Spardha.IIT.BHU/"
                    className={styles['nav-icons']}
                    onClick={() => {
                      setOpen(false);
                      
                    }}
                    style={{
                      color: isMobile
                        ? '#000'
                        : navbar
                        ? '#000'
                        : 'rgba(255, 255, 255, 0.9)',
                    }}
                    target="_blank" 
                    rel="noopener noreferrer"
                    smooth
                  >
                    <FaFacebookF className={`${styles.icons_lower}`} />
                  </a>

                  </NavItem>
                  
                  <NavItem className={styles['mini-nav-items']}>
                  <a
                    href="https://www.linkedin.com/company/spardha/about/"
                    className={styles['nav-icons']}
                    onClick={() => {
                      setOpen(false);
                    }}
                    style={{
                      color: isMobile
                        ? '#000'
                        : navbar
                        ? '#000'
                        : 'rgba(255, 255, 255, 0.9)',
                    }}
                    target="_blank" 
                    rel="noopener noreferrer"
                    smooth
                  >
                      <FaLinkedin className={`${styles.icons_lower}`} />
                  </a>

                  </NavItem>
                  <NavItem className={styles['mini-nav-items']}>
                  <a
                    
                    href="https://twitter.com/Spardha_IITBHU"
                    className={styles['nav-icons']}
                    onClick={() => {
                      setOpen(false);
                    }}
                    style={{
                      color: isMobile
                        ? '#000'
                        : navbar
                        ? '#000'
                        : 'rgba(255, 255, 255, 0.9)',
                    }}
                    target="_blank" 
                    rel="noopener noreferrer"
                    smooth
                  >
                    <FaTwitter className={`${styles.icons_lower}`} />
                  </a>

                  </NavItem>
                  </Nav>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Header;