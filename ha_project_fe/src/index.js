import React, { Component } from "react"; // nạp thư viện react
import ReactDOM from "react-dom"; // nạp thư viện react-dom
import Dashboard from "./pages/admin/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Tạo component App
function App() {
  return (
    <div>
      <Dashboard></Dashboard>
      {/* <PostList></PostList> */}
      {/* <AppNavbar></AppNavbar> */}
      {/* <HeaderAdmin></HeaderAdmin> */}
      {/* <Leftbar></Leftbar> */}
    </div>
  );
}

export default App;

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById("root"));
