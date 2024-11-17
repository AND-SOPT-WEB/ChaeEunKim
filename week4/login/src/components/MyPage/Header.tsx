/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import { headerStyle, leftStyle, rightStyle } from "./Header.style";

interface HeaderType {
  selected: string;
  onChange: (value: string) => void;
}

const Header: React.FC<HeaderType> = ({ onChange }) => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header css={headerStyle}>
      <div className="left" css={leftStyle}>
        <h2>마이페이지</h2>
        <button onClick={() => onChange("취미")}>취미</button>
        <button onClick={() => onChange("내 정보")}>내 정보</button>
      </div>

      <div className="right" css={rightStyle}>
        <button onClick={logOut}>로그아웃</button>
      </div>
    </header>
  );
};

export default Header;
