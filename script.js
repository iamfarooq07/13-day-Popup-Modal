const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const okBtn = document.getElementById("okBtn");
const closeBtn = document.getElementById("close");

openModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
okBtn.addEventListener("click", () => {
  alert("Your Modal Has Successfully Closed");
  modal.classList.add("hidden");
});
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
  }
});
