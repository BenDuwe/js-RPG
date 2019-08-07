import Person from '/scripts/character.js';

let createPone = document.getElementById("p1create");
createPone.addEventListener("click", createP1);
let createPtwo = document.getElementById("p2create");
createPtwo.addEventListener("click", createP2);

let player1;
let player2;


function createP1(){
    let p1Name = document.getElementById("nameP1").value;
    let p1selectedItem = document.getElementById("itemP1").selectedIndex;
    let p1Item = document.getElementsByClassName("itemP1choice")[p1selectedItem].value;
    let p1RaceSelection = document.getElementById("raceP1");
    let p1RaceInputs = p1RaceSelection.getElementsByTagName("input");
    let p1Race;
    for (let i = 0; i < p1RaceInputs.length; i++){
        if(p1RaceInputs[i].checked){
            let id = p1RaceInputs[i].id;
            p1Race = document.getElementById(id).value;
        }
    }
    player1 = new Person(p1Name,p1Race,p1Item);
    
    event.preventDefault();
};

function createP2(){
    let p2Name = document.getElementById("nameP2").value;
    let p2selectedItem = document.getElementById("itemP2").selectedIndex;
    let p2Item = document.getElementsByClassName("itemP2choice")[p2selectedItem].value;
    let p2RaceSelection = document.getElementById("raceP2");
    let p2RaceInputs = p2RaceSelection.getElementsByTagName("input");
    let p2Race;
    for (let i = 0; i < p2RaceInputs.length; i++){
        if(p2RaceInputs[i].checked){
            let id = p2RaceInputs[i].id;
            p2Race = document.getElementById(id).value;
        }
    }
    player2 = new Person(p2Name,p2Race,p2Item);

    
    event.preventDefault();
};

