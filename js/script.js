// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Back-to-top button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Animate skill bars on scroll
const skills = document.querySelectorAll(".skill-level");

function animateSkills() {
  const triggerBottom = window.innerHeight * 0.9;

  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;

    if (skillTop < triggerBottom) {
      skill.style.width = skill.dataset.width;
    }
  });
}

window.addEventListener("scroll", animateSkills);
animateSkills(); // run once on load

// Dark mode toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// Project modal
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".modal .close");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "block";
    modalTitle.textContent = card.dataset.title;
    modalDescription.textContent = card.dataset.description;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// Project filter
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    document.querySelectorAll(".project-card").forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
