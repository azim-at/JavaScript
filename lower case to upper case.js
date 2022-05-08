// Casing
var name = prompt("Enter your name:");
var LowerCase = name.toLowerCase();
var firstSlicing = name.slice(0,1);
var secondSlicing = LowerCase.slice(1,10);
var UpperCase = firstSlicing.toUpperCase();
alert("Hello "+UpperCase+secondSlicing);