let users = [];

let mobileMenu = document.querySelector(".mobile-menu");
let mobileNav = document.querySelector(".nav");
mobileMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
});

let registerSubmit = document.getElementById("register-submit");
if (registerSubmit) {
  registerSubmit.addEventListener("click", () => {
    let registerUsername = document.getElementById("register-username");
    let registerPassword = document.getElementById("register-password");
    if (registerUsername != null && registerPassword != null) {
      let username = registerUsername.value;
      let password = registerPassword.value;
      const user = {
        username,
        password,
      };
      users.push(user);
      const usersJson = JSON.stringify(users);
      localStorage.setItem("users", usersJson);
    }
  });
}

let signinSubmit = document.getElementById("sigin-submit");
if (signinSubmit) {
  signinSubmit.addEventListener("click", () => {
    let signinUsername = document.getElementById("signin-username");
    let signinPassword = document.getElementById("signin-password");
    if (signinUsername != null && signinPassword != null) {
      let username = signinUsername.value;
      let password = signinPassword.value;
      const userStorage = localStorage.getItem("users");
      const JSONToUser = JSON.parse(userStorage);
      for (let i = 0; i < JSONToUser.length; i++) {
        if (JSONToUser[i].username == username) {
          if (JSONToUser[i].password == password) {
            alert("Signed In as " + username);
          } else {
            alert("Password didn't matched");
          }
        }
      }
    }
  });
}
let sec = document.querySelector(".sec");
let day = document.querySelector(".days");
let hour = document.querySelector(".hours");
let min = document.querySelector(".mins");
const startingDay = 21;
let startingsecs = startingDay * 24 * 60 * 60;
const updatetime = () => {
  let days = Math.floor(startingsecs / 60 / 60 / 24);
  let hours = Math.floor((startingsecs % (24 * 3600)) / 3600);
  let mins = Math.floor((startingsecs % 3600) / 60);
  let secs = startingsecs % 60;
  secs = secs < 10 ? "0" + secs : secs;
  mins = mins < 10 ? "0" + mins : mins;
  hours = hours < 10 ? "0" + hours : hours;
  days = days < 10 ? "0" + days : days;

  sec.textContent = `${secs}`;
  min.textContent = `${mins}`;
  day.textContent = `${days}`;
  hour.textContent = `${hours}`;
  startingsecs--;
};

setInterval(updatetime, 1000);
