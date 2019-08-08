//Use this script to generate your character
export default function Person(name, race, item, quirck, skill){
    this.name = name;
    this.race = race;
    this.quirck = quirck;
    this.item = item;
    this.skill = skill;
    this.currenthealth = 100;
    this.maxHealth = 100;
    
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(){};

    this.damage = function(){};

    this.totalDamage = this.damage();

    displayChar(this.name,this.race,this.item,this.maxHealth);
}

//Delete this functiom
function displayChar(name,race,item,maxHealth){
    return console.log(`Hello, my name is ${name}. I am a ${race}, I wield a ${item}, my total health point are ${maxHealth}`);
}