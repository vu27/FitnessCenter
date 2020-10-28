import React, { Component } from "react";

class Employee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serverURL: "",
      employees: [],
    };
  }

  async componentDidMount() {
    if (process.env.REACT_APP_DEVELOPMENT) {
      await this.setState({
        serverURL: "http://127.0.0.1:8000/api/employee/",
      });
    } else {
      await this.setState({
        serverURL: window.location.origin + "/api/employee/",
      });
    }

    await fetch(this.state.serverURL, {
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
    const { employees } = this.state;
    return (
      <div class="container">
        <h1>EMPLOYEES</h1>

        <div class="row">
          <button
            class="btn btn-success"
            style={{
              marginTop: "30px",
              marginBottom: "30px",
              width: "200px",
              height: "80px",
            }}
          >
            Add Employee
          </button>
        </div>

        <div class="row">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Facility</th>
                <th scope="col">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr>
                  <th scope="row">{employee.emp_id}</th>
                  <td>{employee.emp_fname}</td>
                  <td>{employee.emp_lname}</td>
                  <td>{employee.emp_phone}</td>
                  <td>{employee.fac_id}</td>
                  <td>
                    <button
                      class="btn btn-primary"
                      style={{ width: "90px", marginRight: "25px" }}
                    >
                      Edit
                    </button>

                    <button class="btn btn-danger" style={{ width: "90px" }}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Employee;
