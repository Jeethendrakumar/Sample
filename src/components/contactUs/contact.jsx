import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Link, Outlet } from "react-router-dom";
import Card, { CardItem } from "../../common/card";
import { overviewmenu } from "./appData";

class Contact extends Component {
  getMenu = () => {
    return overviewmenu.map((items) => {
      return Object.values(items).map((item) => {
        const { label, link } = item;
        return (
          <li key={label} className="nav-item d-none d-sm-inline-block">
            <NavLink
              exact
              to={link}
              className={`nav-link ${
                location.pathname.includes(link)
                  ? "text-dark thicker"
                  : "text-muted"
              } px-5 mx-2"`}
            >
              {label}
            </NavLink>
          </li>
        );
      });
    });
  };

  render() {
    let content;

    content = (
      <div className="ui secondary pointing menu">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="navbar navbar-expand">{this.getMenu()}      
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <CardItem item="body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Card>{content}</Card>
              <Outlet />
            </div>
          </div>
        </div>
      </CardItem>
    );
  }
}

export default connect()(Contact);
