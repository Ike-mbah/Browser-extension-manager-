const filterLinks = document.querySelectorAll(".filter-link");
const cards = document.querySelectorAll(".grid-container");

const toggles = document.querySelectorAll(".bi");

toggles.forEach((bi) => {
  bi.addEventListener("change", () => {
    const card = bi.closest(".grid-container");
    card.dataset.status = bi.checked ? "active" : "inactive";
  });
});

filterLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    filterLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    const filter = link.dataset.filter;
    cards.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block";
      } else {
        card.style.display = card.dataset.status === filter ? "block" : "none";
      }
    });
  });
});

const themeToggle = document.querySelector(".head-sun");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  //   input.classList.toggle('light-theme')

  if (body.classList.contains("light-theme")) {
    themeToggle.src = "./assets/images/icon-moon.svg";
    themeToggle.alt = "moon";
  } else {
    themeToggle.src = "./assets/images/icon-sun.svg";
    themeToggle.alt = "sun";
  }
});
