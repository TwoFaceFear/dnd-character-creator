'use strict';

var character;
var currentCharacter = [];
var myCharacters = [];
// var slugbyte = new Character('slugbyte', 'human', 'male', 'wizard', 'chaoticGood');
// currentCharacter.push(slugbyte);
// localStorage.setItem('myCharacters', JSON.stringify(myCharacters));
// localStorage.setItem('currentCharacter', JSON.stringify(currentCharacter));
myCharacters = JSON.parse(localStorage.getItem('myCharacters'));
currentCharacter = JSON.parse(localStorage.getItem('currentCharacter'));

if (currentCharacter < 1){
  currentCharacter = myCharacters[0];
}
else if (currentCharacter === null){
  currentCharacter = [];
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
  this.heightFeet;
  this.heightInches;
  this.weight;
  this.story;
  this.looks;
}

function onlyLetters(nameInput) {
  //below is a regular expression that represents all upper and lower case letters
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


Character.prototype.setStrength = function(num) {
  this.strength = num;
};

function getStrength() {
  var strength = document.getElementById('strength').value;
  return strength;
}

Character.prototype.setDexterity = function(num) {
  this.dexterity = num;
};

function getDexterity() {
  var dexterity = document.getElementById('dexterity').value;
  return dexterity;
}

Character.prototype.setIntelligence = function(num) {
  this.intelligence = num;
};

function getIntelligence() {
  var intelligence = document.getElementById('intelligence').value;
  return intelligence;
}

Character.prototype.setConstitution = function(num) {
  this.constitution = num;
};

function getConstitution() {
  var constitution = document.getElementById('constitution').value;
  return constitution;
}

Character.prototype.setWisdom = function(num) {
  this.wisdom = num;
};

function getWisdom() {
  var wisdom = document.getElementById('wisdom').value;
  return wisdom;
}

Character.prototype.setCharisma = function(num) {
  this.charisma = num;
};

function getCharisma() {
  var charisma = document.getElementById('charisma').value;
  return charisma;
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
    character.setStrength(getStrength());
    character.setDexterity(getDexterity());
    character.setConstitution(getConstitution());
    character.setIntelligence(getIntelligence());
    character.setWisdom(getWisdom());
    character.setCharisma(getCharisma());
    raceAttributes(race);

    myCharacters.push(character);

    return character;
  }
}

function main() {

  var submit = document.getElementById('submit');

  if(submit) {
    submit.addEventListener('click', handleSubmitClick);
  }

}

function handleSubmitClick() {
  generateCharacter();
  currentCharacter = character;
  localStorage.setItem('myCharacters', JSON.stringify(myCharacters));
  localStorage.setItem('currentCharacter', JSON.stringify(currentCharacter));
  document.location.href = 'display.html';
}

for (var i = 0; i < myCharacters.length; i++){
  var sidebar = document.getElementById('sidebar');
  var aTag = document.createElement('a');
  aTag.setAttribute('href','display.html');
  aTag.setAttribute('name', 'click');
  aTag.setAttribute('class', 'characters');
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
