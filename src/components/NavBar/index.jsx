import React, { Component } from 'react';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const TOGGLE_HEIGHT = 200;

class NavBar extends Component {
  state = {
    scrolled: false,
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const { scrolled } = this.state;
      if (window.scrollY > TOGGLE_HEIGHT && !scrolled) {
        this.setState({ scrolled: true });
      } else if (window.scrollY <= TOGGLE_HEIGHT && scrolled) {
        this.setState({ scrolled: false });
      }
    });
  }

  render() {
    const { scrolled } = this.state;

    return (
      <div className="navigation-bar">
        <div className="wrapper">
          <header>
            <nav className={`${scrolled ? 'black-nav' : ''}`}>
              <div className="menu-icon">
                <FontAwesomeIcon className="" icon={faBars} />
              </div>
              <div className="logo">
                  LOGO
              </div>
              <div className="menu">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/">About</a></li>
                  <li><a href="/">Blog</a></li>
                  <li><a href="/">Contact</a></li>
                </ul>
              </div>
            </nav>
          </header>
        </div>
      </div>
    );
  }
}

export default NavBar;
