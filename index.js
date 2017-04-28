'use strict';
// var currentCharacter;
var currentCharacter = JSON.parse(localStorage.getItem('currentCharacter'));
var myCharacters = JSON.parse(localStorage.getItem('myCharacters'));
if (myCharacters === null){
  myCharacters = [];
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
    a.addEventListener('click', handleSubmitClick);
  }
}
eventAdder();

function handleSubmitClick(event) {
  // event.preventDefault();
  var currentTarget = event.target.id;
  currentCharacter = myCharacters[currentTarget];
  localStorage.setItem('currentCharacter', JSON.stringify(currentCharacter));
}
