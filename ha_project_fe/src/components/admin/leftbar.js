import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/admin/leftbarAdmin.module.css";

class Leftbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className={`${styles.containerLeftbar} row`}></div>;
  }
}

export default Leftbar;
