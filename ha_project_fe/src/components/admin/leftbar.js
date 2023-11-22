import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/admin/leftbarAdmin.module.css";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

class Leftbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`${styles.containerLeftbar}`}>
        <ListGroup>
          <ListGroupItem>Trang chủ</ListGroupItem>
          <ListGroupItem>Trang chủ</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default Leftbar;
