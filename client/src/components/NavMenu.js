import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Nav extends Component {
  render() {
    return (
      <div className="d-flex" id="wrapper">
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="nav-heading" style={{backgroundColor: '#343a40', color: 'white'}}>
            <b>Fitness Center</b>
            <p style={{ marginBottom: 0 }}>ICS 311 - Term Project</p>
            <p style={{ marginBottom: 0 }}>by Tung Vu</p>
          </div>
          <div className="sub-nav-heading border-bottom" style={{textAlign: 'center'}}>
            <b style={{fontSize: '30px'}}>MENU</b>
          </div>
          <div className="list-group list-group-flush">
            <Link
              to="members"
              className="list-group-item list-group-item-action bg-light"
            >
              Members
            </Link>
            <Link
              to="tiers"
              className="list-group-item list-group-item-action bg-light"
            >
              Membership Tiers
            </Link>
            <Link
              to="facility"
              className="list-group-item list-group-item-action bg-light"
            >
              Facilities
            </Link>
            <Link
              to="equipment"
              className="list-group-item list-group-item-action bg-light"
            >
              Equipment
            </Link>
            <Link
              to="employees"
              className="list-group-item list-group-item-action bg-light"
            >
              Employees
            </Link>
            <Link
              to="job"
              className="list-group-item list-group-item-action bg-light"
            >
              Jobs
            </Link>
          </div>
        </div>

        <div id="page-content-wrapper">
          <div className="container-fluid">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Nav;
