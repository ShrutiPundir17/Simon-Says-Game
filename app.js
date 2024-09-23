// let btns = document.querySelectorAll("button");
   
//     for(btn of btns) {
//         btn.addEventListener("click", sayHello);
//         btn.addEventListener("click", sayName);
//     }

//     function sayHello() {
//         alert("Hello!");
//     }

//     function sayName() {
//         alert("Apna College");
//     }


//     console.dir(btn);
//     btn.onclick = function() {
//         console.log("button was clicked");
//     };






// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("color updated");
//     });

//     function getRandomColor() {
//         let red = Math.floor(Math.random() * 255);
//         let green = Math.floor(Math.random() * 255);
//         let blue = Math.floor(Math.random() * 255);

//         let color = `rgb(${red}, ${green}, ${blue})`;
//         return color;
//     }








// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let li = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//     console.log("div was clicked");
// })

// ul.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("ul was clicked");
// })

// for(li of lis) {
//     li.addEventListener("click", function (event) {
//         event.stopPropagation();
//         console.log("li was clicked");
//     })
// }/









// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function() {
//     let item = document.createElement("li");
//     item.innerText = inp.value;

//     let delBtn = document.createElement("button");
//     delBtn.innerText = "delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     inp.value = "";
// });

// ul.addEventListener("click", function (event) {
//     // console.log(event.target);
//     // console.log("button clicked");
//     if(event.target.nodeName == "BUTTON") {
//        let listItem = event.target.parentElement;
//        listItem.remove();
//        console.log("deleted");
//     }
// });

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }







let gameSeq = [];
let userSeq =[];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
    console.log("game is started");
    started = true;

    levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() *3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
        setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b>`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor ="white";
        }, 150);
        reset();
    }
}

function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}