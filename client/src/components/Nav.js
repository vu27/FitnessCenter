import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Nav extends Component {
  render() {
    return (
      <div className="d-flex" id="wrapper">
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="nav-heading">
            <b>Fitness Center</b>
            <p style={{ marginBottom: 0 }}>ICS 311 Term Project</p>
            <p>by Tung Vu</p>
          </div>
          <div className="list-group list-group-flush">
            <Link
              to=""
              className="list-group-item list-group-item-action bg-light"
            >
              Members
            </Link>
            <Link
              to="tier"
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
              to="sharedfacility"
              className="list-group-item list-group-item-action bg-light"
            >
              Shared Facilities
            </Link>
            <Link
              to="equipment"
              className="list-group-item list-group-item-action bg-light"
            >
              Equipment
            </Link>
            <Link
              to="employee"
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
