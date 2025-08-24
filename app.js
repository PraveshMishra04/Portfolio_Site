let button = document.querySelector("#home");
let page1 = document.querySelector("#page1");
button.addEventListener("click", () => {
  page1.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
let button2 = document.querySelector("#about");
let page2 = document.querySelector("#page2");
button2.addEventListener("click", () => {
  page2.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
let button3 = document.querySelector("#project");
let page3 = document.querySelector("#page3");
button3.addEventListener("click", () => {
  page3.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
let button4 = document.querySelector("#contact");
let page4 = document.querySelector("#page4");
button4.addEventListener("click", () => {
  page4.scrollIntoView({
    behavior: "auto",
    block: "start",
  });
});

let button5 = document.querySelectorAll(".nav-buttons button");
let hamburger = document.querySelector("#hamburger");
let navButtons = document.querySelector(".nav-buttons");
hamburger.addEventListener("click", () => {
  navButtons.classList.toggle("active");
});
