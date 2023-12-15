import React from "react";
import { Search, Menu, ShoppingBag, ChevronDown, X } from "react-feather";

const icons = {
  search: Search,
  menu: Menu,
  "shopping-bag": ShoppingBag,
  "chevron-down": ChevronDown,
  close: X,
};

function Icon({ id, color, size, strokeWidth, ...delegated }) {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }
  const newStokeWidth = strokeWidth ? `stoke-${strokeWidth}` : `stoke-1`;
  return (
    <div className={`${newStokeWidth} hover:scale-110`} {...delegated}>
      <Component color={color} size={size} />
    </div>
  );
}

export default Icon;
