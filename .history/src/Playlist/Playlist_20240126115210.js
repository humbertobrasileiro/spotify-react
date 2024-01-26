import React from "react";
import './Playlist.css';
import fig1 from '../assets/playlist/1.jpeg';
import fig2 from '../assets/playlist/2.png';
import fig3 from '../assets/playlist/3.jpeg';
import fig4 from '../assets/playlist/4.jpeg';
import fig5 from '../assets/playlist/5.jpeg';
import fig6 from '../assets/playlist/6.jpeg';
import fig7 from '../assets/playlist/7.jpeg';
import fig8 from '../assets/playlist/8.jpeg';
import fig9 from '../assets/playlist/9.jpeg';
import fig10 from '../assets/playlist/10.jpeg';
import fig11 from '../assets/playlist/11.jpeg';
import fig12 from '../assets/playlist/12.jpeg';
import fig13 from '../assets/playlist/13.jpeg';
import fig14 from '../assets/playlist/14.jpeg';
import fig15 from '../assets/playlist/15.jpeg';

const Playlist = () => {
  return (
    <div className="playlist-container">
      <div id="result-playlists">
        <div className="playlist">
          <h1 id="greeting"></h1>
          <h2 className="session">Navegar por todas as seções</h2>
        </div>

        <div className="offer__scroll-container">
          <div className="offer__list">
            <section className="offer__list-item">

              <a href="#" className="cards">
                <div className="cards card1">
                  <img src={fig1} alt="" />
                  <span>Boas festas</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card2">
                  <img src={fig2} alt="" />
                  <span>Feitos para você</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card3">
                  <img src={fig3} alt="" />
                  <span>Lançamentos</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card4">
                  <img src={fig4} alt="" />
                  <span>Creators</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card5">
                  <img src={fig5} alt="" />
                  <span>Para treinar</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card6">
                  <img src={fig6} alt="" />
                  <span>Podcasts</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card7">
                  <img src={fig7} alt="" />
                  <span>Sertanejo</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card8">
                  <img src={fig8} alt="" />
                  <span>Samba e pagode</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card9">
                  <img src={fig9} alt="" />
                  <span>Funk</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card10">
                  <img src={fig10} alt="" />
                  <span>MPB</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card11">
                  <img src={fig11} alt="" />
                  <span>Rock</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card12">
                  <img src={fig12} alt="" />
                  <span>Hip Hop</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card13">
                  <img src={fig13} alt="" />
                  <span>Indie</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card14">
                  <img src={fig14} alt="" />
                  <span>Relax</span>
                </div>
              </a>

              <a href="" className="cards">
                <div className="cards card15">
                  <img src={fig15} alt="" />
                  <span>Música Latina</span>
                </div>
              </a>
            </section>
          </div>
        </div>
      </div>
      <div id="result-artist" className="hidden">
        <div className="grid-container">
          <div className="artist-card" id="">
            <div className="card-img">
              <img id="artist-img" className="artist-img" />
              <div className="play">
                <span className="fa fa-solid fa-play"></span>
              </div>
            </div>
            <div className="card-text">
              <a title="Foo Fighters" className="vst" href="">
                <span className="artist-name" id="artist-name"></span>
                <span className="artist-categorie">Artista</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;

