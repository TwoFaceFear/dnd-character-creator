'use strict';
var character;
var currentCharacter = [];
var timesToRoll; //sets the number of rolls
var rolls = [];
var myCharacters = JSON.parse(localStorage.getItem('myCharacters'));
if (myCharacters === null){
  myCharacters = [];
}
//var currentCharacter = [];
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
  this.heightFeet;
  this.heightInches;
  this.weight;
  this.story;
  this.looks;
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
Character.prototype.setHeightFeet = function(num) {
  this.heightFeet = num;
};
Character.prototype.setHeightInches = function(num) {
  this.heightInches = num;
};
Character.prototype.setWeight = function(num) {
  this.weight = num;
};
Character.prototype.setStory = function(num) {
  this.story = num;
};
Character.prototype.setLooks = function(num) {
  this.looks = num;
};
function main() {
  var submit = document.getElementById('submit');
  if(submit) {
    submit.addEventListener('click', handleSubmitClick);
  }
}
function handleSubmitClick() {
  var rollInput = document.getElementById('num-rolls-input');
  timesToRoll = rollInput.value;
  generateCharacter();
}
function rollDice(numRolls) {
  for(var i = 0; i < numRolls; i++) {
    var total = 0;
    for(var j = 0; j < 3; j++) {
      total += Math.floor(Math.random() * 6 + 1);
    }
    rolls[i] = total;
  }
  return rolls;
}
function onlyLetters(nameInput) {
  //regular expression for all upper and lower case letters and spaces
  var alpha = /^[A-Za-z \s]+$/;
  if(nameInput.match(alpha))
  {
    return true;
  }
  else
  {
    return false;
  }
}
function generateCharacter() {
  var name = document.getElementById('name').value;
  //this checks that only letters are input for names
  if(!onlyLetters(name)) {
    window.alert('Character name must only contain letters.');
    location.reload();
  } else {
    var race = getRace();
    var gender = getGender();
    var charClass = getClass();
    var align = getAlignment();
    character = new Character(name, race, gender, charClass, align);
    character.setHeightFeet(getHeightFeet());
    character.setHeightInches(getHeightInches());
    character.setWeight(getWeight());
    character.setStory(getStory());
    character.setLooks(getLooks());
    raceAttributes(race);
    rollDice(timesToRoll);
    renderAttributesTable();
    myCharacters.push(character);
    return character;
  }
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
    if(i < 6) {
      attDiv = document.createElement('div');
      attDiv.innerHTML = '<h3>' + attributes[i] + '</h3>';
      rollDiv.appendChild(attDiv);
    }
    if(i > 0) {
      upDiv = document.createElement('div');
      upDiv.setAttribute('style', 'height: 25px');
      upDiv.innerHTML = '<img class="up-arrow" src="assets/arrow22.png" alt="Up"/>';
      upDiv.addEventListener('click', handleUpClick);
      rollDiv.appendChild(upDiv);
    }
    numDiv = document.createElement('div');
    numDiv.innerHTML = '<p>' + rolls[i] + '</p>';
    rollDiv.appendChild(numDiv);
    if(i < rolls.length - 1) {
      dwnDiv = document.createElement('div');
      dwnDiv.innerHTML = '<img class="down-arrow" src="assets/arrow22.png" alt="Down"/>';
      dwnDiv.addEventListener('click', handleDwnClick);
      rollDiv.appendChild(dwnDiv);
    }
    if(i ===  6) {
      var hr = document.createElement('hr');
      hr.setAttribute('width', '50%');
      hr.setAttribute('align', 'center');
      attributesDiv.appendChild(hr);
      var p = document.createElement('p');
      p.textContent = 'Rolls below line will be discarded.';
      attributesDiv.appendChild(p);
    }
    attributesDiv.appendChild(rollDiv);
  }
  var sbmtDiv = document.createElement('div');
  sbmtDiv.innerHTML = '<h3>SUBMIT</h3>';
  sbmtDiv.addEventListener('click', handleSbmtDivClick);
  rollDiv.appendChild(sbmtDiv);
}
function handleSbmtDivClick() {
  character.setStrength(rolls[0]);
  character.setDexterity(rolls[1]);
  character.setIntelligence(rolls[2]);
  character.setCharisma(rolls[3]);
  character.setWisdom(rolls[4]);
  character.setConstitution(rolls[5]);
  localStorage.setItem('myCharacters', JSON.stringify(myCharacters));
  localStorage.setItem('currentCharacter', JSON.stringify(character));
  document.location.href = 'display.html';
}
function handleUpClick() {
  var indexA = event.target.parentElement.parentElement.getAttribute('roll-index');
  indexA = parseInt(indexA);
  swapRolls(indexA, indexA - 1);
  renderAttributesTable();
}
function handleDwnClick() {
  var indexA = event.target.parentElement.parentElement.getAttribute('roll-index');
  indexA = parseInt(indexA);
  swapRolls(indexA, indexA + 1);
  renderAttributesTable();
}
function swapRolls(indexA, indexB) {
  var tmp = rolls[indexA];
  rolls[indexA] = rolls[indexB];
  rolls[indexB] = tmp;
}
function getHeightFeet() {
  var feet = document.getElementById('feet').value;
  return feet;
}
function getHeightInches() {
  var inches = document.getElementById('inches').value;
  return inches;
}
function getWeight() {
  var weight = document.getElementById('weight').value;
  return weight;
}
function getStory() {
  var story = document.getElementById('characterStory').value;
  return story;
}
function getLooks() {
  var looks = document.getElementById('looks').value;
  return looks;
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
for (var i = 0; i < myCharacters.length; i++){
  var sidebar = document.getElementById('sidebar');
  var aTag = document.createElement('a');
  aTag.setAttribute('href','display.html');
  aTag.setAttribute('name', 'click');
  aTag.setAttribute('class', 'characters');
  // aTag.setAttribute('style', 'padding: 20px')
  aTag.setAttribute('id', i);
  aTag.innerHTML = myCharacters[i].name;
  sidebar.appendChild(aTag);
}

var aTags = [];
function eventAdder (){
  aTags = document.getElementsByName('click');
  for (var i=0;i<aTags.length;i++){
    var a = aTags[i];
    a.addEventListener('click', handleSubmitClickSideBar);
  }
}
eventAdder();

function handleSubmitClickSideBar(event) {
  // event.preventDefault();
  var currentTarget = event.target.id;
  currentCharacter = myCharacters[currentTarget];
  localStorage.setItem('currentCharacter', JSON.stringify(currentCharacter));
}

main();
