import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/admin/leftbarAdmin.module.css";

const Leftbar = () => {
  return (
    <div className={`${styles.containerLeftbar}`}>
      <nav className="navbar navbar-vertical w-100">
        <ul className="navbar-nav w-100">
          <li
            className={`nav-item border-bottom border-white px-5 ${styles.menu}`}
          >
            <a className="nav-link text-white" href="#">
              <i className="bi bi-house"></i>
              Menu 1
            </a>
          </li>
          <li
            className={`nav-item border-bottom border-white px-5 ${styles.menu}`}
          >
            <a className="nav-link text-white" href="#">
              <i className="bi bi-file-earmark-person"></i>
              Menu 2
            </a>
          </li>
          <li
            className={`nav-item border-bottom border-white px-5 ${styles.menu}`}
          >
            <a className="nav-link text-white" href="#">
              <i className="bi bi-file-earmark-person"></i>
              Menu 3
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Leftbar;
