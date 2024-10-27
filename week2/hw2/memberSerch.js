import { members } from './members.js';

if (!localStorage.getItem("membersData")) {
  localStorage.setItem("membersData", JSON.stringify(members));
}

const getData = JSON.parse(localStorage.getItem("membersData"));


getData.forEach((한줄)=> {
  let {name, englishName, gender, github, id, role, firstWeekGroup, secondWeekGroup} =한줄;
  console.log( github, );
})