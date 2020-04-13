import React from "react";

import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import SearchBox from "../../components/SearchBox";

import "./styles.css";

const Main: React.FC = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Tabs />
        <SearchBox />
      </div>
    </>
  );
};

export default Main;
