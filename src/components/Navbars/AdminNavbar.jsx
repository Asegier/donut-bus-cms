/*!

=========================================================
* Light Bootstrap Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Navbar, Dropdown, Button, Nav, NavDropdown, MenuItem} from "react-bootstrap";

// links that appear in navbar - they are separated from this component (navbar) so that we can redner them on responsive in sidebar as well

import AdminNavbarLinks from "./AdminNavbarLinks.jsx";

// we import here the routes for dashboard pages (links that appear in sidebar) to set navbar's name

import routes from "routes.js";

import donutLogo from "assets/img/brand-logo.png";

import { withTranslation } from "react-i18next";
import i18n from './../../i18n/index';

class AdminNavbar extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }
  getActiveRoute = routes => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = this.getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  // function for responsive that hides/shows the sidebar
  mobileSidebarToggle = e => {
    document.documentElement.classList.toggle("nav-open");
  };
  
  LanguageChange = (lang) => {
    console.log(lang);
    // if(lang == 0){
    //   i18n.changeLanguage('zh-HK');
    // } else if (lang == 1) {
    //   i18n.changeLanguage('zh-HK');
    // } else {
    //   i18n.changeLanguage('en');
    // }
  }
  langHK = () => {
    i18n.changeLanguage('zh-HK');
  }
  langEN = () => {
    i18n.changeLanguage('en');
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
     this.setState({ isOpen: false })
  }

  render() {
    const { t, i18n } = this.props;
    
    return (
      <Navbar fluid className={(this.props.navbar ? "navbar-fixed" : "") + (this.props.login ? "navbar-login" : "") }>
        {/* <div className="navbar-minimize">
          <button
            id="minimizeSidebar"
            className="btn btn-default btn-fill btn-round btn-icon"
            onClick={this.props.handleMiniClick}
          >
            <i className="fa fa-ellipsis-v visible-on-sidebar-regular" />
            <i className="fa fa-navicon visible-on-sidebar-mini" />
          </button>
        </div> */}
        <Navbar.Header>
          <Navbar.Brand>
            {/* Here we create navbar brand, based on route name */}
            {/* <a href="#pablo">{this.getActiveRoute(routes)}</a> */}
            <div className="logoWrapper">
              <a href="/">
                <img
                  className="donutLogo"
                  src={donutLogo}
                  alt={donutLogo}
                />
              </a>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle onClick={this.mobileSidebarToggle} />
        </Navbar.Header>
        <div className="language__wrapper" onMouseEnter={ this.handleOpen } onMouseLeave={ this.handleClose }>
          <div className="language__dropdown" >語言/Language</div>
          {this.state.isOpen &&
            <div className="language__dropdown-wrapper">
              <div className="language__dropdown-items" onClick={this.langHK}>繁體中文</div>
              <div className="language__dropdown-items" onClick={this.langCN}>简体中文</div>
              <div className="language__dropdown-items" onClick={this.langEN}>English</div>
            </div>
          }
            {/* <div className="language__dropdown-wrapper">
              <div className="language__dropdown-items">繁體中文</div>
              <div className="language__dropdown-items">简体中文</div>
              <div className="language__dropdown-items">English</div>
            </div> */}
        </div>
        
        {/* <Nav className="justify-content-end">
          <NavDropdown
            title="Language"
            onMouseEnter = { this.handleOpen }
            onMouseLeave = { this.handleClose }
            open={ this.state.isOpen }
            noCaret
            id="language-switcher-container"
          >
            
            <MenuItem>Only one Item</MenuItem>
          </NavDropdown>
        </Nav> */}
        {/* <Button className="text-right" onClick={this.LanguageChange()}>Language Change</Button> */}
        

        {/* Here we import the links that appear in navbar
        {window.innerWidth > 992 ? (
          <Navbar.Collapse>
            <AdminNavbarLinks />
          </Navbar.Collapse>
        ) : null} */}
      </Navbar>
    );
  }
}

export default withTranslation()(AdminNavbar);
