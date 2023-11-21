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
      <Navbar className={`${styles.containerNavbar}`}>
        <NavbarBrand>
          <img className={`${styles.logo}`} src={logo} alt="logo" />
        </NavbarBrand>
        <NavbarBrand>
          <div className={`${styles.containerUser}`}>
            <p className={`${styles.userName}`}>Admin</p>

            <div>
              <img
                src={user}
                alt="admin"
                className={`${styles.iconUser}`}
                onClick={this.toggle}
              />
            </div>
          </div>
        </NavbarBrand>
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
      </Navbar>
    );
  }
}

export default HeaderAdmin;
