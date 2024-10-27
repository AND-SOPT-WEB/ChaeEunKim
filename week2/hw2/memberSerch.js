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



function addTable(data) {
  // tbody.innerHTML = "";

  data.forEach((member) => {
    const row = document.createElement("tr");

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
  const newData = getData.filter((member, index) => {
    const checkRow = tbody.rows[index].querySelector(".check");
    return !checkRow.checked;
  });

  localStorage.setItem("membersData", JSON.stringify(newData))

  window.location.reload();
  tbody.innerHTML = "";
  addTable(newData);
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

addTable(getData);