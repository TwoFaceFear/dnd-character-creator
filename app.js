'use strict';

var character;
var myCharacters = JSON.parse(localStorage.getItem('myCharacters'));
if (myCharacters === null){
  myCharacters = [];
}

function Character(name, race, gender, charClass, align) {
  this.name = name;
  this.race = race;
  this.gender = gender;
  this.charClass = charClass;
  this.align = align;
  this.size;
  this.strength;
  this.dexterity;
  this.constitution;
  this.intelligence;
  this.wisdom;
  this.charisma;
}


Character.prototype.setStrength = function() {
  this.strength = rollDice();
};

Character.prototype.setDexterity = function() {
  this.dexterity = rollDice();
};

Character.prototype.setConstitution = function() {
  this.constitution = rollDice();
};

Character.prototype.setIntelligence = function() {
  this.intelligence = rollDice();
};

Character.prototype.setWisdom = function() {
  this.wisdom = rollDice();
};

Character.prototype.setCharisma = function() {
  this.charisma = rollDice();
};

function main() {

  var submit = document.getElementById('submit');
  submit.addEventListener('click', handleSubmitClick);
}

function handleSubmitClick() {
  generateCharacter();
  localStorage.setItem('myCharacters', JSON.stringify(myCharacters));
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
  myCharacters.push(character);
  return character;
}

function getClass(){
  var a = document.getElementById('class');
  var getClass = a.options[a.selectedIndex].value;
  return getClass;
}

function getRace(){
  var a = document.getElementById('race');
  var getRace = a.options[a.selectedIndex].value;
  return getRace;
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

function delCharacter(){
  var index = findCharacter();
  myCharacters.splice(index, 1);
}

function findCharacter(){
  var characterToDelete = prompt('What character do you want to delete?');
  for (var i = 0; i < myCharacters.length; i++) {
    if (myCharacters[i].name == characterToDelete) {
      return i;
    }
  }
  return null;
}

main();
