import React, { Component, Fragment } from "react";

import styles from "../../styles/admin/headerAdmin.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../../images/Logo + Hải âu + Slogan.png";
import user from "../../../images/icon-user-default.png";
import { Offcanvas, OffcanvasBody, Navbar, NavbarBrand } from "reactstrap";

class HeaderAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = { isOffcanvasOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOffcanvasOpen: !this.state.isOffcanvasOpen,
    });
  }

  render() {
    return (
      <div className="container-fluid p-0">
        <div className={`${styles.containerNavbar} row`}>
          <div className={`${styles.containerLogo} col-3`}>
            <img className={`${styles.logo}`} src={logo} alt="logo" />
          </div>
          <div className={`${styles.containerHeaderRight} col-9`}>
            <div className={`${styles.containerUser}`}>
              <p className={`${styles.userName}`}>Admin</p>
              <div className={`${styles.containerIconUser}`}>
                <img
                  src={user}
                  alt="admin"
                  className={`${styles.iconUser}`}
                  onClick={this.toggle}
                />
              </div>
            </div>
          </div>
          <Offcanvas
            isOpen={this.state.isOffcanvasOpen}
            width={300}
            toggle={this.toggle}
            direction="end"
          >
            <OffcanvasBody>
              <strong>This is the Offcanvas body.</strong>
            </OffcanvasBody>
          </Offcanvas>
          {/* <NavbarToggler onClick={this.toggle} /> */}
        </div>
      </div>
    );
  }
}

export default HeaderAdmin;
