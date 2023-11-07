// eslint-disable-next-line no-unused-vars
import React, { useEffect, useContext, useState } from "react";

import logo from "./../assets/Images/logo.png";
import { FaMoon, FaSun } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { ThemeContext } from "../Context/ThemeContext";

const Header = () => {
  // const [toggle, setToggle] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const { theme, setTheme } = useContext(ThemeContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    console.log("Theme is:", theme);
  }, []);

  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} />

      <div className="flex  bg-slate-200 p-2 w-full mx-5 items-centre  rounded-full ">
        <HiOutlineSearch size={30} />
        <input
          type="text"
          placeholder="Search games if u can "
          className="bg-transparent  flex-grow  w-full outline-none pl-2 items-center rounded-full"
        />
      </div>

      <div>
        {theme == "light" ? (
          <FaMoon
            onClick={() => {setTheme("dark");  localStorage.setItem('theme','dark'); }}
            className="text-[37px] text-black bg-slate-300 px-1 rounded-full cursor-pointer"
          />
        ) : (
          <FaSun
            onClick={() =>{setTheme("light");  localStorage.setItem('theme','light'); }}
            className=" text-[37px] text-black bg-slate-300 px-1 rounded-full cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
