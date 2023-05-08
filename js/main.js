const search = document.querySelector(".bx-search");
const menu = document.querySelector(".menu-icon");

let searching = document.querySelector(".search");
let note = document.querySelector(".note");
let list = document.querySelector(".lista");

search.addEventListener("click", () => {
  searching.classList.toggle("input");
});

menu.addEventListener("click", () => {
  note.classList.toggle("active");
  list.classList.toggle("activo");
});
