import React, { Component } from "react";

class Members extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serverURL: "",
      employees: [],
    };
  }

  async componentDidMount() {
    console.log(process.env.REACT_APP_DEVELOPMENT);
    if (process.env.REACT_APP_DEVELOPMENT === "true") {
      await this.setState({
        serverURL: "http://localhost:8080/api/employee/",
      });
    } else {
      await this.setState({
        serverURL: window.location.origin + "/api/employee/",
      });
    }
    console.log(this.state.serverURL);

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
      <div style={{ padding: "40px" }}>
        <div className="row">
          <h1>MEMBERS TABLE</h1>
        </div>

        <div className="row">
          <button
            className="btn btn-success"
            style={{
              marginTop: "20px",
              marginBottom: "30px",
              marginRight: "30px",
              width: "200px",
              height: "80px",
            }}
          >
            Add Member
          </button>
          <button
            className="btn btn-primary"
            style={{
              marginTop: "20px",
              marginBottom: "30px",
              width: "200px",
              height: "80px",
            }}
          >
            Search Members
          </button>
        </div>

        <div className="row" style={{textAlign: "center"}}>
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Facility</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.emp_id}>
                  <th scope="row">{employee.emp_id}</th>
                  <td>{employee.emp_fname}</td>
                  <td>{employee.emp_lname}</td>
                  <td>{employee.emp_phone}</td>
                  <td>{employee.fac_id}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      style={{ width: "90px", marginRight: "25px" }}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger"
                      style={{ width: "90px" }}
                    >
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

export default Members;
