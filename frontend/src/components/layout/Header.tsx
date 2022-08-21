import React from "react";
import Search from "./Search";
import "../../assets/styles/blog.css";
import { FaUserAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const Header: React.FC = () => {
  const userId = useParams();

  return (
    <header>
      <div className="header-logo">
        <p>Tech Blog</p>
      </div>
      <Search />
      <div className="header-icon">
        <Link to={`/@${userId.userId}/userinfo`}>
          <FaUserAlt />
        </Link>
      </div>
    </header>
  );
};

export default Header;
