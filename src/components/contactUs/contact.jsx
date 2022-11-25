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
          <li key={label} className="nav-item d-sm-inline-block">
            <NavLink className={"nav-link text-muted x-5 mx-2"} to={link}>
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
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <div className="row">
            <ul className="nav navbar-nav">{this.getMenu()}</ul>
          </div>
        </div>
      </nav>
    );

    return (
      <CardItem item="body">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Card>{content}</Card>
            </div>
          </div>
          <Outlet />
        </div>
      </CardItem>
    );
  }
}

export default connect()(Contact);
