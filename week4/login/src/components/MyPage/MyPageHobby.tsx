/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { myPageStyle } from "./MyPage.style";
import axios from "axios";

const MyPageHobby = () => {
  const [hobby, setHobby] = useState("");
  const [no, setNo] = useState("");

  const myHobby = async () => {
    const response: any = await axios.get(
      "http://211.188.53.75:8080/user/my-hobby",
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    // console.log(response);
    setHobby(response.data.result.hobby);
  };

  const searchHobby = async () => {
    const response: any = await axios.get(
      `http://211.188.53.75:8080/user/${no}/hobby`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    // console.log(response)
    setNo(response.data.result.hobby);
  };

  // 페이지 접속 시 myHobby 함수 실행
  useEffect(() => {
    myHobby();
  }, []);

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
        </div>
      </div>
    </main>
  );
};

export default MyPageHobby;
