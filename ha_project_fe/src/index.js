import React from "react"; // nạp thư viện react
import ReactDOM from "react-dom"; // nạp thư viện react-dom
import Dashboard from "./pages/dashboard";
import PostList from "./pages/postList";

// Tạo component App
function App() {
  return (
    <div>
      {/* <Dashboard></Dashboard> */}
      <PostList></PostList>
    </div>
  );
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById("root"));
