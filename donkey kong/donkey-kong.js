// function place() {
//     document.body.style.backgroundPosition="top right"; 
//   }
//   document.ge("").innerHTML = place();

// var obj = null;

// function moveBanana() {
//        var x = Math.floor((Math.random() * 1800) + 1);
//             document.getElementById("banana").style.marginLeft = x + "px";
//                  return x; }

//   function init() {
//     moveBanana();
//     obj = document.getElementById("dk");
//     obj.style.left = '47px';
//     obj.style.top = '687px';
// }

// var score = 0;

// function checkCollision(elm1, elm2) {
//   var elm1Rect = elm1.getBoundingClientRect();
//   var elm2Rect = elm2.getBoundingClientRect();

//   return (elm1Rect.right >= elm2Rect.left &&
//       elm1Rect.left <= elm2Rect.right) &&
//     (elm1Rect.bottom >= elm2Rect.top &&
//       elm1Rect.top <= elm2Rect.bottom);
// }

// function moveDk(evt) {
//   var key;

//   var donkey = document.getElementById('dk');
//   var banana = document.getElementById('banana');
//   var scoreDiv = document.getElementById('counter');

//   switch (evt.keyCode) {
//     case 65:
//     stepsLeft();
//       break;
//     case 68:
//     stepsRight();
//     break;
//     case 32:
//     jump();
//     break;
//   }

//   function stepsLeft() {
//     obj.style.left = parseInt(obj.style.left) - 10 + "px";
//     obj.style.webkitTransform = "rotatey(360deg)";
//   }
  
//   function stepsRight() {
//     obj.style.left = parseInt(obj.style.left) + 10 + "px";
//     obj.style.webkitTransform = "rotatey(180deg)";
//   }
  
//   function jump() {
//     var donkey = $("#dk");  
//     donkey.animate({bottom: "500px"}, "slow");
//     donkey.animate({bottom: "20px"}, "slow");
//   }

//   setTimeout(function() {

//     if (checkCollision(banana, dk)) {
//       scoreDiv.innerHTML = ++score;
//       moveBanana()
//       if (score == 10) {
//           alert("suggma")
//           window.location.reload()
//       }
//   }
// }, 1);


// }
// window.addEventListener('keydown', moveDk);
// window.onload = init;




// function moveBanana() {
//   Math.random();
  // when
// }
// document.getElementById("banana").innerHTML = Math.random();
// funtion moveBanana() {
// banana.style.left = math.round(math.random() banana) * "20px";
// }
// document.getElementById("banana") = moveBanana();

// var score = 0;

// Blocka = new banna(1);
// setInterval(Update,20);
// function punten()
// {
//     optellenscore = setInterval(optellen, 1);
//     function optellen()
//     {
        // score ++;
//     }

// }
//  document.getElementById("counter").innerHTML = punten();

//  function banna(kolb)
//  {
//      this.width = 20;
//      this.height = 40;
//      this.show = true;
//      //this.x = canvas.width/2;
//      this.x = canvas.width + 20;
//      this.y = (canvas.height/3*2)+10;
//      this.draw = function(){
//          this.move();
//          if(this.show){
//              if(kolb==1){
//                  ctx.fillStyle="#000000";
//                  ctx.fillRect(this.x, this.y, this.width, this.height);
//              }
//          }   
//      }
//      this.move = function() {
//          this.x -= Gamespeed;
//          this.death();
//      }
//      this.death = function(){
//          if(this.x<=20){
//              this.show = false;
//          }
//      }
//  }

// function hit() {
//   var bodyWidth = document.body
//   var randPosX = Math.floor((Math.random() * bodyWidth));
//   var posLog = document.getElementById('banana');
//   var posX = 'banana ' + randPosX;

//   posLog.innerHTML = posX;
// };
 
// var init = {x: 5, y: 5, width: 50, height: 50}
// var banana = {x: 20, y: 10, width: 10, height: 10}

// if (init.x < banana.x + banana.width &&
//    init.x + init.width > banana.x &&
//    init.y < banana.y + banana.height &&
//    init.y + init.height > banana.y) 

//    if (5 < 30 &&
//     55 > 20 &&
//     5 < 20 &&
//     55 > 10)


var obj = null;
var score = 0;

function init() {
  moveBananaX();
  obj = document.getElementById("dk");
  obj.style.left = "0px";
  obj.style.bottom = "95px";
}

function moveBananaX() {
  var x = Math.floor(Math.random() * 359 + 1);
  document.getElementById("banana").style.top = x + "px";
  return x;
}

function moveBananaY() {
  var y = Math.floor(Math.random() * 1279 + 1);
  document.getElementById("banana").style.left = y + "px";
  return y;
}

function checkCollision(elm1, elm2) {
  var elm1Rect = elm1.getBoundingClientRect();
  var elm2Rect = elm2.getBoundingClientRect();

  return (
    elm1Rect.right >= elm2Rect.left &&
    elm1Rect.left <= elm2Rect.right &&
    elm1Rect.bottom >= elm2Rect.top &&
    elm1Rect.top <= elm2Rect.bottom
  );
}

function movedk(evt) {
  var dk = document.getElementById("dk");
  var banana = document.getElementById("banana");
  var scoreDiv = document.getElementById("counter");

  switch (evt.keyCode) {
    case 65:
      stepsLeft();
      break;
    case 68:
      stepsRight();
      break;
    case 32:
      Jump();
      break;
  }

  function stepsLeft() {
    obj.style.left = parseInt(obj.style.left) - 10 + "px";
    obj.style.webkitTransform = "rotateY(360deg)";
  }

  function stepsRight() {
    obj.style.left = parseInt(obj.style.left) + 10 + "px";
    obj.style.webkitTransform = "rotateY(180deg)";
  }

  function Jump() {
    var dk = $("#dk");
    dk.animate({ bottom: "780px" }, "slow");
    dk.animate({ bottom: "95px" }, "slow");
  }

  setTimeout(function() {
    if (checkCollision(banana, dk)) {
      scoreDiv.innerHTML = ++score;
      moveBananaX();
      moveBananaY();
      if (score == 10) {
        alert("Game Over");
        window.location.reload();
      }
    }
  }, 1);
}

window.addEventListener("keydown", movedk);

window.onload = init;