import React from 'react';
import HeaderContainer from './header-container';

const NavbarHeader = () => (
    <header>
        <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet"/>

    <div class="collapse bg-light" id="navbarHeader">
     <HeaderContainer />
    </div>
    <div class="navbar navbar-light bg-light shadow-sm">
      <div class="container d-flex justify-content-between">
        <a href="//#" class="navbar-brand d-flex align-items-center">
          <strong>GoZomato</strong>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </header>
)

  export default NavbarHeader