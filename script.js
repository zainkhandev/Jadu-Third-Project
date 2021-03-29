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
