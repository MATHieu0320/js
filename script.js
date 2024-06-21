const app = document.querySelector(".App");
const btn1 = document.getElementById("btn1");
console.log(btn1);
const PremierElement = document.querySelector("#cat1");
console.log(btn1);
let div = document.createElement("div");
app.appendChild(div);
let bouleen = true;
btn1.addEventListener("click", () => {


  app.classList.toggle("blur");

  //////////////////////

  if (bouleen == true) {
    bouleen = false;
    div.classList.add("Information");

    console.log("vrai");
  } else {
    console.log("faux");
    bouleen = true;

    div.classList.remove("Information");
  }
});
document.body.addEventListener("click", (e) => {
  console.log(e.target);
});
// if (bouleen == true) {
//   bouleen = false;
//   h1.style.background = "green";
// } else {
//   bouleen = true;
//   h1.style.background = "red";
// }
