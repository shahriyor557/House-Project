let menyu = document.querySelector(".menu");
let madol = document.querySelector(".madol");
let svg = document.querySelector("svg");
menyu.addEventListener("click", function () {

    madol.classList.toggle("active");


})

svg.addEventListener("click", function () {

    madol.classList.toggle("active");
})
console.log(menyu);
console.log(madol)