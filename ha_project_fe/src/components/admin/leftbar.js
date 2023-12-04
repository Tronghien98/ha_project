import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/admin/leftbarAdmin.module.css";
import { Link } from "react-router-dom";

class LeftbarAdmin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`${styles.containerLeftbar}`}>
        <nav className="navbar navbar-vertical w-100 py-5">
          <ul className="navbar-nav w-100 py-5">
            <li
              className={`nav-item border-top border-bottom border-white px-5 ${styles.menu}`}
            >
              <Link to="/" className="nav-link text-white">
                Trang chủ
              </Link>
            </li>
            <li
              className={`nav-item border-bottom border-white px-5 ${styles.menu}`}
            >
              <Link to="/danh-muc" className="nav-link text-white">
                Quản lí danh mục
              </Link>
            </li>
            <li
              className={`nav-item border-bottom border-white px-5 ${styles.menu}`}
            >
              <a className="nav-link text-white" href="#">
                <i className="bi bi-file-earmark-person"></i>
                Quản lí sản phẩm
              </a>
            </li>
            <li
              className={`nav-item border-bottom border-white px-5 ${styles.menu}`}
            >
              <a className="nav-link text-white" href="#">
                <i className="bi bi-file-earmark-person"></i>
                Quản lí bài viết
              </a>
            </li>
            <li
              className={`nav-item border-bottom border-white px-5 ${styles.menu}`}
            >
              <a className="nav-link text-white" href="#">
                <i className="bi bi-file-earmark-person"></i>
                Quản lí thông tin
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default LeftbarAdmin;
