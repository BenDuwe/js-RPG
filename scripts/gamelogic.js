import Person from './character.js';

let createPone = document.getElementById("p1create");
createPone.addEventListener("click", createP1);
let createPtwo = document.getElementById("p2create");
createPtwo.addEventListener("click", createP2);

let log = document.getElementById("battlelog");
let logdiv = document.createElement("div");
let linebreak = document.createElement("br");


let player1;
let p1info = document.getElementById("p1Info");
let p1sheet = document.getElementById("p1Sheet");
let p1Quirck;
let p1Skill;

let player2;
let p2info = document.getElementById("p2Info");
let p2sheet = document.getElementById("p2Sheet");
let p2Quirck;
let p2Skill;

let clickedBtn;


function createP1() {
    let p1Name = document.getElementById("nameP1").value;
    let p1selectedItem = document.getElementById("itemP1").selectedIndex;
    let p1Item = document.getElementsByClassName("itemP1choice")[p1selectedItem].value;
    let p1RaceSelection = document.getElementById("raceP1");
    let p1RaceInputs = p1RaceSelection.getElementsByTagName("input");
    let p1Race;
    for (let i = 0; i < p1RaceInputs.length; i++) {
        if (p1RaceInputs[i].checked) {
            let id = p1RaceInputs[i].id;
            p1Race = document.getElementById(id).value;
        }
    };
    if (p1Name === "" || p1Item === "" || p1Race === undefined) {
        alert("Player1: please make sure the creation sheet is completely filled in.")
    } else {
        switch (p1Race) {
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
        };
        switch (p1Item) {
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
        };
        player1 = new Person(p1Name, p1Race, p1Item, p1Quirck, p1Skill, );
        if (p1Race == "Orc") {
            player1.maxHealth = player1.maxHealth * (1 + p1Quirck);
            player1.currenthealth = player1.currenthealth * (1 + p1Quirck);
            document.getElementById("p1Healthbar").max = player1.maxHealth;
            document.getElementById("p1Healthbar").value = player1.currenthealth;
        } else {
            document.getElementById("p1Healthbar").max = player1.maxHealth;
            document.getElementById("p1Healthbar").value = player1.currenthealth;
        };
        document.getElementById("p1Name").innerHTML = `Name: ${player1.name}`;
        document.getElementById("p1CurHP").innerHTML = `Health: ${player1.currenthealth}`;
        document.getElementById("p1MaxHP").innerHTML = `/${player1.maxHealth} HP`;
        document.getElementById("p1Item").innerHTML = `Item: ${player1.item}`;
        document.getElementById("p1Img").src = `assets/${player1.race}.gif`;

        p1info.classList.toggle("hidden");
        p1sheet.classList.toggle("hidden");
        if (p1sheet.classList.contains("hidden") && p2sheet.classList.contains("hidden")) {
            document.getElementById("movesPanel").classList.toggle("hidden");
            document.getElementById("movesPanel").classList.toggle("actionBtns");
            document.getElementById("battlelog").classList.toggle("hidden");
            document.getElementById("battlelog").classList.toggle("battlelog");
            startingPlayer()
        };
        console.log(player1);
        event.preventDefault();
    }
};

function createP2() {
    let p2Name = document.getElementById("nameP2").value;
    let p2selectedItem = document.getElementById("itemP2").selectedIndex;
    let p2Item = document.getElementsByClassName("itemP2choice")[p2selectedItem].value;
    let p2RaceSelection = document.getElementById("raceP2");
    let p2RaceInputs = p2RaceSelection.getElementsByTagName("input");
    let p2Race;
    for (let i = 0; i < p2RaceInputs.length; i++) {
        if (p2RaceInputs[i].checked) {
            let id = p2RaceInputs[i].id;
            p2Race = document.getElementById(id).value;
        }
    };
    if (p2Name === "" || p2Item === "" || p2Race === undefined) {
        alert("Player2: please make sure the creation sheet is completely filled in.")
    } else {
        switch (p2Race) {
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
        };
        switch (p2Item) {
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
        };
        player2 = new Person(p2Name, p2Race, p2Item, p2Quirck, p2Skill);
        if (p2Race == "Orc") {
            player2.maxHealth = player2.maxHealth * (1 + p2Quirck);
            player2.currenthealth = player2.currenthealth * (1 + p2Quirck);
            document.getElementById("p2Healthbar").max = player2.maxHealth;
            document.getElementById("p2Healthbar").value = player2.currenthealth;
        } else {
            document.getElementById("p2Healthbar").max = player2.maxHealth;
            document.getElementById("p2Healthbar").value = player2.currenthealth;
        };

        document.getElementById("p2Name").innerHTML = `Name: ${player2.name}`;
        document.getElementById("p2CurHP").innerHTML = `Health: ${player2.currenthealth}`;
        document.getElementById("p2MaxHP").innerHTML = `/${player2.maxHealth} HP`;
        document.getElementById("p2Item").innerHTML = `Item: ${player2.item}`;
        document.getElementById("p2Img").src = `assets/${player2.race}.gif`;
        p2info.classList.toggle("hidden");
        p2sheet.classList.toggle("hidden");
        if (p1sheet.classList.contains("hidden") && p2sheet.classList.contains("hidden")) {
            document.getElementById("movesPanel").classList.toggle("hidden");
            document.getElementById("movesPanel").classList.toggle("actionBtns");
            document.getElementById("battlelog").classList.toggle("hidden");
            document.getElementById("battlelog").classList.toggle("battlelog");
            startingPlayer()
        };
        console.log(player2);
        event.preventDefault();
    }
};

