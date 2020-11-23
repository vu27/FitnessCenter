import React, { Component } from "react";

class Equipment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serverURL: "",
      // Form 1
      f1_equipment: [],
      formOneId: 0,
      // Form 2
      f2_equipment: [],
      formTwoId: 0,
      // Form 3
      f3_equipment: [],
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
      this.state.serverURL + "/form_three/equipment/" + this.state.searchId,
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
            f3_equipment: result,
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
        newId = this.state.f1_equipment.length - 1;
      } else {
        newId = this.state.f2_equipment.length - 1;
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

    if (form === "formOne" && newId == this.state.f1_equipment.length - 1) {
      newId = 0;
    } else if (
      form === "formTwo" &&
      newId == this.state.f2_equipment.length - 1
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
        formOneId: this.state.f1_equipment.length - 1,
      });
    } else {
      this.setState({
        formTwoId: this.state.f2_equipment.length - 1,
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
    await fetch(this.state.serverURL + "/form_one/equipment", {
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
            f1_equipment: result,
          });
        },
        (error) => {
          console.log(error);
        }
      );

    // Form 2: fetch data
    await fetch(this.state.serverURL + "/form_two/equipment", {
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
            f2_equipment: result,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    const {
      f1_equipment,
      f2_equipment,
      formOneId,
      formTwoId,
      f3_equipment,
      searchId,
    } = this.state;

    return (
      <div style={{ padding: "40px", paddingBottom: "500px" }}>
        <div className="row">
          <h1 className="display-5" style={styles.mainHeader}>
            EQUIPMENT TABLE
          </h1>
        </div>
        {/*********************** FORM 1 ***********************/}

        <div className="row" style={{ fontSize: "60px", marginTop: "20px" }}>
          FORM 1
        </div>
        <div className="row">
          <p>
            Underlying query: <b>SELECT * FROM equipment;</b>
          </p>
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Equipment Id
          </span>
          <input
            type="text"
            className="col-md-3"
            value={
              f1_equipment.length == 0 ? "" : f1_equipment[formOneId].equip_id
            }
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Equipment Name
          </span>
          <input
            type="text"
            className="col-md-3"
            value={
              f1_equipment.length == 0 ? "" : f1_equipment[formOneId].equip_name
            }
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Equipment Quantity
          </span>
          <input
            type="text"
            className="col-md-3"
            value={
              f1_equipment.length == 0
                ? ""
                : f1_equipment[formOneId].equip_quantity
            }
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Facility Id
          </span>
          <input
            type="text"
            className="col-md-3"
            value={
              f1_equipment.length == 0 ? "" : f1_equipment[formOneId].fac_id
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
              SELECT equip_name, fac_name FROM equipment INNER JOIN facility ON
              equipment.fac_id = facility.fac_id;
            </b>
          </p>
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Equipment Name
          </span>
          <input
            type="text"
            className=" col-md-3"
            value={
              f2_equipment.length == 0 ? "" : f2_equipment[formTwoId].equip_name
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
              f2_equipment.length == 0 ? "" : f2_equipment[formTwoId].fac_name
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
              SELECT equip_id, equip_name, equip_quantity, fac_id FROM
              vu_db.equipment WHERE equip_id = [INPUT ID];
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
            Equipment Id
          </span>
          <input
            type="text"
            className=" col-md-3"
            value={f3_equipment.length == 0 ? "" : f3_equipment[0].equip_id}
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Equipment Name
          </span>
          <input
            type="text"
            className=" col-md-3"
            value={f3_equipment.length == 0 ? "" : f3_equipment[0].equip_name}
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
          Equipment Quantity
          </span>
          <input
            type="text"
            className=" col-md-3"
            value={f3_equipment.length == 0 ? "" : f3_equipment[0].equip_quantity}
            disabled
          />
        </div>
        <div className="row">
          <span className="input-group-text" style={styles.inputSpan}>
            Facility
          </span>
          <input
            type="text"
            className=" col-md-3"
            value={f3_equipment.length == 0 ? "" : f3_equipment[0].fac_id}
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

export default Equipment;
