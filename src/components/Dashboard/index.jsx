import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCalendar, faTimes } from '@fortawesome/free-solid-svg-icons';
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
              <button type="button" id="close-sidebar" onClick={this.toggleSidebar}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="sidebar-menu">
              <ul>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span>Calendar</span>
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
