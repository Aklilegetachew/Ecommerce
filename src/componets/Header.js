import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

import "./header.css";
import { useStateValue } from "../datalayer/StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="headerComponet">
      {/* logo #590135 */}
      <Link to="/">
        <img
          className="logocontain"
          src="https://jordantravers.com/wp-content/uploads/2018/10/Amazon-Logo-1024x373.png"
          alt="Logo"
        />
      </Link>

      {/* search bar */}
      <div className="searchContainer">
        <input className="searchbar" type="text" />
        <SearchIcon className="searchIcon"></SearchIcon>
      </div>

      {/* header nav  */}

      <div className="header-nav">
        <Link to="/signin">
          <div className="header-optopn">
            <span className="optionone">Hello</span>
            <span className="optionTwo">SignIn</span>
          </div>
        </Link>

        <div className="header-optopn">
          <span className="optionone">return</span>
          <span className="optionTwo">Ordering</span>
        </div>

        <div className="header-optopn">
          <span className="optionone">your</span>
          <span className="optionTwo">prime</span>
        </div>

        <div className="header-shop">
          <div className="shopIcon-container">
            <Link to="/checkout">
              <span className="optionicon">
                <ShoppingCartIcon></ShoppingCartIcon>
              </span>
            </Link>
            <span className="optionTwo">{basket?.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
