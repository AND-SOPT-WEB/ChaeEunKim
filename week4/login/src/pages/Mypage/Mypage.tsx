import { SetStateAction, useState } from "react";
import Header from "../../components/MyPage/Header"
import MyPageHobby from "../../components/MyPage/MyPageHobby"
import MyPageInfo from "../../components/MyPage/MyPageInfo";

const MyPage = () => {
  const [selected, setSelected] = useState("취미");

  const changeSelect = (menu: SetStateAction<string>) => {
    setSelected(menu)
  }

  return (
    <>
        <Header selected={selected} onChange={changeSelect}/>

        <main>
          {selected === '취미' ?
          <MyPageHobby /> : <MyPageInfo />}
        </main>
        
    </>
  )
}

export default MyPage