// Healing:

document.getElementById("p1Heal").addEventListener("click", heal);
document.getElementById("p2Heal").addEventListener("click", heal);

function heal(){
    clickedBtn = event.target.id;
    if (clickedBtn === "p1Heal"){
        healing(player1)
    } else {
        healing(player2)
    }
};

function healing(player) {
    let healAmount = player.heal(player)
    console.log(healAmount);
    if (player.currenthealth < player.maxHealth) {
        player.currenthealth += healAmount;
        log.innerHTML += "</br>" + `${player.name} heals for ${healAmount}`;
        // log.appendChild(logdiv);
        // log.appendChild(linebreak);
        log.scrollTop = log.scrollHeight;
        log.scrollTop = log.scrollHeight;
        if (player.currenthealth > player.maxHealth) {
            player.currenthealth = player.maxHealth;
        };
        if (clickedBtn === "p1Heal"){
            document.getElementById("p1CurHP").innerHTML = `Health: ${player.currenthealth}`;
            document.getElementById("p1Healthbar").value = player.currenthealth;
        } else {
            document.getElementById("p2CurHP").innerHTML = `Health: ${player.currenthealth}`;
            document.getElementById("p2Healthbar").value = player.currenthealth;
        }
    } else {
        alert(`Your health is full ${player.name}`);
    }
    switchPlayer();
};

// Attacking with integrated bow check (sword check is build into object.damage):

document.getElementById("p1Att").addEventListener("click", attack);
document.getElementById("p2Att").addEventListener("click", attack);



function attack(){
    player1.totalDamage = "";
    player2.totalDamage = "";
    clickedBtn = event.target.id;
    if (clickedBtn === "p1Att"){
        bowCheck(player2,player1);
    } else {
        bowCheck(player1,player2);
    }
};

// Checking for bow:

function bowCheck(defender,attacker) {
    if (attacker.item === "Bow" && Math.random() < 0.3) {
        log.innerHTML += "</br>" + `${attacker.name}'s bow double attack activated.`;
        // log.appendChild(logdiv);
        // log.appendChild(linebreak);
        log.scrollTop = log.scrollHeight;
        console.log(attacker.name + " 's bow double attack activated")
        for (let x = 0; x < 2; x++) {
            bootsCheck(defender, attacker);
        }
    } else {
        bootsCheck(defender, attacker);
    }
};

// Checking for Boots:

function bootsCheck(defender, attacker) {
    if (defender.item === "Boots") {
        let dodge = Math.random()
        console.log(dodge);
        if (dodge < eval(1 - defender.skill)) {
            raceCheck(defender,attacker);
        } else {
            log.innerHTML += "</br>" + `${defender.name} dodged ${attacker.name}'s attack`;
            // log.appendChild(logdiv);
            // log.appendChild(linebreak);
            log.scrollTop = log.scrollHeight;
            console.log(defender.name + " dodged " + attacker.name + "'s attack")
            switchPlayer();
            // bug with Vampire stealing life twice
        }
    } else {
        raceCheck(defender,attacker);
    }
}

// Checking for race quircks:

