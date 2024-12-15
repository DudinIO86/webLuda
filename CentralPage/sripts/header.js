//блок, отвечающий за верхнюю часть сайта (header)

const headerContent=document.querySelector('.header');
//ЛЕВЫЙ БЛОК
const leftBlock=document.createElement('section');
leftBlock.classList.add('leftBlock');
headerContent.appendChild(leftBlock);
//вставка аватара
const leftBlockContent=document.querySelector('.leftBlock');
const lbIMG=document.createElement('img');
lbIMG.classList.add('leftBlock__img');
lbIMG.src='CentralPage/content/avatar.jpg';
leftBlockContent.appendChild(lbIMG);

//ПРАВЫЙ БЛОК
const rightBlock=document.createElement('section');
rightBlock.classList.add('rightBlock');
headerContent.appendChild(rightBlock);

const rightBlockContent=document.querySelector('.rightBlock');
const menu=document.createElement('div');
menu.classList.add('rightBlock__menu');
rightBlockContent.appendChild(menu);

//создание меню
const menuPortfolio=document.createElement('a');
menuPortfolio.classList.add('rightBlock__menuEl');
menuPortfolio.href="#";
menuPortfolio.textContent="Портфолио";
menu.appendChild(menuPortfolio);

const menuUslugi=document.createElement('a');
menuUslugi.classList.add('rightBlock__menuEl');
menuUslugi.href="#";
menuUslugi.textContent="Услуги";
menu.appendChild(menuUslugi);

const menuUslovia=document.createElement('a');
menuUslovia.classList.add('rightBlock__menuEl');
menuUslovia.href="#";
menuUslovia.textContent="Условия";
menu.appendChild(menuUslovia);

const menuOtzeve=document.createElement('a');
menuOtzeve.classList.add('rightBlock__menuEl');
menuOtzeve.href="#";
menuOtzeve.textContent="Отзывы";
menu.appendChild(menuOtzeve);

//создание главной надписи
const reklama=document.createElement('div');
reklama.classList.add('rightBlock__gtxt');
rightBlock.appendChild(reklama);

const GTEXT1=document.createElement('h2');
GTEXT1.classList.add('rightBlock__text1');
GTEXT1.textContent="Ваш любимый фотограф";
reklama.appendChild(GTEXT1);

const GTEXT2=document.createElement('h1');
GTEXT2.classList.add('rightBlock__text2');
GTEXT2.textContent="Людмила";
reklama.appendChild(GTEXT2);

const GTEXT3=document.createElement('h1');
GTEXT3.classList.add('rightBlock__text2');
GTEXT3.textContent="Дудина";
reklama.appendChild(GTEXT3);

const rbIMG=document.createElement('img');
rbIMG.src='CentralPage/content/avatar.jpg';
rbIMG.classList.add('rightBlock__img');
reklama.appendChild(rbIMG);
