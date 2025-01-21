// Таймер обратного отсчёта
function startCountdown() {
  const countdown = document.getElementById("countdown");
  const targetDate = new Date().setHours(23, 59, 59); // До конца дня
  setInterval(() => {
    const now = new Date();
    const difference = targetDate - now;
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    countdown.textContent = `${hours}ч ${minutes}м ${seconds}с`;
  }, 1000);
}

// Обработка формы
const form = document.getElementById("feedbackForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const newReview = document.createElement("div");
  newReview.classList.add("review");
  newReview.innerHTML = `<p>"${message}"</p><span>- ${name}</span>`;

  document.getElementById("reviewList").prepend(newReview); // Добавление отзыва в начало списка

  alert("Спасибо за ваше сообщение!");
  form.reset();
});

// Запуск таймера
startCountdown();
