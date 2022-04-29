// Copyright (c) 2022 Angelo Pintilie All rights reserved
// Created by: Angelo Pintilie
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays a response based on a users inputted number
 */
function displayNumber () {
  	// initialize variables
	let response = ""
	let randomNumber = Math.floor((Math.random() * 6) + 1);
  
	// get user input
	let number = parseInt(document.getElementById('numRan').value)


  	// if number is number is equal to random number, display correct response
	if (number == randomNumber) {
		response = "You guessed right, great job!"
	} 
	// otherwise, if number is not equal to random number, display incorrect response	
	else if(number != randomNumber) {
		response = "Unlucky, you guessed wrong! The correct answer was " + randomNumber
	}

  // display the results
  document.getElementById('number').innerHTML = response
}