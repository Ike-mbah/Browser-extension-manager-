const filterLinks = document.querySelectorAll(".filter-link");
const cards = document.querySelectorAll(".grid-container");
const toggles = document.querySelectorAll(".bi");
const themeToggle = document.querySelector(".head-sun");
const body = document.body;

toggles.forEach((bi) => {
  bi.addEventListener("click", () => {
    const card = bi.closest(".grid-container");
    card.dataset.status = bi.checked ? "active" : "inactive";
  });
});

filterLinks.forEach((filterLink) => {
  filterLink.addEventListener("click", () => {

    filterLinks.forEach((filterLink) => filterLink.classList.remove("active"));
    filterLink.classList.add("active");

    const filter = filterLink.dataset.filter;
    cards.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block";
      } else {
        card.style.display = card.dataset.status === filter ? "block" : "none";
      }
    });
  });
});

 

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    themeToggle.src = "./assets/images/icon-moon.svg";
    themeToggle.alt = "moon";
  } else {
    themeToggle.src = "./assets/images/icon-sun.svg";
    themeToggle.alt = "sun";
  }
});

