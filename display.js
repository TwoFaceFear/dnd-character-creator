'use strict';

var currentCharacter;
var myCharacters = JSON.parse(localStorage.getItem('myCharacters'));
currentCharacter = JSON.parse(localStorage.getItem('currentCharacter'));

if (currentCharacter < 1){
  currentCharacter = myCharacters[0];
}

renderCharacter(currentCharacter);
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

  var img = document.getElementById('display-img-class');
  img.src = 'assets/' + char.charClass + '.png';

  img = document.getElementById('display-img-race');
  img.src = 'assets/' + char.race + '.png';
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

Array.prototype.swap = function (x,y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
};

var aTags = [];
function eventAdder (){
  aTags = document.getElementsByName('click');
  for (var i=0;i<aTags.length;i++){
    var a = aTags[i];
    a.addEventListener('click', handleSubmitClick);
  }
}
eventAdder();

function handleSubmitClick(event) {
  // event.preventDefault();
  var currentTarget = event.target.id;
  console.log(currentTarget);
  currentCharacter = myCharacters[currentTarget];
  localStorage.setItem('currentCharacter', JSON.stringify(currentCharacter));
}

function delCharacter(){
  var index = findCharacter();
  myCharacters.splice(index, 1);
}

function findCharacter(){
  // var characterToDelete = currentCharacter.name;
  for (var i = 0; i < myCharacters.length; i++) {
    if (myCharacters[i].name == currentCharacter.name) {
      return i;
    }
  }
  return null;
}

var deleteCharacter = document.getElementById('delete');
deleteCharacter.addEventListener('click', handleDeleteClick);
function handleDeleteClick(){
  delCharacter();
  currentCharacter = [];
  localStorage.setItem('myCharacters', JSON.stringify(myCharacters));
  localStorage.setItem('currentCharacter', JSON.stringify(currentCharacter));
  window.location.reload();
}
