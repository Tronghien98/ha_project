import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import HeaderAdmin from "../../components/admin/Header";
import LeftbarAdmin from "../../components/admin/Leftbar";
import { Input, Button, Table } from "reactstrap";

import styles from "../../styles/admin/products.module.css";
import theme from "../../styles/admin/theme.module.css";

class Products extends Component {
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
            <div className={`col-9 ${theme.background}`}>
              <div className={`${styles.containerConditionSearch}`}>
                <form className={`${styles.formSeach}`}>
                  <div>
                    <label>Danh mục</label>
                    <input />
                  </div>
                  <div>
                    <label>Tên sản phẩm</label>
                    <input />
                  </div>
                  <div>
                    <label>Thông số</label>
                    <input />
                    <label>Thông tin chi tiết</label>
                    <input />
                  </div>
                  <div>
                    <button>Tìm kiếm</button>
                    <button>Reset</button>
                  </div>
                </form>
                <div className={`${theme.headerResult}`}>
                  <h5>Kết quả tìm kiếm</h5>
                  <Button className={`${theme.btnPrimary}`}>
                    Thêm danh mục
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
