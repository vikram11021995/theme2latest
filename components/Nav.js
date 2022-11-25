import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";
import { setHTMLElementFixedPosition } from "../utils/functions";
// import "../styles/NavMenu.css";
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */ }

const Wrapper = styled.div`
  background-color: var(--primary);
  color: var(--white);

  //nav,
  //.navContainLeft {
  //  display: flex;
  //}

  .navLink {
    flex-grow: 1;
    color: var(--white);
  }

  .navContainLeft {
    background: none;
    display: flex;
    //justify-content: center;
    height: 63px;
    //display: flex;
    width: 100%;
    //margin-left: 0%;
    justify-content: space-between;
  }

  .navContainRight {
    width: 40%;
  }

  .navAddStore {
    float: right;
    background-color: var(--primary-minus-1);
    padding: 15px 60px;
  }

  .navLink a,
  .navAddStore a {
    color: var(--text1);
    text-decoration: none;
    font-size: 14px;
    font-weight:500;
  }
`;

const Navlink = styled.a`
  .navlink-sublinks-container a {
    padding: 5px;
    width: 100%;
  }

  .navlink-sublinks-container {
    display: none;
  }
`;

const Nav = ({ menu: { childs } }) => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  useEffect(() => {
    setHTMLElementFixedPosition(navMenuOpen);
    return () => {
      setHTMLElementFixedPosition(false);
    };
  }, [navMenuOpen]);

  const handleCategoryChange = (cid, cat, parents, longdesc) => {
    // let catName = cat;
    setNavMenuOpen(!navMenuOpen);
  };
  const [showZoomModal, setShowZoomModal] = useState(false);

  return (


    <>
      <div id='AnaMenu'>
        <ul id='nav'>
          <li> <a href='#' onMouseMove={() => {
            setShowZoomModal(!showZoomModal);
          }} style={{ color: "#222" }}>All Products {showZoomModal ? (
            <div ><IoChevronForwardOutline /></div>
          ) : (
            <div ><IoChevronForwardOutline /></div>
          )}</a>


            <ul>
              {childs.map(child => {
                let url = child.URL;
                if (url.includes("stores")) {
                  url = "stores";
                }
                return (
                  <li
                    key={child.cid}
                  >
                    <Link
                      href={`/${url}`}
                      onClick={() => handleCategoryChange()}
                    >
                      <a>{child.description.replace("All Products", "Browse Categories")} {child.childs.length > 0 ? (<div ><IoChevronForwardOutline /></div>) : null}</a>
                    </Link>

                    {child.childs.length > 0 ? (
                      <ul>
                        {child.childs.map(subcat => {
                          let suburl = subcat.URL;


                          return (
                            <li
                            >
                              <Link
                                href={`/${suburl}`}
                                onClick={() => handleCategoryChange()}
                              >
                                <a>{subcat.description.replaceAll('&amp;', '&')} {subcat.childs.length > 0 ? (<div ><IoChevronForwardOutline /></div>) : null}</a>
                              </Link>
                              <ul>

                                {subcat.childs.map((subsubcat, index) => (
                                  <li key={index}>
                                    <Link
                                      href={`/${subsubcat.URL}`}
                                      onClick={() => handleCategoryChange()}
                                    >
                                      <a>{subsubcat.description.replaceAll('&amp;', '&')}</a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          )

                        })}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>

          </li>
        </ul>
      </div>


    </>

  );
};

export default Nav;
