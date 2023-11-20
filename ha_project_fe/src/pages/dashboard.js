import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/admin/dashboard.module.css";
import HeaderAdmin from "../components/admin/headerAdmin";
import Leftbar from "../components/admin/leftbar";

const Dashboard = () => {
  return (
    <div>
      <HeaderAdmin></HeaderAdmin>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 p-0">
            <Leftbar />
            <div className={`col-9 ${styles.containerContent}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
