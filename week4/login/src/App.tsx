import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Global } from "@emotion/react";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import MyPage from "./pages/Mypage/Mypage";

const App = () => {
  return (
    <Router>
      <Global styles={GlobalStyle} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Router>
  );
};

export default App;
