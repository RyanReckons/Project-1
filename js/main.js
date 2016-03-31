var shortPosAnswers = ['yes', 'sure', 'Sure', 'yep', 'yepper'];
var longPosAnswers = ['lets do it', 'im all for it', 'you betcha', 'sure thing'];
var negAnswers = ['not sure', 'not so good', 'not so', 'no thanks', 'no', 'not really'];
var answer1 = ['12am', '1am', '2am', '3am', '4am', '5am'];
var answer2 = [, '6am', '7am'];
var answer3 = ['8am', '9am', '10am','11am'];
var posGreet = ['good', 'great thank you!', 'great'];

function playBall(){
  var ball,
      typeOfBall;

  ball = prompt("Want to play ball, yes or no?");
  ball = ball.toLowerCase();
  
  if (shortPosAnswers.indexOf(ball) >= 0){
      typeOfBall = prompt("Basketball or Baseball?");
      typeOfBall = typeOfBall.toLowerCase();
      if (typeOfBall == "basketball"){
          game = prompt("One on One or Horse?")
          game = game.toLowerCase();
          if (game == "one on one"){
              confirm("Let's flip a coin to see who gets ball first!");
          } else {
              confirm("You go first!");
          }
      } else if (typeOfBall == "baseball"){
          confirm("Let's play catch!");
      }
  } else {
      confirm("Maybe next time then!");
  }
}


function guessFavColor(){
  var color,
      color2,
      color3,
      color4,

  color = prompt("Give me a color!");
  color = color.toLowerCase();

  if (color == "green"){
    color2 = prompt("Give me another color.");
    color2 = color2.toLowerCase();
      if (color2 == "blue"){
        alert("Those colors put together make turquoise!");
      }
  } else if (color == "blue"){
      color2 = prompt("Give me another color.");
      color2 = color2.toLowerCase();
        if (color2 == "green"){
          alert("Together those colors make turquoise!");
        }
  }

}