import React from "react";

import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import SearchBox from "../../components/SearchBox";
import List from "../../components/List";

import "./styles.css";

const Main: React.FC = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Tabs />
        <SearchBox />
        <List vehicles={[]} />
      </div>
    </>
  );
};

export default Main;
