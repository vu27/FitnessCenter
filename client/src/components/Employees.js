aimport React, { Component } from "react";

class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serverURL: "",
      // Form 1 array
      employees: [],
      formOneId: 0,
    };

    this.setFirstId = this.setFirstId.bind(this);
    this.setPrevioustId = this.setPrevioustId.bind(this);
    this.setNextId = this.setNextId.bind(this);
    this.setLastId = this.setLastId.bind(this);
  }

  setFirstId() {
    this.setState({
      formOneId: 0,
    });
  }

  setPrevioustId() {
    let newId = this.state.formOneId;

    if (newId == 0) {
      newId = this.state.employees.length - 1;
    } else {
      newId--;
    }

    this.setState({
      formOneId: newId,
    });
  }

  setNextId() {
    let newId = this.state.formOneId;

    if (newId == this.state.employees.length - 1) {
      newId = 0;
    } else {
      newId++;
    }

    this.setState({
      formOneId: newId,
    });
  }

  setLastId() {
    this.setState({
      formOneId: this.state.employees.length - 1,
    });
  }

  async componentDidMount() {
    // Set base URL to backend server
    await this.setState({
      serverURL: "http://localhost:8080",
      // serverURL: window.location.origin
    });

    // Form 1: fetch data
    await fetch(this.state.serverURL + "/form_one/employee", {
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
            employees: result,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    const { employees, formOneId } = this.state;

    return (
      <div style={{ padding: "40px" }}>
        <div className="row justify-content-center">
          <h1 className="display-2">EMPLOYEES TABLE</h1>
        </div>
        {/*********************** FORM 1 ***********************/}
        <div className="row">
          <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>FORM 1</h1>
        </div>

        <div className="row" style={{ textAlign: "center" }}>
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Facility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  {employees.length == 0 ? "" : employees[formOneId].emp_id}
                </th>
                <td>
                  {employees.length == 0 ? "" : employees[formOneId].emp_fname}
                </td>
                <td>
                  {employees.length == 0 ? "" : employees[formOneId].emp_lname}
                </td>
                <td>
                  {employees.length == 0 ? "" : employees[formOneId].emp_phone}
                </td>
                <td>
                  {employees.length == 0 ? "" : employees[formOneId].fac_id}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row">
          <button
            className="btn btn-primary"
            style={styles.btn}
            onClick={() => {
              this.setFirstId();
            }}
          >
            First
          </button>
          <button
            className="btn btn-warning"
            style={styles.btn}
            onClick={() => {
              this.setPrevioustId();
            }}
          >
            Previous
          </button>
          <button
            className="btn btn-warning"
            style={styles.btn}
            onClick={() => {
              this.setNextId();
            }}
          >
            Next
          </button>
          <button
            className="btn btn-primary"
            style={styles.btn}
            onClick={() => {
              this.setLastId();
            }}
          >
            Last
          </button>
        </div>
        {/*********************** FORM 2 ***********************/}
      </div>
    );
  }
}

const styles = {
  btn: {
    marginTop: "20px",
    marginBottom: "30px",
    marginRight: "30px",
    width: "150px",
    height: "50px",
  },
};

export default Employees;
