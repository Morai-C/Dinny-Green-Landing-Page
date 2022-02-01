import React from "react";
import HeaderComp from "./components/HeaderComp";
import BodyComp from "./components/BodyComp";
import "./styles/App.scss";
import "bootstrap/dist/js/bootstrap";
import FooterComp from "./components/FooterComp";
import "@fortawesome/fontawesome-free/css/all.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>
      <div className="smooth">
        <HeaderComp />
        <BodyComp />
        <FooterComp />
      </div>
    </>
  );
};

export default App;
