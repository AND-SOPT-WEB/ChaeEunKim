/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { myPageStyle } from "./MyPage.style";
import axios from "axios";

const MyPageInfo = () => {
  const [newPassword, setNewPassword] = useState("");
  const [newHobby, setNewHobby] = useState("");

  const changePassword = (e: React.ChangeEvent<HTMLInputElement> ) => {
    setNewPassword(e.target.value);
  };
  const changeHobby = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewHobby(e.target.value);
  };

  const updateUserInfo = async () => {
    const response: React.ChangeEvent<HTMLInputElement> = await axios.put(
      "http://223.130.135.50:8085/user",
      { password: newPassword, hobby: newHobby },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
  };

  return (
    <main css={myPageStyle}>
      <div>
        <div className="top">
          <h3>내 정보 수정하기</h3>
        </div>

        <div className="bottom">
          <h3>새 비밀번호</h3>
          <input
            type="text"
            name="newPassword"
            value={newPassword}
            onChange={changePassword}
          />
          <h3>새 취미</h3>
          <input
            type="text"
            name="newHobby"
            value={newHobby}
            onChange={changeHobby}
          />
          <button onClick={updateUserInfo}>수정하기</button>
        </div>
      </div>
    </main>
  );
};

export default MyPageInfo;
