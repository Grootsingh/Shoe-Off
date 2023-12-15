import React, { useState } from "react";
import Icon from "../Icon";
import DialogBox from "../DialogBox/DialogBox";

function MobileNav() {
  return (
    <>
      <nav className="flex gap-8 items-center">
        <a href="/">
          <Icon id="shopping-bag" />
        </a>
        <a href="/">
          <Icon id="search" />
        </a>
        <MenuIcon />
      </nav>
    </>
  );
}
export default MobileNav;

function MenuIcon() {
  let [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <Icon id="menu" />
      </button>
      {isOpen && <DialogBox isOpen={isOpen} closeMenu={closeMenu} />}
    </>
  );
}
