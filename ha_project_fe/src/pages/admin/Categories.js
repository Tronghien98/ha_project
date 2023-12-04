import React, { Component, Fragment } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import styles from "../../styles/admin/categories.module.css";

import HeaderAdmin from "../../components/admin/Header";
import LeftbarAdmin from "../../components/admin/Leftbar";

import { Input, Button, Table } from "reactstrap";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conditionCatName: "",
      categories: [],
    };
  }
  handleInputCatNameChange = (e) => {
    this.setState({ conditionCatName: e.target.value });
  };
  handleSearchCategory = () => {
    const { conditionCatName } = this.state;

    fetch(`api/v1/cats/search?catName=${conditionCatName}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ categories: data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  render() {
    const { conditionCatName, categories } = this.state;
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
                <div>
                  <form>
                    <div className={`${styles.label}`}>
                      <label>Tên danh mục</label>
                    </div>

                    <Input
                      className={`${styles.input}`}
                      value={conditionCatName}
                      onChange={this.handleInputCatNameChange}
                    />

                    <div>
                      <Button
                        className={`${styles.btnPrimary}`}
                        onClick={this.handleSearchCategory}
                      >
                        Tìm kiếm
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
              <div className={`${styles.containerTable}`}>
                <div className={`${styles.headerResult}`}>
                  <h5>Kết quả tìm kiếm</h5>
                  <Button className={`${styles.btnPrimary}`}>
                    Thêm danh mục
                  </Button>
                </div>
                <Table striped bordered>
                  <thead>
                    <tr>
                      <th className={styles.colTableNum}>#</th>
                      <th>Tên danh mục</th>
                      <th className={styles.colTableAction}>Xử lý</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={styles.colTableNum}>1</td>
                      <td>Danh mục 1</td>
                      <td>
                        <div>
                          <Button color="danger" className="mx-1 py-0">
                            Xóa
                          </Button>
                          <Button color="warning" className="mx-1 py-0">
                            Sửa
                          </Button>
                          <div className={styles.btnUpDown}>
                            <AiFillCaretUp />
                            <AiFillCaretDown />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.colTableNum}>2</td>
                      <td>Danh mục 2</td>
                      <td>
                        <div>
                          <Button color="danger" className="mx-1 py-0">
                            Xóa
                          </Button>
                          <Button color="warning" className="mx-1 py-0">
                            Sửa
                          </Button>
                          <AiFillCaretUp />
                          <AiFillCaretDown />
                        </div>
                      </td>
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
