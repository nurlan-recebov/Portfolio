// var btn =document.getElementById("btn")
// var slide = document.getElementById("slide")
// btn.onclick=function(){
//     slide.style.transform="translateX(800px)";
// }
let button = document.getElementById("btn-back-to-top");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 600 ||
        document.documentElement.scrollTop > 600
    ) {
        button.style.display = "block";
        button.style.zIndex = "99"
    } else {
        button.style.display = "none";
        button.style.zIndex = "-1"

    }
}

button.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function myFunction() {
    document.getElementById("menu").style.display = "block";
}

function nurlan() {
    document.getElementById("menu").style.display = "none";
}
window.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);

const link = document.querySelector('#settings');
const setbtn = document.querySelector('#setbtn');
setbtn.addEventListener("click", function() {
    if (link.classList.contains("setshows")) {
        link.classList.remove('setshows')
    } else {
        link.classList.add('setshows')
    }
});

function purple() {
    const nodeList = document.querySelectorAll(".arxa,.container");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = "#28a7ed";
    }
}

function yellow() {
    const nodeList = document.querySelectorAll(".arxa,.container");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.background = " #a337f6";
    }
}

function green() {
    const nodeList = document.querySelectorAll(".arxa,.container");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = "#e84d70";
    }
}

function setbutton() {
    const nodeList = document.querySelectorAll(".arxa,.container");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = "#212529";
    }
}