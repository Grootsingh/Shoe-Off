import React from "react";
import { NavLinks } from "./../../constants";

function DesktopNav() {
  return (
    <>
      <nav className=" flex items-center gap-x-navclamp text-lg font-semibold">
        {NavLinks.map((link) => {
          return (
            <a
              href="#"
              key={link}
              className="relative overflow-hidden  first-of-type:text-custom-secondary group"
            >
              <span className="inline-block will-change-transform translate-y-0 transition-transform duration-500 motion-safe:group-hover:transition-transform motion-safe:group-hover:duration-[250ms] motion-safe:group-hover:-translate-y-full">
                {link}
              </span>
              <span className="absolute font-bold will-change-transform inset-0 transition-transform duration-500 translate-y-full motion-safe:group-hover:duration-[250ms] motion-safe:group-hover:transition-transform motion-safe:group-hover:translate-y-0">
                {link}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
}

export default DesktopNav;
