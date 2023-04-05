const animais = document.getElementById("animaaais");
// console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");

// console.log(gridSection);

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
// console.log(primeiraUl);

const linkInternos = document.querySelector('[href^="#"]');

// console.log(linkInternos.href);

const animaisImg = document.querySelectorAll(".animais img");
// console.log(animaisImg);

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

primeiraUl.classList.add("grid-section");

// console.log(gridSectionHTML);
// console.log(gridSectionNode);

// EXERCÍCIO
// Retorne no console todas as imagens do site

const imgs = document.querySelectorAll("img");
console.log(imgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imgsImg = document.querySelectorAll('[src^="img/imagem"]');
console.log(imgsImg);

// Selecione todos os links internos (onde o href começa com #)

const linkInternos2 = document.querySelectorAll('[href^="#"]');
console.log(linkInternos2);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelector(".animais-descricao h2");
console.log(primeiroh2);

// Selecione o último p do site

const ultimop = document.querySelector(".copy p");
console.log(ultimop.innerText);
