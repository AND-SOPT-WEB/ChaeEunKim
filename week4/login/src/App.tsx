import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Global } from "@emotion/react";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./pages/Login/Login";
import Signup from './pages/Signup/Signup';

const App = () => {
  return (
    <Router>
      <Global styles={GlobalStyle} />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
