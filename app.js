'use strict';

var character;
var timesToRoll = 6;
var rolls = [];
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
  this.strength = 0;
  this.dexterity = 0;
  this.constitution = 0;
  this.intelligence = 0;
  this.wisdom = 0;
  this.charisma = 0;
}

Character.prototype.setStrength = function(num) {
  this.strength = num;
};

Character.prototype.setDexterity = function(num) {
  this.dexterity = num;
};

Character.prototype.setConstitution = function(num) {
  this.constitution = num;
};

Character.prototype.setIntelligence = function(num) {
  this.intelligence = num;
};

Character.prototype.setWisdom = function(num) {
  this.wisdom = num;
};

Character.prototype.setCharisma = function(num) {
  this.charisma = num;
};


function main() {

  var submit = document.getElementById('submit');
  if(submit) {
    submit.addEventListener('click', handleSubmitClick);
  }

}

function handleSubmitClick() {
  generateCharacter();

  localStorage.setItem('myCharacters', JSON.stringify(myCharacters));


  //document.location.href = 'display.html';
}

function rollDice(numRolls) {
  for(var i = 0; i < numRolls; i++) {
    var total = 0;
    for(var j = 0; j < 5; j++) {
      total += Math.floor(Math.random() * 6 + 1);
    }
    rolls[i] = total;
  }
  return rolls;
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

  setAttributes();

  myCharacters.push(character);
  return character;
}

function setAttributes() {
  rollDice(timesToRoll);

  character.setWisdom();
  character.setCharisma();
  character.setStrength();
  character.setDexterity();
  character.setIntelligence();
  character.setConstitution();
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

function renderCharacter(char) {
  var el;

  el = document.getElementById('display-name-h1');
  el.textContent = char.name;

  el = document.getElementById('display-race-h2');
  el.textContent = char.race;

  el = document.getElementById('display-class-h2');
  el.textContent = char.charClass;

  el = document.getElementById('display-gender-h2');
  el.textContent = char.gender;

  el = document.getElementById('display-size-h2');
  el.textContent = char.size;

  el = document.getElementById('display-align-h2');
  el.textContent = char.align;

  el = document.getElementById('display-strength-li');
  el.innerHTML = el.innerHTML + char.strength;

  el = document.getElementById('display-dexterity-li');
  el.innerHTML = el.innerHTML + char.dexterity;

  el = document.getElementById('display-constitution-li');
  el.innerHTML = el.innerHTML + char.constitution;

  el = document.getElementById('display-intelligence-li');
  el.innerHTML = el.innerHTML + char.intelligence;

  el = document.getElementById('display-wisdom-li');
  el.innerHTML = el.innerHTML + char.wisdom;

  el = document.getElementById('display-charisma-li');
  el.innerHTML = el.innerHTML + char.charisma;
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
