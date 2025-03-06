import React from 'react';
import MainItem from "../MainItem/MainItem";
import "./Main.css";

const Main = ({ data }) => {
  return (
    <main>
      <div className="container">
        <div className="main-box">
          <MainItem data={data} />
        </div>
      </div>
    </main>
  );
};

export default Main;