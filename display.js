'use strict';

var currentCharacter;
var myCharacters = JSON.parse(localStorage.getItem('myCharacters'));
currentCharacter = JSON.parse(localStorage.getItem('currentCharacter'));
//
// if (currentCharacter < 1){
//   currentCharacter = myCharacters[0];
// }

renderCharacter(currentCharacter);
renderSkills();
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

function renderSkills() {
  var str = calcSkillModifier(currentCharacter.strength);
  var dex = calcSkillModifier(currentCharacter.dexterity);
  var con = calcSkillModifier(currentCharacter.constitution);
  var int = calcSkillModifier(currentCharacter.intelligence);
  var wis = calcSkillModifier(currentCharacter.wisdom);
  var cha = calcSkillModifier(currentCharacter.charisma);
  var tr;
  var td;

  tr = document.getElementById('appraise-tr');
  td = document.createElement('td');
  td.textContent = int;
  tr.appendChild(td);

  tr = document.getElementById('autohypnosis-tr');
  td = document.createElement('td');
  td.textContent = wis;
  tr.appendChild(td);

  tr = document.getElementById('balance-tr');
  td = document.createElement('td');
  td.textContent = dex;
  tr.appendChild(td);

  tr = document.getElementById('bluff-tr');
  td = document.createElement('td');
  td.textContent = cha;
  tr.appendChild(td);

  tr = document.getElementById('climb-tr');
  td = document.createElement('td');
  td.textContent = str;
  tr.appendChild(td);

  tr = document.getElementById('concentration-tr');
  td = document.createElement('td');
  td.textContent = con;
  tr.appendChild(td);

  tr = document.getElementById('craft-tr');
  td = document.createElement('td');
  td.textContent = int;
  tr.appendChild(td);

  tr = document.getElementById('decipher-script-tr');
  td = document.createElement('td');
  td.textContent = int;
  tr.appendChild(td);

  tr = document.getElementById('diplomacy-tr');
  td = document.createElement('td');
  td.textContent = cha;
  tr.appendChild(td);

  tr = document.getElementById('disable-device-tr');
  td = document.createElement('td');
  td.textContent = int;
  tr.appendChild(td);

  tr = document.getElementById('disguise-tr');
  td = document.createElement('td');
  td.textContent = cha;
  tr.appendChild(td);

  tr = document.getElementById('escape-artist-tr');
  td = document.createElement('td');
  td.textContent = dex;
  tr.appendChild(td);

  tr = document.getElementById('forgery-tr');
  td = document.createElement('td');
  td.textContent = int;
  tr.appendChild(td);

  tr = document.getElementById('gather-information-tr');
  td = document.createElement('td');
  td.textContent = cha;
  tr.appendChild(td);

  tr = document.getElementById('handle-animal-tr');
  td = document.createElement('td');
  td.textContent = cha;
  tr.appendChild(td);

  tr = document.getElementById('heal-tr');
  td = document.createElement('td');
  td.textContent = wis;
  tr.appendChild(td);

  tr = document.getElementById('hide-tr');
  td = document.createElement('td');
  td.textContent = dex;
  tr.appendChild(td);

  tr = document.getElementById('intimidate-tr');
  td = document.createElement('td');
  td.textContent = cha;
  tr.appendChild(td);

  tr = document.getElementById('jump-tr');
  td = document.createElement('td');
  td.textContent = str;
  tr.appendChild(td);

  tr = document.getElementById('knowledge-arcana-tr');
  td = document.createElement('td');
  td.textContent = int;
  tr.appendChild(td);

  tr = document.getElementById('knowledge-arch-tr');
  td = document.createElement('td');
  td.textContent = int;
  tr.appendChild(td);

  tr = document.getElementById('knowledge-dungeoneering-tr');
  td = document.createElement('td');
  td.textContent = int;
  tr.appendChild(td);

  tr = document.getElementById('knowledge-geography-tr');
  td = document.createElement('td');
  td.textContent = int;
  tr.appendChild(td);

  tr = document.getElementById('knowledge-history-tr');
  td = document.createElement('td');
  td.textContent = int;
  tr.appendChild(td);

  tr = document.getElementById('knowledge-local-tr');
  td = document.createElement('td');
  td.textContent = int;
  tr.appendChild(td);

  tr = document.getElementById('knowledge-nature-tr');
  td = document.createElement('td');
  td.textContent = int;
  tr.appendChild(td);

  tr = document.getElementById('knowledge-nobility-tr');
  td = document.createElement('td');
  td.textContent = int;
  tr.appendChild(td);

  tr = document.getElementById('knowledge-planes-tr');
  td = document.createElement('td');
  td.textContent = int;
  tr.appendChild(td);

  tr = document.getElementById('knowledge-psionics-tr');
  td = document.createElement('td');
  td.textContent = int;
  tr.appendChild(td);

  tr = document.getElementById('knowledge-religion-tr');
  td = document.createElement('td');
  td.textContent = int;
  tr.appendChild(td);

  tr = document.getElementById('listen-tr');
  td = document.createElement('td');
  td.textContent = wis;
  tr.appendChild(td);

  tr = document.getElementById('move-silently-tr');
  td = document.createElement('td');
  td.textContent = dex;
  tr.appendChild(td);

  tr = document.getElementById('open-lock-tr');
  td = document.createElement('td');
  td.textContent = dex;
  tr.appendChild(td);

  tr = document.getElementById('perform-act-tr');
  td = document.createElement('td');
  td.textContent = cha;
  tr.appendChild(td);

  tr = document.getElementById('perform-comedy-tr');
  td = document.createElement('td');
  td.textContent = cha;
  tr.appendChild(td);

  tr = document.getElementById('perform-dance-tr');
  td = document.createElement('td');
  td.textContent = cha;
  tr.appendChild(td);

  tr = document.getElementById('perform-keyboard-tr');
  td = document.createElement('td');
  td.textContent = cha;
  tr.appendChild(td);

  tr = document.getElementById('perform-oratory-tr');
  td = document.createElement('td');
  td.textContent = cha;
  tr.appendChild(td);

  tr = document.getElementById('perform-percussion-tr');
  td = document.createElement('td');
  td.textContent = cha;
  tr.appendChild(td);

  tr = document.getElementById('perform-string-instrument-tr');
  td = document.createElement('td');
  td.textContent = cha;
  tr.appendChild(td);

  tr = document.getElementById('perform-sing-tr');
  td = document.createElement('td');
  td.textContent = cha;
  tr.appendChild(td);

  tr = document.getElementById('profession-tr');
  td = document.createElement('td');
  td.textContent = wis;
  tr.appendChild(td);

  tr = document.getElementById('psicraft-tr');
  td = document.createElement('td');
  td.textContent = int;
  tr.appendChild(td);

  tr = document.getElementById('ride-tr');
  td = document.createElement('td');
  td.textContent = dex;
  tr.appendChild(td);

  tr = document.getElementById('search-tr');
  td = document.createElement('td');
  td.textContent = int;
  tr.appendChild(td);

  tr = document.getElementById('sense-motive-tr');
  td = document.createElement('td');
  td.textContent = wis;
  tr.appendChild(td);

  tr = document.getElementById('sleight-of-hand-tr');
  td = document.createElement('td');
  td.textContent = dex;
  tr.appendChild(td);

  tr = document.getElementById('spellcraft-tr');
  td = document.createElement('td');
  td.textContent = int;
  tr.appendChild(td);

  tr = document.getElementById('spot-tr');
  td = document.createElement('td');
  td.textContent = wis;
  tr.appendChild(td);

  tr = document.getElementById('survival-tr');
  td = document.createElement('td');
  td.textContent = wis;
  tr.appendChild(td);

  tr = document.getElementById('swim-tr');
  td = document.createElement('td');
  td.textContent = str;
  tr.appendChild(td);

  tr = document.getElementById('tumble-tr');
  td = document.createElement('td');
  td.textContent = dex;
  tr.appendChild(td);

  tr = document.getElementById('magic-device-tr');
  td = document.createElement('td');
  td.textContent = cha;
  tr.appendChild(td);

  tr = document.getElementById('psionic-device-tr');
  td = document.createElement('td');
  td.textContent = cha;
  tr.appendChild(td);

  tr = document.getElementById('use-rope-tr');
  td = document.createElement('td');
  td.textContent = dex;
  tr.appendChild(td);
}

function calcSkillModifier(roll) {
  var mod;
  if(roll === 18){
    mod = 4;
  } else if (roll > 15) {
    mod = 3;
  } else if (roll > 13) {
    mod = 2;
  } else if (roll > 11) {
    mod = 1;
  } else if (roll > 9) {
    mod = 0;
  } else if (roll > 7) {
    mod = -1;
  } else if (roll > 5) {
    mod = -2;
  } else {
    mod = -3;
  }
  return mod;
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
  window.location.assign('index.html');
}
