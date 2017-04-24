'use strict';

var character;

function Character(name, race, gender, charClass, align) {
  this.name = name;
  this.race = race;
  this.gender = gender;
  this.charClass = charClass;
  this.align = align;
  this.size;
  this.strength = 0;
  this.dexterity = 0;
  this.constitution = 0;
  this.intelligence = 0;
  this.wisdom = 0;
  this.charisma = 0;
}

Character.prototype.setStrength = function() {
  this.strength += rollDice();
};

Character.prototype.setDexterity = function() {
  this.dexterity += rollDice();
};

Character.prototype.setConstitution = function() {
  this.constitution += rollDice();
};

Character.prototype.setIntelligence = function() {
  this.intelligence += rollDice();
};

Character.prototype.setWisdom = function() {
  this.wisdom += rollDice();
};

Character.prototype.setCharisma = function() {
  this.charisma += rollDice();
};

function main() {

  var submit = document.getElementById('submit');
  submit.addEventListener('click', handleSubmitClick);
}

function handleSubmitClick() {
  generateCharacter();
}

function rollDice() {
  var total = 0;
  for(var i = 0; i < 5; i++) {
    total += Math.floor(Math.random() * 6 + 1);
  }
  return total;
}

function generateCharacter() {
  var name = document.getElementById('name').value;
  var race = getRace();
  var gender = getGender();
  var charClass = getClass();
  var align = getAlignment();

  character = new Character(name, race, gender, charClass, align);
  console.log(character.strength);
  raceAttributes(race);
  console.log(character.strength);
  return character;
}

function getClass(){
  var a = document.getElementById('class');
  var getClass = a.options[a.selectedIndex].value;
  return getClass;
}

function getGender(){
  var a = document.getElementById('gender');
  var getGender = a.options[a.selectedIndex].value;
  return getGender;
}

function getAlignment(){
  var a = document.getElementById('alignment');
  var getAlignment = a.options[a.selectedIndex].value;
  return getAlignment;
}

function getRace(){
  var a = document.getElementById('race');
  var getRace = a.options[a.selectedIndex].value;
  return getRace;
}

function raceAttributes(race){
  switch(race){
  case 'gnome':
    character.constitution += 2;
    character.charisma += 2;
    character.strength -= 2;
    character.size = 'small';
    break;
  case 'human':
    character.size = 'medium';
    break;
  case 'orc':
    character.strength += 4;
    character.intelligence -= 2;
    character.wisdom -= 2;
    character.charisma -= 2;
    character.size = 'meduim';
    break;
  case 'elf':
    character.dexterity += 2;
    character.charisma += 2;
    character.constitution -= 2;
    character.size = 'medium';
    break;
  case 'halfling':
    character.dexterity += 2;
    character.charisma += 2;
    character.strength -= 2;
    character.size = 'small';
    break;
  case 'dwarf':
    character.constitution += 2;
    character.charisma -=2;
    character.size = 'medium';
  }
}

main();
