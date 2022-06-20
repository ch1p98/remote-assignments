const btn_welcome = document.querySelector(".top_content");
const btn_show_hidden = document.querySelector("#lf2_dot_net");

btn_welcome.addEventListener("click", () => {
  const welcome = document.getElementById("welcome_msg");

  welcome.textContent = "Have a Good Time!";
});

btn_show_hidden.addEventListener("click", () => {
  const hidden_initially = document.getElementById("hidden_initially");

  if (hidden_initially.style.display === "none") {
    btn_show_hidden.textContent = "no thanks";
    hidden_initially.removeAttribute("style");
  } else {
    btn_show_hidden.textContent = "show some decent to me";
    hidden_initially.style.display = "none";
  }
});
