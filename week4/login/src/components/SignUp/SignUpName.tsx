import { signupStyle } from "./SignUp.style";

interface signuptype {
  onNext: () => void;
  userName: string;
  setUserName: (value: string) => void
}

const SignUpName: React.FC<signuptype> = ({ onNext, userName, setUserName }) => {
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
    }

  return (
    <main css={signupStyle}>
      <h4>이름</h4>
      <input
        type="text"
        name="userName"
        placeholder="사용자 이름을 입력해주세요"
        value={userName}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        onClick={onNext}
        disabled={userName.trim() === ""}
      >
        다음
      </button>
    </main>
  );
};

export default SignUpName;
