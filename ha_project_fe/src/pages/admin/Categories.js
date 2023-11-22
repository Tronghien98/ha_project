import React, { Component, Fragment } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/admin/categories.module.css";

import HeaderAdmin from "../../components/admin/Header";
import LeftbarAdmin from "../../components/admin/Leftbar";

import { Input, Button, Table } from "reactstrap";

class Categories extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <HeaderAdmin />
        <div className="container-fluid p-0">
          <div className="row mx-0">
            <div className="col-3 p-0">
              <LeftbarAdmin />
            </div>
            <div className={`col-9 ${styles.containerContent}`}>
              <div className={`${styles.containerCategory}`}>
                <div className={`${styles.conditionSeach}`}>
                  <form>
                    <div className={`${styles.label}`}>
                      <label>Tên danh mục</label>
                    </div>

                    <Input className={`${styles.input}`} />

                    <div>
                      <Button className={`${styles.btnSeach}`}>Tìm kiếm</Button>
                    </div>
                  </form>
                </div>
              </div>
              <div className={`${styles.containerTable}`}>
                <Table striped bordered>
                  <thead>
                    <tr>
                      <th className={styles.colTableNum}>#</th>
                      <th>Tên danh mục</th>
                      <th>Xử lý</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={styles.colTableNum}>1</td>
                      <td>Danh mục 1</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className={styles.colTableNum}>2</td>
                      <td>Danh mục 2</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
