import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import HeaderAdmin from "../../components/admin/Header";
import LeftbarAdmin from "../../components/admin/leftbar";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <HeaderAdmin></HeaderAdmin>
        <div className="container-fluid p-0">
          <div className="row mx-0">
            <div className="col-3 p-0">
              <LeftbarAdmin></LeftbarAdmin>
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
