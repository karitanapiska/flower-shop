console.log("Сайт подключён");
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {

    alert("Пожалуйста, заполните все поля");

  } else {

    alert("Сообщение успешно отправлено!");

    form.reset();
  }

});
const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function() {

  document.body.classList.toggle("pink-theme");

});