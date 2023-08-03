/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let generateCard = () => {};
  let number = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "J",
    "K",
    "Q",
    "A"
  ];
  let symbol = ["♦", "♥", "♠", "♣"];

  let numbIndx = Math.floor(Math.random() * number.length);
  let symIndx = Math.floor(Math.random() * symbol.length);

  console.log(numbIndx);
  console.log(symIndx);

  let theNumber = document.getElementById("the-number");
  console.log(theNumber);
  theNumber.innerHTML = number[numbIndx];

  let theSymbol = document.getElementById("the-symbol");
  console.log(theSymbol);
  theSymbol.innerHTML = symbol[symIndx];

  let theSymbol2 = document.getElementById("the-symbol2");
  console.log(theSymbol2);
  theSymbol2.innerHTML = symbol[symIndx];
  console.log("Hello Rigo from the console!");
};
