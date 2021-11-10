let paragraphes = document.getElementsByTagName('p');
let i = 0;

while (i<paragraphes.length){
    paragraphes[i].style.color = "blue";
    paragraphes[i].style.width = "50%";
    i++;
}

let span = document.getElementsByTagName('span');
let a = 0;

while (a<span.length){
    span[a].style.backgroundColor = "gray";
    span[a].dir = "rtl";
    a++;
}

let animatedParagraphe = document.getElementsByClassName('animated');
let b = 0;

while (b<animatedParagraphe.length){
    animatedParagraphe[b].style.animation = "visible";
    animatedParagraphe[b].style.animationDuration = "2s";
    b++;
}

let lien1 = document.getElementById('lien1');
lien1.innerText = "lien1";
lien1.href = "#";

let lien2 = document.getElementById('lien2');
lien2.innerText = "lien2";
lien2.href = "#";

let lien3 = document.getElementById('lien3');
lien3.innerText = "lien3";
lien3.href = "#";

let lien4 = document.getElementById('lien4');
lien4.innerText = "lien4";
lien4.href = "#";

let lien5 = document.getElementById('lien5');
lien5.innerText = "lien5";
lien5.href = "#";

let lastParagraphe = document.getElementById('last_paragraphe');
lastParagraphe.innerText = "le nouveau text du dernier paragraphe";