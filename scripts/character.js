//Use this script to generate your character
export default function Person(name, race, item, quirck, skill){
    this.name = name;
    this.race = race;
    this.quirck = quirck;
    this.item = item;
    this.skill = skill;
    this.currenthealth = 50;
    this.maxHealth = 100;
    
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function (player){
        if (player.item == "Staff") {
            let min = Math.ceil(player.min);
            let max = Math.floor(player.maxHealing);
            return Math.round(((Math.floor(Math.random() * (max-min+1)) + min)*(1+player.skill))*10)/10;
        } else {
            let min = Math.ceil(player.min);
            let max = Math.floor(player.maxHealing);
            return Math.round((Math.floor(Math.random() * (max-min+1)) + min)*10)/10;
        }
    };

    this.damage = function(){
        if (this.item == "Sword") {
            let min = Math.ceil(this.min);
            let max = Math.floor(this.maxDamage);
            return Math.round(((Math.floor(Math.random() * (max-min+1)) + min)*(1+this.skill))*10)/10;
        } else {
            let min = Math.ceil(this.min);
            let max = Math.floor(this.maxDamage);
            return Math.round((Math.floor(Math.random() * (max-min+1)) + min)*10)/10;
        }
    };

    this.totalDamage = "";

    displayChar(this.name,this.race,this.item,this.maxHealth);
}

//Delete this functiom
function displayChar(name,race,item,maxHealth){
    return console.log(`Hello, my name is ${name}. I am a ${race}, I wield a ${item}, my total health point are ${maxHealth}`);
}