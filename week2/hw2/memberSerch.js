import { members } from "./members.js";

if (!localStorage.getItem("membersData")) {
  localStorage.setItem("membersData", JSON.stringify(members));
}

const getData = JSON.parse(localStorage.getItem("membersData"));

const tbody = document.querySelector("#members tbody");
const searchBtn = document.querySelector("#searchBtn");
const resetBtn = document.querySelector("#resetBtn");
const delBtn = document.querySelector("#delBtn");
const selectAll = document.querySelector("#selectAll");
const showBtn = document.querySelector("#openModalBtn");
const modal = document.querySelector("#modal");
const closeModalBtn = document.querySelector("#closeModalBtn");
const addDataBtn = document.querySelector("#addData");

function addTable(data) {
  data.forEach((member) => {
    const row = document.createElement("tr");
    row.setAttribute("id", member.id);

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
  const searchGender = document.querySelector("#gender").value;
  const searchRole = document.querySelector("#role").value;
  const searchWeek1 = document.querySelector(".week1").value;
  const searchWeek2 = document.querySelector(".week2").value;

  const filteredData = getData.filter((member) => {
    if (searchName && !member.name.includes(searchName)) return false;
    if (
      searchEngName &&
      !member.englishName.toLowerCase().includes(searchEngName)
    )
      return false;

    if (searchGithub && !member.github.toLowerCase().includes(searchGithub))
      return false;
    if (
      searchGender &&
      searchGender !== "none" &&
      member.gender !== searchGender
    )
      return false;
    if (searchRole && searchRole !== "none" && member.role !== searchRole)
      return false;
    if (searchWeek1 && member.firstWeekGroup !== searchWeek1) return false;
    if (searchWeek2 && member.secondWeekGroup !== searchWeek2) return false;
    return true;
  });
  tbody.innerHTML = "";
  addTable(filteredData);
});

resetBtn.addEventListener("click", () => {
  document.querySelector(".name").value = "";
  document.querySelector(".eng_name").value = "";
  document.querySelector(".git_id").value = "";
  document.querySelector("select#gender").value = "";
  document.querySelector("select#role").value = "";
  document.querySelector(".week1").value = "";
  document.querySelector(".week2").value = "";
});

delBtn.addEventListener("click", () => {
  const checked = document.querySelectorAll(".check:checked");
  const checkedTrs = Array.from(checked).map((checkedTr) =>
    parseInt(checkedTr.closest("tr").id)
  );
  const newMember = getData.filter((member) => {
    return !checkedTrs.includes(member.id);
  });
  console.log(newMember);

  localStorage.setItem("membersData", JSON.stringify(newMember));

  tbody.innerHTML = "";
  addTable(newMember);
});

selectAll.addEventListener("change", () => {
  const isChecked = selectAll.checked;

  const dataCheckbox = tbody.querySelectorAll(".check");
  dataCheckbox.forEach((checkbox) => {
    checkbox.checked = isChecked;
  });
});

// tbody의 개별 체크박스 상태 변화 감지
tbody.addEventListener("change", (e) => {
  if (e.target.classList.contains("check")) {
    const dataCheckbox = tbody.querySelectorAll(".check");
    const checkedCheckbox = tbody.querySelectorAll(".check:checked");

    // 전체 체크박스가 모두 체크되었는지 확인
    selectAll.checked = dataCheckbox.length === checkedCheckbox.length;
  }
});

// 모달 열기 및 닫기 함수 분리 (화살표 함수로 변환)
const openModal = () => modal.showModal();
const closeModal = () => modal.close();

// 이벤트 리스너에서 함수 호출
showBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

addDataBtn.addEventListener("click", () => {
  const name = document.getElementById("modalName").value.trim();
  const englishName = document.getElementById("modalEnglishName").value.trim();
  const github = document.getElementById("modalGithub").value.trim();
  const gender = document.getElementById("modalGender").value;
  const role = document.getElementById("modalRole").value;
  const firstWeekGroup = document
    .getElementById("modalFirstWeekGroup")
    .value.trim();
  const secondWeekGroup = document
    .getElementById("modalSecondWeekGroup")
    .value.trim();

  if (
    !name ||
    !englishName ||
    !github ||
    !gender ||
    !role ||
    !firstWeekGroup ||
    !secondWeekGroup
  ) {
    alert("모든 필드를 입력해주세요.");
    return;
  }

  const newMember = {
    id: getData.length + 1,
    name,
    englishName,
    github,
    gender,
    role,
    firstWeekGroup,
    secondWeekGroup,
  };

  getData.push(newMember);
  localStorage.setItem("membersData", JSON.stringify(getData));

  tbody.innerHTML = "";
  addTable(getData);

  document.querySelector("form").reset();

  modal.close();
});

modal.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) modal.close();
});

addTable(getData);
