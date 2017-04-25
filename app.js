'use strict';

var character;
var timesToRoll = 6;
var rolls = [];
var currentCharacter;
var myCharacters = JSON.parse(localStorage.getItem('myCharacters'));
if (myCharacters === null){
  myCharacters = [];
}

function Character(name, race, gender, charClass, align) {
  this.name = name;
  this.race = race;
  this.gender = gender;
  this.size;
  this.charClass = charClass;
  this.align = align;
  this.strength;
  this.dexterity;
  this.constitution;
  this.intelligence;
  this.wisdom;
  this.charisma;
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
  raceAttributes(race);
  rollDice(timesToRoll);
  renderAttributesTable();
  myCharacters.push(character);

  return character;
}

function renderAttributesTable() {
  var attributes = ['strength', 'dexterity', 'intelligence', 'charisma', 'wisdom', 'constitution'];
  var attributesDiv = document.getElementById('attributes-div');
  attributesDiv.textContent = '';
  var rollDiv;
  var attDiv;
  var numDiv;
  var upDiv;
  var dwnDiv;
  for(var i = 0; i < rolls.length; i++) {
    rollDiv = document.createElement('div');
    rollDiv.setAttribute('roll-index', i);

    attDiv = document.createElement('div');
    attDiv.innerHTML = '<h3>' + attributes[i] + '</h3>';
    rollDiv.appendChild(attDiv);

    numDiv = document.createElement('div');
    numDiv.innerHTML = '<p>' + rolls[i] + '</p>';
    rollDiv.appendChild(numDiv);

    if(i > 0) {
      upDiv = document.createElement('div');
      upDiv.innerHTML = '<p>up</p>';
      upDiv.addEventListener('click', handleUpClick);
      rollDiv.appendChild(upDiv);
    }

    if(i < rolls.length - 1) {
      dwnDiv = document.createElement('div');
      dwnDiv.innerHTML = '<p>down</p>';
      dwnDiv.addEventListener('click', handleDwnClick);
      rollDiv.appendChild(dwnDiv);
    }

    attributesDiv.appendChild(rollDiv);
  }

  // character.setWisdom();
  // character.setCharisma();
  // character.setStrength();
  // character.setDexterity();
  // character.setIntelligence();
  // character.setConstitution();
}

function handleUpClick() {
  var indexA = event.target.parentElement.parentElement.getAttribute('roll-index');
  indexA = parseInt(indexA);
  swapRolls(indexA, indexA - 1);
  renderAttributesTable();
}

function handleDwnClick() {
  var indexA = event.target.parentElement.parentElement.getAttribute('roll-index');
  console.log('index a before', indexA);
  indexA = parseInt(indexA);
  swapRolls(indexA, indexA + 1);
  renderAttributesTable();
}

function swapRolls(indexA, indexB) {
  console.log('indexA', indexA);
  console.log('indexB', indexB);
  var tmp = rolls[indexA];
  console.log('rolls', rolls);
  rolls[indexA] = rolls[indexB];
  rolls[indexB] = tmp;
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
