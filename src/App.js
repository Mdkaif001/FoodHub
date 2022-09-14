import React, { useState } from "react";
import menu from "./menu";
import MainSection from "./MainSection";
import Buttons from "./Buttons";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';


const allCatValue = [
  "All",
  ...new Set(
    menu.map((elem) => {
      return elem.category;
    })
  ),
];
console.log(allCatValue);
function App() {
  const [item, setItem] = useState(menu);
  const [catItem, setCatItem] = useState(allCatValue);

  const filterItem = (catItem) => {
    if (catItem === "All") {
      setItem(menu);
      return;
    }
    const filterItem = menu.filter((elem) => {
      return elem.category === catItem;
    });
    setItem(filterItem);
  };
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={ <About />}/>
        <Route exact path="/contact" element={<Contact />}/>
        <Route exact path="/service" element={<Service />}/>
      </Routes>
      {/* Header */}
      <NavBar />

      <h1 className="text-center mt-5 main-heading">
        Order Your Favorite Dish
      </h1>
      <hr />
      {/* buttons section */}
      <Buttons filterItem={filterItem} setItem={setItem} catItem={catItem} />
      {/* main section */}
      <MainSection item={item} />
    </>
  );
}

export default App;
