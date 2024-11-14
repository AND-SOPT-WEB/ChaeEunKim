/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { myPageStyle } from "./MyPage.style";
import axios from "axios";

const MyPageHobby = () => {
  const [hobby, setHobby] = useState("");
  const [no, setNo] = useState("");
  const [othersHobby, setOthersHobby] = useState("");
  const [isHobbyVisible, setIsHobbyVisible] = useState(false);

  const myHobby = async () => {
    const response: any = await axios.get(
      "http://211.188.53.75:8080/user/my-hobby",
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    setHobby(response.data.result.hobby);
  };

  useEffect(() => {
    myHobby();
  }, []);

  const searchHobby = async () => {
    try {
      const response: any = await axios.get(
        `http://211.188.53.75:8080/user/${no}/hobby`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setOthersHobby(response.data.result.hobby);
      setIsHobbyVisible(true);
    } catch (error) {
      alert("다시 시도하세요.");
    }
  };

  // 페이지 접속 시 myHobby 함수 실행

  return (
    <main css={myPageStyle}>
      <div className="container">
        <div className="top">
          <h3>취미</h3>
        </div>

        <div className="bottom">
          <h3>나의 취미</h3>
          <p>{hobby}</p>
          <h3>다른 사람들의 취미</h3>
          <input
            type="text"
            placeholder="사용자 번호"
            onChange={(e) => {
              setNo(e.target.value);
            }}
          />
          <button onClick={searchHobby}>검색</button>
          <p onClick={() => setIsHobbyVisible(!isHobbyVisible)}>
            {isHobbyVisible ? `${no}번 사용자의 취미: ${othersHobby}` : null}
          </p>
        </div>
      </div>
    </main>
  );
};

export default MyPageHobby;
