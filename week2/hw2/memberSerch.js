import { members } from './members.js';

if (!localStorage.getItem("membersData")) {
  localStorage.setItem("membersData", JSON.stringify(members));
}

const getData = JSON.parse(localStorage.getItem("membersData"));

const tbody = document.querySelector("#members tbody")

function addTable(data) {
  // tbody.innerHTML = "";

  data.forEach((member, index) => {
    const row = document .createElement("tr");

    row.innerHTML = `
      <td><input type="checkbox" class="check"></td>
      <td>${member.name}</td>
      <td>${member.englishName}</td>
      <td>${member.github}</td>
      <td>${member.gender}</td>
      <td>${member.role}</td>
      <td>${member.firstWeekGroup}</td>
      <td>${member.secondWeekGroup}</td>
    `;

    tbody.appendChild(row);
  });
}

addTable(getData)

// getData.forEach((한줄)=> {
//   let {name, englishName, gender, github, id, role, firstWeekGroup, secondWeekGroup} =한줄;
//   console.log( github, );
// })