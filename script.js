const button = document.querySelector("#hello-button");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "It works! Now make it yours.";
});
