import Person from '/scripts/character.js';

let createPone = document.getElementById("p1create");
createPone.addEventListener("click", createP1);
let createPtwo = document.getElementById("p2create");
createPtwo.addEventListener("click", createP2);

let player1;
let player2;
let p1info = document.getElementById("p1Info");
let p2info = document.getElementById("p2Info");
let p1sheet = document.getElementById("p1Sheet");
let p2sheet = document.getElementById("p2Sheet");


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
    document.getElementById("p1Name").innerHTML = `Name: ${player1.name}`;
    document.getElementById("p1CurHP").innerHTML = `Health: ${player1.currenthealth}`;
    document.getElementById("p1MaxHP").innerHTML = `/${player1.maxHealth} HP`;
    document.getElementById("p1Item").innerHTML = `Item: ${player1.item}`;
    document.getElementById("p1Img").src = `assets/${player1.race}.gif`;
    p1info.classList.toggle("hidden");
    p1sheet.classList.toggle("hidden");
    if (p1sheet.classList.contains("hidden") && p2sheet.classList.contains("hidden")){
        document.getElementById("movesPanel").classList.toggle("hidden");
        document.getElementById("movesPanel").classList.toggle("actionBtns");
        document.getElementById("battlelog").classList.toggle("hidden");
        document.getElementById("battlelog").classList.toggle("battlelog");

    }
   
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
    document.getElementById("p2Name").innerHTML = `Name: ${player2.name}`;
    document.getElementById("p2CurHP").innerHTML = `Health: ${player2.currenthealth}`;
    document.getElementById("p2MaxHP").innerHTML = `/${player2.maxHealth} HP`;
    document.getElementById("p2Item").innerHTML = `Item: ${player2.item}`;
    document.getElementById("p2Img").src = `assets/${player2.race}.gif`;
    p2info.classList.toggle("hidden");
    p2sheet.classList.toggle("hidden");
    if (p1sheet.classList.contains("hidden") && p2sheet.classList.contains("hidden")){
        document.getElementById("movesPanel").classList.toggle("hidden");
        document.getElementById("movesPanel").classList.toggle("actionBtns");
        document.getElementById("battlelog").classList.toggle("hidden");
        document.getElementById("battlelog").classList.toggle("battlelog");

    }

    
    event.preventDefault();
};

