import React, { Component } from "react";

class Tiers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serverURL: "",
      // Form 1
      f1_tiers: [],
      formOneId: 0,
      // Form 3
      f3_tiers: [],
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
      this.state.serverURL +
        "/form_three/tier/" +
        this.state.searchId,
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
            f3_tiers: result,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  // Used to keep track of current row displayed in form one/two - set to first Id
  setFirstId() {
    this.setState({
      formOneId: 0,
    });
  }

  // Used to keep track of current row displayed in form one/two - set to previous Id
  setPrevId() {
    let newId = this.state.formOneId;

    if (newId == 0) {
      newId = this.state.f1_tiers.length - 1;
    } else {
      newId--;
    }

    this.setState({
      formOneId: newId,
    });
  }

  // Used to keep track of current row displayed in form one/two - set to next Id
  setNextId() {
    let newId = this.state.formOneId;

    if (newId == this.state.f1_tiers.length - 1) {
      newId = 0;
    } else {
      newId++;
    }

    this.setState({
      formOneId: newId,
    });
  }

  // Used to keep track of current row displayed in form one/two - set to last Id
  setLastId() {
    this.setState({
      formOneId: this.state.f1_tiers.length - 1,
    });
  }

  async componentDidMount() {
    // Set base URL to backend server
    await this.setState({
      serverURL: "http://localhost:8080",
      // serverURL: window.location.origin
    });

    // Form 1: fetch data
    await fetch(this.state.serverURL + "/form_one/membership_tier;", {
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
            f1_tiers: result,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    const {
      f1_tiers,
      formOneId,
      f3_tiers,
      searchId,
    } = this.state;

    return (
      <div style={{ padding: "40px", paddingBottom: "500px" }}>
        <div className="row">
          <h1 className="display-5" style={styles.mainHeader}>
            MEMBERSHIP TIERS TABLE
          </h1>
        </div>
        {/*********************** FORM 1 ***********************/}

        <div className="row" style={{ fontSize: "60px", marginTop: "20px" }}>
          FORM 1
        </div>
        <div className="row">
          <p>
            Underlying query: <b>SELECT * FROM membership_tier;</b>
          </p>
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Tier Code
          </span>
          <input
            type="text"
            className="col-md-3"
            value={f1_tiers.length == 0 ? "" : f1_tiers[formOneId].tier_code}
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Tier Name
          </span>
          <input
            type="text"
            className="col-md-3"
            value={f1_tiers.length == 0 ? "" : f1_tiers[formOneId].tier_name}
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Tier Price
          </span>
          <input
            type="text"
            className="col-md-3"
            value={f1_tiers.length == 0 ? "" : f1_tiers[formOneId].tier_price}
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
            <b style={{ fontSize: "50px" }}>N/A</b>
          </p>
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
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Tier Code
          </span>
          <input
            type="text"
            className="col-md-3"
            value={f3_tiers.length == 0 ? "" : f3_tiers[0].tier_code}
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Tier Name
          </span>
          <input
            type="text"
            className="col-md-3"
            value={f3_tiers.length == 0 ? "" : f3_tiers[0].tier_name}
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Tier Price
          </span>
          <input
            type="text"
            className="col-md-3"
            value={f3_tiers.length == 0 ? "" : f3_tiers[0].tier_price}
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

export default Tiers;
