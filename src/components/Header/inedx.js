import React, { useState } from "react";
import logo from "../../assets/images/header-logo.svg";
import { IoIosSearch } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Header = () => {
  const [pass, setPass] = useState(false);
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState("");
  const nav = useNavigate();
  const checkPassword = () => {
    if (value === "123") {
      nav("/create");
      setModal(false);
    }
  };

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <Link to={"/"}>
            <img src={logo} alt="img" />
          </Link>
          <div className="header--search">
            <input type="text" placeholder="Я ищу" />
            <a class="header--search__icon">
              <IoIosSearch />
            </a>
          </div>
          <div className="header--icons">
            <Link to="/basket"
            className="header--icons__basket">
              <FaCartPlus />
            </Link>
            <button 
              className="header--icons__user"
              onClick={() => setModal(true)}
            >
              <FaUserAstronaut />
            </button>
            <div className="header--icons__dark">
              <button className="header--icons__dark--left">
                <MdSunny />
              </button>
              <button className="header--icons__dark--right">
                <MdDarkMode />
              </button>
            </div>
          </div>
        </div>
        {modal ? (
          <div className="modal">
            <div className="modal--password">
              <input
                type={pass ? "text" : "password"}
                placeholder="password"
                onChange={(e) => setValue(e.target.value)}
              />
              {!pass ? (
                <a className="" onClick={() => setPass(true)}>
                  <IoEyeSharp />
                </a>
              ) : (
                <a className="" onClick={() => setPass(false)}>
                  <BsEyeSlashFill />
                </a>
              )}
            </div>
            <button onClick={() => checkPassword()}>Sign In</button>
            <a className="modal--close" onClick={() => setModal(false)}>
              <IoIosCloseCircleOutline />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
