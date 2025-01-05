const theme = document.documentElement;
// console.log(theme)

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.currentTarget.classList)
    const color = e.currentTarget.classList; //[btn, btn1, value]
    if (color.contains("btn1")) {
      theme.style.setProperty("--theme-color", "#d71e8a");
    } else if (color.contains("btn2")) {
      theme.style.setProperty("--theme-color", "#f6e122");
    } else if (color.contains("btn3")) {
      theme.style.setProperty("--theme-color", "#10c4f0");
    } else if (color.contains("btn4")) {
      theme.style.setProperty("--theme-color", "#341396");
    }
  });
});
