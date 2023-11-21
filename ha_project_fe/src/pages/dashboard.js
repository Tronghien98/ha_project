import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/admin/dashboard.module.css";
import HeaderAdmin from "../components/admin/Header";
import Leftbar from "../components/admin/Leftbar";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <HeaderAdmin></HeaderAdmin>
        <div className="">
          <div className="row">
            <div className="col-3">
              <Leftbar></Leftbar>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
