import React from "react";
import Logo from "./../../../public/Logo.svg";

import MobileNav from "../MobileNav/MobileNav";
import DesktopNav from "../DesktopNav/DesktopNav";

function MainHeader() {
  return (
    <>
      <div
        id="Mobile"
        className="lg:hidden flex justify-between px-8 py-5 overflow-x-auto border-b border-custom-gray-300 "
      >
        <a href="/" className="shrink-0">
          <img src={Logo} alt="Shoe-off" className="w-14" />
        </a>
        <MobileNav />
      </div>

      <div
        id="Deskrop"
        className="sm:hidden lg:flex px-8 py-5 border-b border-custom-gray-300 "
      >
        <a href="/" className="flex-1">
          <img src={Logo} alt="Shoe-off" className="w-14  " />
        </a>
        <DesktopNav />
        <div className="flex-1"></div>
      </div>
    </>
  );
}
export default MainHeader;
