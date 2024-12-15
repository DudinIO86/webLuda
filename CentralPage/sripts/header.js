const headerContent=document.querySelector('.header');
//создание левого блока
const leftBlock=document.createElement('section');
leftBlock.classList.add('header_leftBlock');
headerContent.appendChild(leftBlock);

const leftBlockContent=document.querySelector('.header_leftBlock');
const lbIMG=document.createElement('img');
lbIMG.src='CentralPage/content/avatar.jpg';
leftBlockContent.appendChild(lbIMG);

//создание правого блока
const rightBlock=document.createElement('section');
rightBlock.classList.add('header_rightBlock');
headerContent.appendChild(rightBlock);


