import React, { Component } from "react";

class Members extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serverURL: "",
      // Form 1
      f1_members: [],
      formOneId: 0,
      // Form 2
      f2_members: [],
      formTwoId: 0,
      // Form 3
      f3_members: [],
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
    fetch(this.state.serverURL + "/form_three/member/" + this.state.searchId, {
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
            f3_members: result,
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
        newId = this.state.f1_members.length - 1;
      } else {
        newId = this.state.f2_members.length - 1;
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

    if (form === "formOne" && newId == this.state.f1_members.length - 1) {
      newId = 0;
    } else if (
      form === "formTwo" &&
      newId == this.state.f2_members.length - 1
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
        formOneId: this.state.f1_members.length - 1,
      });
    } else {
      this.setState({
        formTwoId: this.state.f2_members.length - 1,
      });
    }
  }

  async componentDidMount() {
    // Set base URL to backend server
    await this.setState({
      serverURL: window.location.origin
    });

    // Form 1: fetch data
    await fetch(this.state.serverURL + "/form_one/member", {
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
            f1_members: result,
          });
        },
        (error) => {
          console.log(error);
        }
      );

    // Form 2: fetch data
    await fetch(this.state.serverURL + "/form_two/member", {
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
            f2_members: result,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    const {
      f1_members,
      f2_members,
      formOneId,
      formTwoId,
      f3_members,
      searchId,
    } = this.state;

    return (
      <div style={{ padding: "40px", paddingBottom: "500px" }}>
        <div className="row">
          <h1 className="display-5" style={styles.mainHeader}>
            MEMBERS TABLE
          </h1>
        </div>
        {/*********************** FORM 1 ***********************/}

        <div className="row" style={{ fontSize: "60px", marginTop: "20px" }}>
          FORM 1
        </div>
        <div className="row">
          <p>
            Underlying query: <b>SELECT * FROM member;</b>
          </p>
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Member Id
          </span>
          <input
            type="text"
            className="col-md-3"
            value={f1_members.length == 0 ? "" : f1_members[formOneId].mem_id}
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            First Name
          </span>
          <input
            type="text"
            className="col-md-3"
            value={
              f1_members.length == 0 ? "" : f1_members[formOneId].mem_fname
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
            className="col-md-3"
            value={
              f1_members.length == 0 ? "" : f1_members[formOneId].mem_lname
            }
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Email
          </span>
          <input
            type="text"
            className="col-md-3"
            value={
              f1_members.length == 0 ? "" : f1_members[formOneId].mem_email
            }
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Is Account Active
          </span>
          <input
            type="text"
            className="col-md-3"
            value={
              f1_members.length == 0 ? "" : f1_members[formOneId].mem_is_active
            }
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Total Paid
          </span>
          <input
            type="text"
            className="col-md-3"
            value={
              f1_members.length == 0 ? "" : f1_members[formOneId].mem_total_paid
            }
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Tier Code
          </span>
          <input
            type="text"
            className="col-md-3"
            value={
              f1_members.length == 0 ? "" : f1_members[formOneId].tier_code
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
              SELECT mem_fname, mem_lname, tier_name FROM member INNER JOIN
              membership_tier ON member.tier_code = membership_tier.tier_code;
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
              f2_members.length == 0 ? "" : f2_members[formTwoId].mem_fname
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
              f2_members.length == 0 ? "" : f2_members[formTwoId].mem_lname
            }
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Tier Name
          </span>
          <input
            type="text"
            className=" col-md-3"
            value={
              f2_members.length == 0 ? "" : f2_members[formTwoId].tier_name
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
              SELECT mem_id, mem_fname, mem_lname, mem_email, mem_is_active,
              mem_total_paid, tier_code FROM member WHERE mem_id = [INPUT ID];
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
            Member Id
          </span>
          <input
            type="text"
            className=" col-md-3"
            value={f3_members.length == 0 ? "" : f3_members[0].mem_id}
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            First Name
          </span>
          <input
            type="text"
            className=" col-md-3"
            value={f3_members.length == 0 ? "" : f3_members[0].mem_fname}
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
            value={f3_members.length == 0 ? "" : f3_members[0].mem_lname}
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Email
          </span>
          <input
            type="text"
            className=" col-md-3"
            value={f3_members.length == 0 ? "" : f3_members[0].mem_email}
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Is Account Active
          </span>
          <input
            type="text"
            className="col-md-3"
            value={
              f3_members.length == 0 ? "" : f3_members[0].mem_is_active
            }
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Total Paid
          </span>
          <input
            type="text"
            className="col-md-3"
            value={
              f3_members.length == 0 ? "" : f3_members[0].mem_total_paid
            }
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Tier Code
          </span>
          <input
            type="text"
            className="col-md-3"
            value={
              f3_members.length == 0 ? "" : f3_members[0].tier_code
            }
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

export default Members;
