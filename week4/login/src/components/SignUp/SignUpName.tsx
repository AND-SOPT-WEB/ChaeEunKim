import { signupStyle, errorMessageStyle } from "./SignUp.style";

interface signuptype {
  onNext: () => void;
  userName: string;
  setUserName: (value: string) => void;
}

const SignUpName = ({ onNext, userName, setUserName }: signuptype) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const isButtonDisabled = userName.trim() === "" || userName.length > 8;

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
      {userName.length > 8 && (
        <span css={errorMessageStyle}>이름은 8자 이하로 입력해주세요</span>
      )}
      <button
        type="submit"
        onClick={onNext}
        disabled={isButtonDisabled}
      >
        다음
      </button>
    </main>
  );
};

export default SignUpName;
