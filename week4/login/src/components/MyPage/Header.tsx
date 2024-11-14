/** @jsxImportSource @emotion/react */
import { headerStyle, leftStyle, rightStyle } from "./Header.style"

interface HeaderType {
  selected: string
  onChange: (value: string) => void
}

const Header: React.FC<HeaderType> = ({ onChange }) => {
  
  return (
    <header css={headerStyle}>
        <div className="left" css={leftStyle}>
          <h2>마이페이지</h2>
          <button
            // isActive={selected === '취미'}
            onClick={() => onChange('취미')}>
            취미
          </button>
          <button
            // isActive={selected === '내 정보'}
            onClick={() => onChange('내 정보')}>
            내 정보
          </button>
        </div>

        <div className="right" css={rightStyle}>
          <button>로그아웃</button>
        </div>
        
    </header>
  )
}

export default Header