/** @jsxImportSource @emotion/react */
import { myPageStyle } from "./MyPage.style"

const MyPageInfo = () => {
  return (
    <main css={myPageStyle}>
      <div>
        <div className="top">
          <h3>내 정보 수정하기</h3>
        </div>

        <div className="bottom">
          <h3>새 비밀번호</h3>
          <input type="text" />
          <h3>새 취미</h3>
          <input type="text" />
          <button>수정하기</button>
        </div>
      </div>
    </main>
  )
}

export default MyPageInfo