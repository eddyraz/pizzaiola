import React, { useState } from 'react';


const PzlNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
    <div className="container">
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a className="navbar-brand text-brand" href="index.html">Pizza<span className="color-b">iola</span></a>
      <button type="button" className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-expanded="false">
        <span className="fa fa-search" aria-hidden="true"></span>
      </button>
      <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="property-grid.html">Property</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="blog-grid.html">Blog</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Pages
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="property-single.html">Property Single</a>
              <a className="dropdown-item" href="blog-single.html">Blog Single</a>
              <a className="dropdown-item" href="agents-grid.html">Agents Grid</a>
              <a className="dropdown-item" href="agent-single.html">Agent Single</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
      <button type="button" className="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-expanded="false">
        <span className="fa fa-search" aria-hidden="true"></span>
      </button>
    </div>
  </nav>
    </div>
  );
}

export default PzlNavBar;
