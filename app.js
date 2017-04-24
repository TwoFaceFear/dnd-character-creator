'use strict';

function Character(name, race, gender, size, charClass, align) {
  this.name = name;
  this.race = race;
  this.gender = gender;
  this.size = size;
  this.charClass = charClass;
  this.align = align;
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
  var size = getSize();
  var charClass = getClass();
  var align = getAlign();

  var character = new Character(name, race, gender, size, charClass, align);
  return character;
}


main();
