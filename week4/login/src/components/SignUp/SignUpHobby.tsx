/** @jsxImportSource @emotion/react */
import { signupStyle } from './SignUp.style'

const SignUpHobby = () => {
  return (
    <main css={signupStyle}>
        <h4>취미</h4>
        <input
            type="text"
            name="hobby"
            placeholder="취미를 입력해주세요"
        />
        <button
        type="submit"
        // onClick={onNext}
        // disabled
      >
        회원가입
      </button>
    </main>
  )
}

export default SignUpHobby