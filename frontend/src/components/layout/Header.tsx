import React from "react";
import Search from "./Search";
import "../../assets/styles/blog.css";

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-logo">
        <p>Tech Blog</p>
      </div>
      <Search />
    </header>
  );
};

export default Header;
