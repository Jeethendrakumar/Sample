import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

const menu = [
  {
    platform: {
      link: "/",
      label: "Home",
    },
  },
  {
    pricing: {
      link: "/products",
      label: "Products",
    },
  },
  {
    resourses: {
      link: "/services",
      label: "Services",
    },
  },
  {
    acceleration: {
      link: "/about",
      label: "About Us",
    },
  },
];

const getMenu = () => {
  return menu.map((items) =>
    Object.values(items).map((item) => {
      return (
        <li key={item.label} className="navbar-expand-lg">
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
      <nav className="navbar navbar-expand bg-secondary navbar-light border-bottom">
        <div className="brand-link">
          <img
            src="static/img/Alpha-designstyle-smoothie-m.png"
            alt="custom logo"
            height="50"
            weight="00px"
          />
        </div>
        <ul className="navbar-nav ml-auto">
          {loggedIn ? getMenu() : "Admin Portal"}
        </ul>
        <ul className="navbar-nav ml-auto">
          <div className="nav-item">
            <Link className="btn btn-outline-info" to="/contact">
              CONTACT US
            </Link>
            {"  "}
            {loggedIn ? (
              <>
                {" "}
                <div className={`dropdown`}>
                  <button
                    type="button"
                    className={`btn text-white btn-info dropdown-toggle`}
                    onClick={this.toggleMsgShow}
                  >
                    <FontAwesomeIcon icon={faSignOut} />
                    {"  "}
                    LOG OUT
                  </button>
                  <div
                    className={`dropdown-menu dropdown-menu-lg dropdown-menu-right ${
                      msgShow ? "show" : null
                    }`}
                  >
                    <div className="dropdown-header">
                      Do you really want to Log Out?
                    </div>
                    <div className="dropdown-divider" />
                    <div class="container">
                      <div class="row">
                        <button
                          className="btn btn-secondary col-sm-6"
                          onClick={this.toggleMsgShow}
                        >
                          No
                        </button>
                        {"  "}
                        <button
                          className="btn btn-primary col-sm-6"
                          onClick={handleLogOut}
                        >
                          Yes
                        </button>
                      </div>
                    </div>
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
      </nav>
    );
  }
}

MainNavBar.propTypes = {};

export default MainNavBar;
