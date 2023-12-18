import React, { useState } from "react";
import SuperHeader from "../SuperHeader";
import MainHeader from "../MainHeader";
import ShoeGrid from "../ShoeGrid";
import ShoeCategory from "../ShoeCategory";
import Footer from "../Footer/Footer";

function App() {
  const [isSearch, setIsSearch] = useState("");

  function updateSearch(newSearch) {
    setIsSearch(newSearch);
  }

  return (
    <>
      <header>
        <SuperHeader updateSearch={updateSearch} />
        <MainHeader updateSearch={updateSearch} />
      </header>
      <div className="flex flex-row-reverse px-4 sm:px-8  py-16 gap-8">
        <ShoeGrid isSearch={isSearch} />
        <ShoeCategory />
      </div>
      <Footer />
    </>
  );
}

export default App;
