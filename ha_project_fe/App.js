import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";

import Dashboard from "./src/pages/admin/Dashboard";
import Categories from "./src/pages/admin/Categories";
import Products from "./src/pages/admin/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="danh-muc" element={<Categories />} />
        <Route path="san-pham" element={<Products />} />
      </Routes>
    </Router>
  );
}
export default App;
