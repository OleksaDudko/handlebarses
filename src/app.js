import cafe from "./cafe.json";
import cafeTamplate from "./cafe-tamplate";
console.log(cafe);
console.log(cafeTamplate);







const listEl = document.querySelector(".cafe_list");
listEl.innerHTML = cafeTamplate({cafe})