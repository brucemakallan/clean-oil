import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars, faTimes, faHome, faTh,
} from '@fortawesome/free-solid-svg-icons';
import './dashboard.scss';

class Dashboard extends Component {
  state = {
    toggled: 'toggled',
  }

  toggleSidebar = (e) => {
    e.preventDefault();
    const { toggled } = this.state;
    const switchToggled = toggled === '' ? 'toggled' : '';
    this.setState({
      toggled: switchToggled,
    });
  }

  render() {
    const { toggled } = this.state;

    return (
      <div className={`page-wrapper ${toggled}`}>
        <button type="button" id="show-sidebar" className="btn btn-sm btn-dark" onClick={this.toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <nav id="sidebar" className="sidebar-wrapper">
          <div className="sidebar-content">
            <div className="sidebar-brand">
              <button type="button" id="close-sidebar" className="icon-button" onClick={this.toggleSidebar}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="sidebar-menu">
              <ul>
                <li>
                  <a href="/" className="sidebar-link">
                    <span className="boxed-icon">
                      <FontAwesomeIcon icon={faHome} />
                    </span>
                    <span className="link-title">Homepage</span>
                  </a>
                </li>
                <li>
                  <a href="/dashboard/sections" className="sidebar-link active">
                    <div className="boxed-icon">
                      <FontAwesomeIcon icon={faTh} />
                    </div>
                    <div className="link-title">Website Sections</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="page-content">
          <div className="container-fluid">
            <h2>Dashboard</h2>
          </div>
        </main>
      </div>
    );
  }
}

export default Dashboard;
