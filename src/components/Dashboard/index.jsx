import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars, faTimes, faHome, faTh, faUser,
} from '@fortawesome/free-solid-svg-icons';
import './dashboard.scss';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import WebsiteSections from '../WebsiteSections';
import Admin from '../Admin';

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

  setActive = (url) => {
    const { location: { pathname } } = this.props;
    return pathname === url ? 'active' : '';
  }

  render() {
    const { toggled } = this.state;

    const links = [
      {
        title: 'Homepage',
        icon: faHome,
        url: '/',
      },
      {
        title: 'Website Sections',
        icon: faTh,
        url: '/dashboard/sections',
      },
      {
        title: 'Admin',
        icon: faUser,
        url: '/dashboard/admin',
      },
    ];

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
                {links.map(link => (
                  <li key={link.title}>
                    <Link to={link.url} className={`sidebar-link ${this.setActive(link.url)}`}>
                      <span className="boxed-icon">
                        <FontAwesomeIcon icon={link.icon} />
                      </span>
                      <span className="link-title">{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        <main className="page-content">
          <div className="container-fluid">
            <Route path="/dashboard/sections" component={WebsiteSections} />
            <Route path="/dashboard/admin" component={Admin} />
          </div>
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  location: PropTypes.shape({}).isRequired,
};
export default Dashboard;
