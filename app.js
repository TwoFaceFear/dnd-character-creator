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
}

Character.prototype.setDexterity = function() {
  this.dexterity = rollDice();
}

Character.prototype.setConstitution = function() {
  this.constitution = rollDice();
}

Character.prototype.setIntelligence = function() {
  this.intelligence = rollDice();
}

Character.prototype.setWisdom = function() {
  this.wisdom = rollDice();
}

Character.prototype.setCharisma = function() {
  this.charisma = rollDice();
}

function rollDice() {
  var total = 0;
  for(var i = 0; i < 5; i++) {
    total += Math.floor(Math.random() * 6 + 1);
  }
  return total;
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

function getSize(){
  var a = document.getElementById('size');
  var getSize = a.options[a.selectedIndex].value;
  return getSize;
}

function getAlignment(){
  var a = document.getElementById('alignment');
  var getAlignment = a.options[a.selectedIndex].value;
  return getAlignment;
}
