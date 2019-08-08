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
let p1Quirck;
let p2Quirck;
let p1Skill;
let p2Skill;


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
    switch(p1Race){
        case "Human":
            p1Quirck = 0.2;
            break;
        case "Orc":
            p1Quirck = 0.4;
            break;
        case "Elf":
            p1Quirck = 0.3;
            break;
        case "Vampire":
            p1Quirck = 0.1;
    }
    switch(p1Item){
        case "Boots":
            p1Skill = 0.3;
            break;
        case "Staff":
            p1Skill = 0.2;
            break;
        case "Sword":
            p1Skill = 0.3;
            break;
        case "Bow":
            p1Skill = 0.3;
    }
    player1 = new Person(p1Name,p1Race,p1Item,p1Quirck,p1Skill);
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
    console.log(player1)
   
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
    switch(p2Race){
        case "Human":
            p2Quirck = 0.2;
            break;
        case "Orc":
            p2Quirck = 0.4;
            break;
        case "Elf":
            p2Quirck = 0.3;
            break;
        case "Vampire":
            p2Quirck = 0.1;
    }
    switch(p2Item){
        case "Boots":
            p2Skill = 0.3;
            break;
        case "Staff":
            p2Skill = 0.2;
            break;
        case "Sword":
            p2Skill = 0.3;
            break;
        case "Bow":
            p2Skill = 0.3;
    }
    player2 = new Person(p2Name,p2Race,p2Item,p2Quirck,p2Skill);
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

    console.log(player2);
    event.preventDefault();
};
