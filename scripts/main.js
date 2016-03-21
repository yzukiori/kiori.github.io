/*var myHeading = document.querySelector("h1");
myHeading.innerHTML = "Hello World!";

function multiply( num1, num2){
	var result = num1 * num2;
	return result;
}

document.querySelector("h1").onclick = function(){
	alert("ouch! I'm h1!");
}

*/

var myImage = document.querySelector("img");

myImage.onclick = function(){
	var mySrc = myImage.getAttribute("src");
	
	if( mySrc === "images/firefox-icon.png"){
		myImage.setAttribute("src", "images/firefox-icon_2.png");
	} else {
		myImage.setAttribute("src", "images/firefox-icon.png");
	}
}

var myBtn = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName(){
	var myName = prompt("Please enter your name.");
	localStorage.setItem("name", myName);
	myHeading.innerHTML = "Mozilla is cool, " + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
	var storedName = localStorage.getItem("name");
	myHeading.innerHTML = "Mozilla is cool, " + storedName;
}

myBtn.onclick = function() {
  setUserName();
}