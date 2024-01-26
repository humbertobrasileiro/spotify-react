import React from "react";
import './Main.css';
import Header from '../Header/Header';
import Playlist from '../Playlist/Playlist';

const Main = () => {
  return (
    <main>
      <div className="main-container">
        <Header></Header>
        <Playlist></Playlist>
      </div>
    </main>
  );
}

export default Main;
