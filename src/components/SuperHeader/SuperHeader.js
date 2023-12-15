import React from "react";
import Icon from "../Icon";

function SuperHeader() {
  return (
    <>
      <div className="sm:h-1 sm:bg-custom-gray-900 lg:hidden"></div>
      <div className="sm:hidden bg-custom-gray-900 h-10  text-sm  text-custom-gray-300 lg:flex items-center gap-6 px-8">
        <div className="text-white flex-1">
          Free shipping on domestic orders over $75!
        </div>
        <SearchInput />
        <button>
          <span>Help</span>
        </button>
        <button>
          <Icon id="shopping-bag" />
        </button>
      </div>
    </>
  );
}
export default SuperHeader;

function SearchInput() {
  return (
    <>
      <form className="relative">
        <label htmlFor="search-shoe" className="sr-only">
          Search
        </label>
        <Icon id="search" className="absolute" size={16} />
        <input
          className="pl-6 bg-inherit border-b border-current outline-offset-[6px]"
          type="search"
          name="search-shoe"
          placeholder="Search..."
          id="search-shoe"
        />
      </form>
    </>
  );
}
