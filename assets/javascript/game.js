//randomly generate crystal between 1-12
//random number to guess is between 19-120
$(document).ready(function() {


var targetNumber = Math.floor(Math.random() * 102) + 19;
var crystalNumber1 = Math.floor(Math.random() * 12) +1;
var crystalNumber2 = Math.floor(Math.random() * 12) +1;
var crystalNumber3 = Math.floor(Math.random() * 12) +1;
var crystalNumber4 = Math.floor(Math.random() * 12) +1;
//counters
var wins= 1;
var loss= 1;
var current=0;


$("#targetguess").text(targetNumber);

$("#current").text(+ current);
//var crystalNumber1 = $("#crystal1");

$("#crystal1").click(function(){
    current = current + crystalNumber1;
    $("#current").text(" " + current);
    compare();
});

$("#crystal2").click(function(){
    current = current + crystalNumber2;
    $("#current").text(" " + current);
    compare();
});

$("#crystal3").click(function(){
    current = current + crystalNumber3;
    $("#current").text(" " + current);
    compare();
});

$("#crystal4").click(function(){
    current = current + crystalNumber4;
    $("#current").text(" " + current);
    compare();
});


var compare = function(){
    if(current > targetNumber){
        alert("You Failed!");
        loss = loss++
        $("#loss").text(loss);
    }
    if (current === targetNumber){
        alert("YOURE A TOTAL WINNER!");
        wins = wins++
        $("#wins").text(wins);
    }	
};


});