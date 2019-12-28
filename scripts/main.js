
// Image switcher code



let myImage = document.querySelector('img');



myImage.onclick = function() {

  let mySrc = myImage.getAttribute('src');

  if(mySrc === 'images/Messi.png') {

    myImage.setAttribute ('src','images/Cristiano.png');

  } else {

    myImage.setAttribute ('src','images/Messi.png');

  }

}



// Personalized welcome message code



let myButton = document.querySelector('button');

let myHeading = document.querySelector('h1');



function setUserName() {

  let myName = prompt('Please enter your name.');

  if(!myName || myName === null) {

    setUserName();

  } else {

    localStorage.setItem('name', myName);

    myHeading.innerHTML = 'Messi es mejor, asúmelo ' + myName;

  }

}



if(!localStorage.getItem('name')) {

  setUserName();

} else {

  let storedName = localStorage.getItem('name');

  myHeading.innerHTML = 'Messi es el mejor, asúmelo ' + storedName;

}



myButton.onclick = function() {

  setUserName();

}
 <head>
        <meta charset="utf-8">
        <title>Derivado de "Desafío: pasarela"</title>
        <style>
            #cat {
                position: absolute;
                left: 0px;
            }
        </style>
    </head>
    <body>
    <div>
        <!-- Cat walking GIF from: http://www.anniemation.com/clip_art/graphics.html -->
        <img id="cat" src="https://www.google.es/imgres?imgurl=https%3A%2F%2Fsgfm.elcorteingles.es%2FSGFM%2Fdctm%2FMEDIA03%2F201806%2F06%2F00108418312347____3__640x640.jpg&imgrefurl=https%3A%2F%2Fwww.elcorteingles.es%2Fdeportes%2FA24097825-balon-de-futbol-la-liga-2018-2019-strike-nike%2F&tbnid=JB27SgBCsaIvtM&vet=12ahUKEwi62faMuNjmAhUJrhoKHZg5BosQMygHegUIARDzAg..i&docid=_N9BW9pdoZvHQM&w=640&h=640&q=balon%20de%20futbol&safe=active&ved=2ahUKEwi62faMuNjmAhUJrhoKHZg5BosQMygHegUIARDzAg">
    </div>
  

   var catEl = document.getElementById("cat");
 
  var startTime = new Date().getTime();
  var walkTheCat = function() {
      var currTime = new Date().getTime();
      var secondsElapsed = ((currTime - startTime)/1000);
   var newLeft= secondsElapsed*77 + "px";
    catEl.style.left= newLeft;
    window.requestAnimationFrame(walkTheCat);
  };
  walkTheCat();
