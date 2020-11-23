import React, { Component } from "react";

class Facilities extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serverURL: "",
      // Form 1
      f1_facilities: [],
      formOneId: 0,
      // Form 2
      f2_employees: [],
      formTwoId: 0,
      // Form 3
      f3_facilities: [],
      searchId: "",
    };

    this.setFirstId = this.setFirstId.bind(this);
    this.setPrevId = this.setPrevId.bind(this);
    this.setNextId = this.setNextId.bind(this);
    this.setLastId = this.setLastId.bind(this);
    this.search = this.search.bind(this);
  }

  // Search function for form 3
  search() {
    fetch(
      this.state.serverURL + "/form_three/facility/" + this.state.searchId,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            f3_facilities: result,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  // Used to keep track of current row displayed in form one/two - set to first Id
  setFirstId(form) {
    if (form === "formOne") {
      this.setState({
        formOneId: 0,
      });
    } else if (form === "formTwo") {
      this.setState({
        formTwoId: 0,
      });
    }
  }

  // Used to keep track of current row displayed in form one/two - set to previous Id
  setPrevId(form) {
    let newId =
      form === "formOne" ? this.state.formOneId : this.state.formTwoId;

    if (newId == 0) {
      if (form === "formOne") {
        newId = this.state.f1_facilities.length - 1;
      } else {
        newId = this.state.f2_employees.length - 1;
      }
    } else {
      newId--;
    }

    if (form === "formOne") {
      this.setState({
        formOneId: newId,
      });
    } else {
      this.setState({
        formTwoId: newId,
      });
    }
  }

  // Used to keep track of current row displayed in form one/two - set to next Id
  setNextId(form) {
    let newId =
      form === "formOne" ? this.state.formOneId : this.state.formTwoId;

    if (form === "formOne" && newId == this.state.f1_facilities.length - 1) {
      newId = 0;
    } else if (
      form === "formTwo" &&
      newId == this.state.f2_employees.length - 1
    ) {
      newId = 0;
    } else {
      newId++;
    }

    if (form === "formOne") {
      this.setState({
        formOneId: newId,
      });
    } else {
      this.setState({
        formTwoId: newId,
      });
    }
  }

  // Used to keep track of current row displayed in form one/two - set to last Id
  setLastId(form) {
    if (form === "formOne") {
      this.setState({
        formOneId: this.state.f1_facilities.length - 1,
      });
    } else {
      this.setState({
        formTwoId: this.state.f2_employees.length - 1,
      });
    }
  }

  async componentDidMount() {
    // Set base URL to backend server
    await this.setState({
      serverURL: "http://localhost:8080",
      // serverURL: window.location.origin
    });

    // Form 1: fetch data
    await fetch(this.state.serverURL + "/form_one/facility", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            f1_facilities: result,
          });
        },
        (error) => {
          console.log(error);
        }
      );

    // Form 2: fetch data
    await fetch(this.state.serverURL + "/form_two/employee", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            f2_employees: result,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    const {
      f1_facilities,
      f2_employees,
      formOneId,
      formTwoId,
      f3_facilities,
      searchId,
    } = this.state;

    return (
      <div style={{ padding: "40px", paddingBottom: "500px" }}>
        <div className="row">
          <h1 className="display-5" style={styles.mainHeader}>
            FACILITIES TABLE
          </h1>
        </div>
        {/*********************** FORM 1 ***********************/}

        <div className="row" style={{ fontSize: "60px", marginTop: "20px" }}>
          FORM 1
        </div>
        <div className="row">
          <p>
            Underlying query: <b>SELECT * FROM facility;</b>
          </p>
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Facility Id
          </span>
          <input
            type="text"
            className="col-md-3"
            value={
              f1_facilities.length == 0 ? "" : f1_facilities[formOneId].fac_id
            }
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Facility Name
          </span>
          <input
            type="text"
            className="col-md-3"
            value={
              f1_facilities.length == 0 ? "" : f1_facilities[formOneId].fac_name
            }
            disabled
          />
        </div>
        <div className="row">
          <button
            style={styles.btn}
            onClick={() => {
              this.setFirstId("formOne");
            }}
          >
            First
          </button>
          <button
            style={styles.btn}
            onClick={() => {
              this.setPrevId("formOne");
            }}
          >
            Previous
          </button>
          <button
            style={styles.btn}
            onClick={() => {
              this.setNextId("formOne");
            }}
          >
            Next
          </button>
          <button
            style={styles.btn}
            onClick={() => {
              this.setLastId("formOne");
            }}
          >
            Last
          </button>
        </div>

        {/*********************** FORM 2 ***********************/}
        <div className="row" style={{ fontSize: "60px", marginTop: "20px" }}>
          FORM 2
        </div>
        <div className="row">
          <p>
            Underlying query:{" "}
            <b>
              SELECT emp_fname, emp_lname, fac_name FROM employee INNER JOIN
              facility ON employee.fac_id = facility.fac_id;
            </b>
          </p>
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            First Name
          </span>
          <input
            type="text"
            className=" col-md-3"
            value={
              f2_employees.length == 0 ? "" : f2_employees[formTwoId].emp_fname
            }
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Last Name
          </span>
          <input
            type="text"
            className=" col-md-3"
            value={
              f2_employees.length == 0 ? "" : f2_employees[formTwoId].emp_lname
            }
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Facility Name
          </span>
          <input
            type="text"
            className=" col-md-3"
            value={
              f2_employees.length == 0 ? "" : f2_employees[formTwoId].fac_name
            }
            disabled
          />
        </div>
        <div className="row">
          <button
            style={styles.btn}
            onClick={() => {
              this.setFirstId("formTwo");
            }}
          >
            First
          </button>
          <button
            style={styles.btn}
            onClick={() => {
              this.setPrevId("formTwo");
            }}
          >
            Previous
          </button>
          <button
            style={styles.btn}
            onClick={() => {
              this.setNextId("formTwo");
            }}
          >
            Next
          </button>
          <button
            style={styles.btn}
            onClick={() => {
              this.setLastId("formTwo");
            }}
          >
            Last
          </button>
        </div>

        {/*********************** FORM 3 ***********************/}
        <div className="row" style={{ fontSize: "60px", marginTop: "20px" }}>
          FORM 3
        </div>
        <div className="row">
          <p>
            Underlying query:{" "}
            <b>
              SELECT fac_id, fac_name FROM
              facility WHERE fac_id = [INPUT ID];
            </b>
          </p>
        </div>
        <div className="row" style={{ marginBottom: "10px" }}>
          <input
            type="text"
            className="col-md-4"
            style={{ marginRight: "10px" }}
            placeholder="Search by Id"
            value={searchId}
            onChange={(e) => {
              this.setState({ searchId: e.target.value });
            }}
          />
          <button
            className="col-md-2"
            onClick={() => {
              this.search();
            }}
          >
            Search
          </button>
        </div>
        <div className="row" style={{ marginTop: "30px" }}>
          <span className="input-group-text" style={styles.inputSpan}>
            Facility Id
          </span>
          <input
            type="text"
            className=" col-md-3"
            value={f3_facilities.length == 0 ? "" : f3_facilities[0].fac_id}
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Facility Name
          </span>
          <input
            type="text"
            className=" col-md-3"
            value={f3_facilities.length == 0 ? "" : f3_facilities[0].fac_name}
            disabled
          />
        </div>
      </div>
    );
  }
}

const styles = {
  btn: {
    marginTop: "20px",
    marginBottom: "30px",
    marginRight: "10px",
    width: "100px",
    height: "30px",
  },
  inputSpan: {
    marginRight: "20px",
    background: "white",
    border: "none",
    width: "120px",
    paddingLeft: "0",
  },
  mainHeader: {
    marginBottom: "30px",
    border: "2px solid black",
    padding: "20px",
  },
};

export default Facilities;
