import { members } from './members.js';

if (!localStorage.getItem("membersData")) {
  localStorage.setItem("membersData", JSON.stringify(members));
}

const getData = JSON.parse(localStorage.getItem("membersData"));

const tbody = document.querySelector("#members tbody");
const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");
const delBtn = document.querySelector("#delBtn");
const selectAll = document.querySelector("#selectAll");
const showBtn = document.querySelector("#openModalBtn")
const modal = document.querySelector('#modal');
const closeModalBtn = document.querySelector("#closeModalBtn");
const addDataBtn = document.querySelector("#addData");



function addTable(data) {
data.forEach((member) => {
    const row = document.createElement("tr");
    row.setAttribute("id", member.id)

    row.innerHTML = `
      <td><input type="checkbox" class="check" /></td>
      <td>${member.name}</td>
      <td>${member.englishName}</td>
      <td><a href="https://github.com/${member.github}" target="_blank">${member.github}</a></td>
      <td>${member.gender}</td>
      <td>${member.role}</td>
      <td>${member.firstWeekGroup}</td>
      <td>${member.secondWeekGroup}</td>
    `;

    tbody.appendChild(row);
  });
}

searchBtn.addEventListener("click", () => {
  const searchName = document.querySelector(".name").value;
  const searchEngName = document.querySelector(".eng_name").value.toLowerCase();
  const searchGithub = document.querySelector(".git_id").value.toLowerCase();
  const searchGender = document.querySelector('select#gender').value;
  const searchRole = document.querySelector('select#role').value;
  const searchWeek1 = document.querySelector(".week1").value;
  const searchWeek2 = document.querySelector(".week2").value;

  const filteredData = getData.filter(member => 
    member.name.includes(searchName) && 
    member.englishName.toLowerCase().includes(searchEngName) &&
    member.github.toLowerCase().includes(searchGithub) &&
    (searchGender === "none" || member.gender === searchGender) &&
    (searchRole === "none" || member.role.toLowerCase() === searchRole) &&
    (searchWeek1 === "" || member.firstWeekGroup == searchWeek1) &&
    (searchWeek2 === "" || member.secondWeekGroup == searchWeek2)
  );

  tbody.innerHTML = "";
  addTable(filteredData);
});

resetBtn.addEventListener("click", () => {
  // document.querySelector(".name").value = '';
  // document.querySelector(".eng_name").value = '';
  // document.querySelector(".git_id").value = '';
  // document.querySelector('select#gender').value = '';
  // document.querySelector('select#role').value = '';
  // document.querySelector(".week1").value = '';
  // document.querySelector(".week2").value = '';

  window.location.reload();
});

delBtn.addEventListener("click", () => {
  const checked = document.querySelectorAll(".check:checked");
  const checkedTrs = Array.from(checked).map((checkedTr) => parseInt(
    checkedTr.closest("tr").id
  ))
  const newMember = getData.filter(member => {
    return !checkedTrs.includes(member.id);
});
  console.log(newMember);

  localStorage.setItem("membersData", JSON.stringify(newMember))

  // window.location.reload();
  tbody.innerHTML = "";
  addTable(newMember);
});



selectAll.addEventListener("change", () => {
  const isChecked = selectAll.checked;

  const dataCheckbox = tbody.querySelectorAll(".check")
  dataCheckbox.forEach(checkbox => {
    checkbox.checked = isChecked;
  });
});

showBtn.addEventListener("click", () => {
  modal.showModal();
});

closeModalBtn.addEventListener("click", () => {
  modal.close();
});

addDataBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const englishName = document.getElementById("englishName").value;
  const github = document.getElementById("github").value;
  const gender = document.getElementById("gender").value;
  const role = document.getElementById("role").value;
  const firstWeekGroup = document.getElementById("firstWeekGroup").value;
  const secondWeekGroup = document.getElementById("secondWeekGroup").value;

  if (!name || !englishName || !github || !gender || !role || !firstWeekGroup || !secondWeekGroup) {
    alert("모든 필드를 입력해주세요.");
    return;
  }

  const newMember = {
    id: getData.length + 1,  // 이게 뭘까.....
    name,
    englishName,
    github,
    gender,
    role,
    firstWeekGroup,
    secondWeekGroup
  };

  console.log(newMember);

  getData.push(newMember);
  console.log(getData);

  localStorage.setItem("membersData", JSON.stringify(getData));
  
  const row = document.createElement("tr");

  row.innerHTML = `
    <td><input type="checkbox" class="check"></td>
    <td>${newMember.name}</td>
    <td>${newMember.englishName}</td>
    <td>${newMember.github}</td>
    <td>${newMember.gender}</td>
    <td>${newMember.role}</td>
    <td>${newMember.firstWeekGroup}</td>
    <td>${newMember.secondWeekGroup}</td>
  `;

  tbody.appendChild(row);

  document.getElementById("name").value = '';
  document.getElementById("englishName").value = '';
  document.getElementById("github").value = '';
  document.getElementById("gender").value = '';
  document.getElementById("role").value = '';
  document.getElementById("firstWeekGroup").value = '';
  document.getElementById("secondWeekGroup").value = '';

  modal.close();

  window.location.reload();
});

modal.addEventListener('click', function(event) {
  const target = event.target;
  const rect = target.getBoundingClientRect();
  if (rect.left > event.clientX || rect.right < event.clientX ||
    rect.top > event.clientY || rect.bottom < event.clientY) {
      modal.close();
    }
})

addTable(getData);