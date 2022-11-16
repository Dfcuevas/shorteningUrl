import React from "react";
import Logo from "../../public/logo.svg";
import Dropdown from "./Dropdown";

const NavBar = () => {
  return (
    <header className="flex justify-between px-4 py-6 xl:px-24 xl:py-12 xl:items-center gap-4">
      <div>
        <a href="/">
          <img src={Logo} alt="Logo de la aplicacion" width={"80px"} />
        </a>
      </div>
      <Dropdown />
    </header>
  );
};

export default NavBar;