function raceCheck(defender, attacker) {
    if (defender.race === "Human") {
        defender.totalDamage = eval(attacker.damage() * (1 - defender.quirck));
        defender.currenthealth -= defender.totalDamage;
        log.innerHTML += "</br>" + `${attacker.name} dealt ${defender.totalDamage} damage to ${defender.name}.`;
        // log.appendChild(logdiv);
        // log.appendChild(linebreak);
        log.scrollTop = log.scrollHeight;
        console.log(attacker.name + " dealt " + defender.totalDamage + " damage to " + defender.name + ".")
        if (defender.currenthealth < 0) {
            defender.currenthealth = 0;
            defeat(defender);
        };
        if (clickedBtn === "p2Att") {
            document.getElementById("p1CurHP").innerHTML = `Health: ${defender.currenthealth}`;
            document.getElementById("p1Healthbar").value = Math.round(defender.currenthealth*10)/10;
        } else {
            document.getElementById("p2CurHP").innerHTML = `Health: ${defender.currenthealth}`;
            document.getElementById("p2Healthbar").value = Math.round(defender.currenthealth*10)/10;
        };

    } else if (defender.race === "Elf") {
        let reflect = Math.random()
        let reflectedAmount = 0.5;
        console.log(reflect);
        if (reflect < eval(1 - defender.skill)) {
            defender.totalDamage = attacker.damage();
            defender.currenthealth -= defender.totalDamage;
            log.innerHTML += "</br>" + `${attacker.name} dealt ${defender.totalDamage} damage to ${defender.name}.`;
            // log.appendChild(logdiv);
            // log.appendChild(linebreak);
            log.scrollTop = log.scrollHeight;
            console.log(attacker.name + " dealt " + defender.totalDamage + " damage to " + defender.name + ".")
            if (defender.currenthealth < 0) {
                defender.currenthealth = 0; 
                defeat(defender);  
            };
            if (clickedBtn === "p2Att") {
                document.getElementById("p1CurHP").innerHTML = `Health: ${defender.currenthealth}`;
                document.getElementById("p1Healthbar").value = Math.round(defender.currenthealth*10)/10;
            } else {
                document.getElementById("p2CurHP").innerHTML = `Health: ${defender.currenthealth}`;
                document.getElementById("p2Healthbar").value = Math.round(defender.currenthealth*10)/10;
            };
        } else {
            log.innerHTML += "</br>" + `${defender.name} parried ${attacker.name}'s attack!`;
            // log.appendChild(logdiv);
            // log.appendChild(linebreak);
            log.scrollTop = log.scrollHeight;  
            console.log(defender.name + " parried " + attacker.name + "'s attack!")
            attacker.totalDamage = eval(attacker.damage() * (reflectedAmount));
            attacker.currenthealth -= attacker.totalDamage;
            log.innerHTML += "</br>" + `${attacker.totalDamage} damage was reflected back to ${attacker.name}.`;
            // log.appendChild(logdiv);
            // log.appendChild(linebreak);  
            log.scrollTop = log.scrollHeight;
            console.log(attacker.totalDamage + " damage was reflected back to " + attacker.name + ".")
            if (attacker.currenthealth < 0) {
                attacker.currenthealth = 0;
                defeat(attacker);
            };    
            if (clickedBtn === "p1Att") {
                document.getElementById("p1CurHP").innerHTML = `Health: ${attacker.currenthealth}`;
                document.getElementById("p1Healthbar").value = Math.round(attacker.currenthealth*10)/10;
            } else {
                document.getElementById("p2CurHP").innerHTML = `Health: ${attacker.currenthealth}`;
                document.getElementById("p2Healthbar").value = attacker.currenthealth;
            };
        };
    } else {
        defender.totalDamage = attacker.damage();
        defender.currenthealth -= defender.totalDamage;
        log.innerHTML += "</br>" + `${attacker.name} dealt ${defender.totalDamage} damage to ${defender.name}.`;
        // log.appendChild(logdiv);
        // log.appendChild(linebreak);
        log.scrollTop = log.scrollHeight;   
        console.log(attacker.name + " dealt " + defender.totalDamage + " damage to " + defender.name + ".")
        if (defender.currenthealth < 0) {
            defender.currenthealth = 0;
            defeat(defender);
        };
        if (clickedBtn === "p2Att") {
            document.getElementById("p1CurHP").innerHTML = `Health: ${defender.currenthealth}`;
            document.getElementById("p1Healthbar").value = Math.round(defender.currenthealth*10)/10;
        } else {
            document.getElementById("p2CurHP").innerHTML = `Health: ${defender.currenthealth}`;
            document.getElementById("p2Healthbar").value = Math.round(defender.currenthealth*10)/10;
        };
    };
    if (defender.currenthealth !== 0 && attacker.currenthealth !== 0){
    switchPlayer();
    }
};


// Random starting player:

