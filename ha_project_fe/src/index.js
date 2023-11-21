import React from "react"; // nạp thư viện react
import ReactDOM from "react-dom"; // nạp thư viện react-dom
import Dashboard from "./pages/dashboard";
import HeaderAdmin from "./components/admin/Header";
import Leftbar from "./components/admin/Leftbar";

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

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById("root"));
