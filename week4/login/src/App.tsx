import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Global, ThemeProvider } from "@emotion/react";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import MyPage from "./pages/Mypage/Mypage";
import theme from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
