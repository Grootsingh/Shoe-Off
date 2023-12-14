import React from "react";

function MainHeader() {
  return (
    <>
      <div className="flex">
        <a href="/">
          <img src="Logo.png" alt="Shoe-off" className="" />
        </a>
        <nav className="flex-1">
          <a href="#">
            <span>SALE</span>
          </a>
          <a href="#">
            <span>NEW RELEASES</span>
          </a>
          <a href="#">
            <span>MEN</span>
          </a>
          <a href="#">
            <span>WOMEN</span>
          </a>
          <a href="#">
            <span>KIDS</span>
          </a>
          <a href="#">
            <span>COLLECTIONS</span>
          </a>
        </nav>
        <div></div>
      </div>
    </>
  );
}
export default MainHeader;
