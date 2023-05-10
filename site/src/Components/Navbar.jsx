import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../App.css";

const Navbar = () => {
  return (
    <div>
      <header className="">
        <div className="navbar">
          <div className="nav">
            <img className="logo-icon" alt="" src="Images/logo.svg" />
            <div className="menuright">
              <div className="menulinks">
                <a className="book" href="/" title="Book">
                  Book
                </a>
                <a className="book" href="/" title="About">
                  About
                </a>
                <a className="book" href="/" title="Sales Hacker">
                  Sales Hacker
                </a>
                <a className="book" href="/" title="Contact">
                  {" "}
                  Contact
                </a>
                <AiOutlineSearch size="2rem" />
              </div>
              <button className="hamburger-icon">
                <img className="group-2-icon" alt="" src="Images/group2.svg" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
