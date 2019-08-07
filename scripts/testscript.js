import Person from '/scripts/character.js';

let createPone = document.getElementById("p1create");
createPone.addEventListener("click", createP1);
let createPtwo = document.getElementById("p2create");
createPtwo.addEventListener("click", createP2);


console.log(Person);
let player1 = new Person("Human", "Boots");
let player2 = new Person("Vampire", "Sword")
console.log(player1);
console.log(player2);

function createP1(){
    let p1Name = document.getElementById("nameP1").value;
    let p1selectedItem = document.getElementById("itemP1").selectedIndex;
    let p1Item = document.getElementsByClassName("itemP1choice")[p1selectedItem].value;
    console.log(p1Name);
    console.log(p1selectedItem);
    console.log(p1Item);
    
    event.preventDefault();
};

function createP2(){
    let p2Name = document.getElementById("nameP2").value;
    let p2selectedItem = document.getElementById("itemP2").selectedIndex;
    let p2Item = document.getElementsByClassName("itemP2choice")[p2selectedItem].value;
    console.log(p2Name);
    console.log(p2selectedItem);
    console.log(p2Item);
    
    event.preventDefault();
};

