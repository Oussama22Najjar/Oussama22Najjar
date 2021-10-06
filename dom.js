let btnsPlus = Array.from(document.getElementsByClassName("plus"));
let qtes = Array.from(document.getElementsByClassName("qte"));
let btnsnegatif = Array.from(document.getElementsByClassName("negatif"));
let hearts = Array.from(document.getElementsByClassName("fa-heart"));
console.log(btnsPlus);

for (let btn of btnsPlus) {
  btn.addEventListener("click", function () {
    btn.previousElementSibling.innerHTML =
      Number(btn.previousElementSibling.innerHTML) + 1;
    console.log(btn.previousElementSibling.innerHTML);
  });
}
for (let btn of btnsnegatif) {
  btn.addEventListener("click", function () {
    if (btn.nextElementSibling.innerHTML > 0)
      btn.nextElementSibling.innerHTML =
        Number(btn.nextElementSibling.innerHTML) - 1;
    console.log(btn.nextElementSibling.innerHTML);
  });
}

for (let heart of hearts) {
  heart.addEventListener("click", function () {
    if (heart.style.color === "gray") {
      heart.style.color = "red";
    } else {
      heart.style.color = "gray";
    }
  });
}
let products = Array.from(document.getElementsByClassName('product'))
let quantity = Array.from(document.getElementsByClassName('qtes'))
let prices = Array.from(document.getElementsByClassName('price'))
let totals = Array.from(document.getElementsByClassName('total'))
let trashs = Array.from(document.querySelectorAll(".fa-trash"));

for (let i =0 ; i< products.length ; i++){

trashs[i].addEventListener('click' , function(){
  trashs[i].remove()
  products[i].remove()
  quantity[i].remove()
  prices[i].remove()
  totals[i].remove()
})

}

// for (let i = 0; i < qtes.length; i++) {
//   btnsPlus[i].addEventListener("click", function () {
//     console.log(qtes[i].innerHTML);
//     qtes[i].innerHTML = +qtes[i].innerHTML + 1;
//   });
// }