function startingPlayer(){
    let toss = Math.floor(Math.random() * 2);
    if (toss == 0){
        log.innerHTML += "</br>" + `Player1 starts!`;
        // log.appendChild(logdiv);
        // log.appendChild(linebreak);   
        console.log("Player1 starts");
        document.getElementById("p2Att").disabled = true;
        document.getElementById("p2Heal").disabled = true;
        document.getElementById("p2Yield").disabled = true;
    } else if (toss == 1){
        log.innerHTML += "</br>" + `Player2 starts!`;
        // log.appendChild(logdiv);
        // log.appendChild(linebreak);
        log.scrollTop = log.scrollHeight;   
        console.log("Player2 starts");
        document.getElementById("p1Att").disabled = true;
        document.getElementById("p1Heal").disabled = true;
        document.getElementById("p1Yield").disabled = true;
    }
};


//  Switching player turns with check for vampire:
function switchPlayer(){
    if (clickedBtn === "p1Att" || clickedBtn === "p1Heal"){
        document.getElementById("p1Att").disabled = true;
        document.getElementById("p1Heal").disabled = true;
        document.getElementById("p1Yield").disabled = true;
        document.getElementById("p2Att").disabled = false;
        document.getElementById("p2Heal").disabled = false;
        document.getElementById("p2Yield").disabled = false;
        if(player2.race === "Vampire"){
            let stolen = Math.round(player1.currenthealth * 0.1);
            player2.currenthealth += stolen;
            if (player2.currenthealth > player2.maxHealth){
                player2.currenthealth = player2.maxHealth;
            }
            player1.currenthealth -= stolen;
            log.innerHTML += "</br>" + `${player2.name} stole ${stolen} health from ${player1.name}.`;
            // log.appendChild(logdiv);
            // log.appendChild(linebreak); 
            log.scrollTop = log.scrollHeight;  
            console.log(`${player2.name} stole ${stolen} health from ${player1.name}.`)
            document.getElementById("p1CurHP").innerHTML = `Health: ${Math.round(player1.currenthealth*10)/10}`;
            document.getElementById("p1Healthbar").value = Math.round(player1.currenthealth*10)/10;
            document.getElementById("p2CurHP").innerHTML = `Health: ${Math.round(player2.currenthealth*10)/10}`;
            document.getElementById("p2Healthbar").value = Math.round(player2.currenthealth*10)/10;
        }
    } else if (clickedBtn === "p2Att" || clickedBtn === "p2Heal"){
        document.getElementById("p1Att").disabled = false;
        document.getElementById("p1Heal").disabled = false;
        document.getElementById("p1Yield").disabled = false;
        document.getElementById("p2Att").disabled = true;
        document.getElementById("p2Heal").disabled = true;
        document.getElementById("p2Yield").disabled = true;
        if(player1.race === "Vampire"){
            let stolen = Math.round(player2.currenthealth * 0.1);
            player1.currenthealth += stolen;
            if (player1.currenthealth > player1.maxHealth){
                player1.currenthealth = player1.maxHealth;
            }
            player2.currenthealth -= stolen;
            log.innerHTML += "</br>" + `${player1.name} stole ${stolen} health from ${player2.name}.`;
            // log.appendChild(logdiv);
            // log.appendChild(linebreak);   
            log.scrollTop = log.scrollHeight;
            console.log(`${player1.name} stole ${stolen} health from ${player2.name}.`)
            document.getElementById("p1CurHP").innerHTML = `Health: ${Math.round(player1.currenthealth*10)/10}`;
            document.getElementById("p1Healthbar").value = Math.round(player1.currenthealth*10)/10;
            document.getElementById("p2CurHP").innerHTML = `Health: ${Math.round(player2.currenthealth*10)/10}`;
            document.getElementById("p2Healthbar").value = Math.round(player2.currenthealth*10)/10;
        }
    }
};

// Defeat:

function defeat(player){
    if (player === player1){
        player.currenthealth = 0;
        document.getElementById("p1Img").src = `assets/grave-left.png`;
        log.innerHTML += "</br>" + `Player2 wins!`;
        // log.appendChild(logdiv);
        // log.appendChild(linebreak); 
        log.scrollTop = log.scrollHeight;  
        console.log("Player2 wins!");
    } else if (player === player2){
        player.currenthealth = 0;
        document.getElementById("p2Img").src = `assets/grave-right.png`;
        log.innerHTML += "</br>" + `Player1 wins!`;
        // log.appendChild(logdiv);
        // log.appendChild(linebreak); 
        log.scrollTop = log.scrollHeight;  
        console.log("Player1 wins!");
    }
    document.getElementById("movesPanel").classList.toggle("hidden");
    document.getElementById("movesPanel").classList.toggle("actionBtns");
}