const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const popup = document.getElementById("popup");
const pointer = document.querySelector(".pointer"); // Lấy cây kim
let angle = 0;

spinBtn.addEventListener("click", () => {
  const targetAngle = 360 * 3 + 45; // Xoay ít nhất 3 vòng và dừng ở 45 độ để trúng giải 1
  angle += targetAngle;
  wheel.style.transform = `rotate(${angle}deg)`;

  // Hiện popup và ẩn cây kim sau khi vòng quay dừng lại
  setTimeout(() => {
    showPopup();
    pointer.style.display = "none"; // Ẩn cây kim
  }, 4000); // Thời gian chờ cho vòng quay dừng lại
});

function showPopup() {
  popup.classList.remove("hidden");
}

function closePopup() {
  popup.classList.add("hidden");
  pointer.style.display = "block"; // Hiện lại cây kim sau khi đóng popup
}
