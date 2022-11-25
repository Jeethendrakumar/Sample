import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import { map } from "lodash";
import { profileList, menu } from "./appData";

const getProfileData = (handleEvent) => {
  return map(profileList, (items) => {
    const { link, label, icon } = items;
    return (
      <div key={label}>
        <div className="dropdown-divider" />
        <Link
          className="text-dark dropdown-item"
          to={link}
          onClick={handleEvent}
          style={{ color: "black" }}
        >
          <FontAwesomeIcon icon={icon} />
          {"   "}
          {label}
        </Link>
      </div>
    );
  });
};
const getMenu = () => {
  return menu.map((items) =>
    Object.values(items).map((item) => {
      return (
        <li key={item.label} className="nav-item d-sm-inline-block">
          <NavLink
            to={item.link}
            className="nav-link thicker"
            style={{ marginLeft: "30px", marginRight: "30px" }}
          >
            {item.label}
          </NavLink>
        </li>
      );
    })
  );
};
class MainNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msgShow: false,
    };
  }

  toggleMsgShow = () => {
    const msgShow = !this.state.msgShow;
    this.setState({ msgShow });
  };

  notShow = () => {
    this.setState({ msgShow: false });
  };

  render() {
    const { loggedIn, handleLogOut } = this.props;
    const { msgShow } = this.state;
    return (
      <nav className="navbar navbar-expand bg-secondary border-bottom">
        <div className="container-fluid">
          <div className="brand-link">
            <Link to='/'>
            <img
              src="static/img/Alpha-designstyle-smoothie-m.png"
              alt="custom logo"
              height="50"
              weight="00px"
            />
            </Link>
          </div>
          <ul className="nav navbar-nav">
            {loggedIn ? getMenu() : "Admin Portal"}
          </ul>
          <ul className="nav navbar-nav">
            <div className="nav-item">
              {loggedIn ? (
                <>
                  {" "}
                  <div className={`dropdown`}>
                    <div
                      className="nav-link pull-left"
                      onClick={this.toggleMsgShow}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src="static/img/3600926.png"
                        className="rounded-circle img-fluid"
                        style={{ width: "50px" }}
                      />
                    </div>
                    <div
                      className={`dropdown-menu dropdown-menu-lg dropdown-menu-right ${
                        msgShow ? "show" : null
                      }`}
                    >
                      <span className="dropdown-item dropdown-header">
                        Profile Settings
                      </span>
                      {getProfileData(this.notShow)}
                      <div className="dropdown-divider" />
                      <button
                        className="dropdown-item"
                        onClick={() => {
                          handleLogOut();
                          this.notShow();
                        }}
                      >
                        <FontAwesomeIcon icon={faSignOut} />
                        {"   "}
                        Logout
                      </button>
                    </div>
                    <div
                      className={`backdrop-custom ${msgShow ? null : "hide"}`}
                      onClick={this.notShow}
                    ></div>
                  </div>
                </>
              ) : (
                <button type="button" className="btn text-white btn-pink">
                  TRY FOR FREE
                </button>
              )}
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}

MainNavBar.propTypes = {};

export default MainNavBar;
