
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const images = document.querySelectorAll(".advisory-image");
  const contents = document.querySelectorAll(".tab-cont");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Remove active states
      document.querySelector(".tab.active")?.classList.remove("active");
      document.querySelector(".advisory-image.active")?.classList.remove("active");
      document.querySelector(".tab-cont.active")?.classList.remove("active");

      // Add active to current tab, image, and content
      tab.classList.add("active");
      images[index].classList.add("active");
      contents[index].classList.add("active");
    });
  });
});

