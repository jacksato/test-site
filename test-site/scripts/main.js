var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');
var myButton = document.querySelector('button');


myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/cat.jpg') {
    myImage.setAttribute('src','images/angrycat.jpg');
  }
  if(mySrc === 'images/angrycat.jpg') {
    myImage.setAttribute('src','images/cat.jpg');
  }
} // changing the cat picture

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Thank you ' + myName;
}

if(!localStorage.getItem('name')) {
  myHeading.textContent = 'CATS!!';
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Thank you ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
