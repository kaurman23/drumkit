// function handleClick() {
//   var audio = new Audio("sounds/crash.mp3");
//   audio.play();
// }

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var btn = this.innerHTML;
    playSound(btn);
    buttonAnimation(btn);

  });
}
document.addEventListener("keydown", function(event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

function playSound(btn) {
  switch (btn) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    default:
      console.log("Out of the world");

  }
}

function buttonAnimation(eventPress)
{
  var actvButton=document.querySelector("."+eventPress);
  actvButton.classList.add("pressed");
  setTimeout(function() {
    actvButton.classList.remove("pressed");
  },100);
}
