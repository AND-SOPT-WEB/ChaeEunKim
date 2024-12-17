import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import MyPage from "../pages/Mypage/Mypage";
import Signup from "../pages/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/mypage", element: <MyPage /> },
    ],
  },
]);

export default router;
