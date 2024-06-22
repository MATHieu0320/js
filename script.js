const app = document.querySelector(".App");
const btn1 = document.getElementById("btn1");
console.log(btn1);
const PremierElement = document.querySelector("#cat1");
console.log(btn1);
let div = document.createElement("div");
// function TrueOrFalse(bouleen,element,class) {
//   if (bouleen == true) {
//     bouleen = false;

//   } else {
//     bouleen = true;
//   }
// }

app.appendChild(div);
let bouleen = true;

btn1.addEventListener("click", () => {
  if (bouleen == true) {
    app.classList.add("blur");

    div.classList.add("Information");
    div.innerHTML = `
  <h2>Bonsoir</h2>`;
    bouleen = false;
  } else {
    bouleen = true;

    div.innerHTML = "";
    div.classList.remove("Information");
  }
});

app.addEventListener("click", (e) => {
  if (e.target != btn1) {
    div.innerHTML = "";

    bouleen = true;
    div.classList.remove("Information");
    app.classList.remove("blur");
  }
});
