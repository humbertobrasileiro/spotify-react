import React from "react";
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div class="sidebar">
      <nav class="sidebar__navigation">
        <div class="logo">
          <a href="">
            <img src="./src/assets/icons/logo-spotify.png" alt="Logo" />
          </a>
        </div>
        <ul>
          <li>
            <a href="">
              <span class="fa fa-home"></span>
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="fa fa-search"></span>
              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="library">
        <div class="library__content">
          <button class="library__button">
            <span class="fa fas fa-book"></span>
            <span>Sua biblioteca</span>
          </button>
          <span class="fa fa-plus"></span>
        </div>

        <section class="section-playlist">
          <div class="section-playlist__content">
            <span class="text title">Crie sua primeira playlist</span>
            <span class="text subtitle">É fácil, vamos te ajudar.</span>
            <button class="section-playlist__button">
              <span>Criar playlist</span>
            </button>
          </div>
        </section>

        <div class="cookies">
          <a href="">Cookies</a>
        </div>

        <div class="languages">
          <button class="languages__button">
            <span class="fa fa-globe"></span>
            <span>Português do Brasil</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export Sidebar;
