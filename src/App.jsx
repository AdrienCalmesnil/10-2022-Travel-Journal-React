import React from "react";
import data from "./data";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

export default function App() {
  const cards = data.map((item) => {
    return <Cards key={item.id} {...item} />;
  });
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}
