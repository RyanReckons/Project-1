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


function pickColor(){
  var color,
      color2,
  
  color = prompt("Give me a color!");
  color = color.toLowerCase();

  if (color == "red"){
  color2 = prompt("Give me another color.");
  color2 = color2.toLowerCase();
    if (color2 == "green"){
        alert("Those colors put together make yellow!");
    } else if (color2 == "blue"){
        alert("Those colors put together make violate!");
    } else if (color2 == "yellow"){
        alert("Together, those colors make orange!");
    } else if (color2 == "brown"){
        alert("Those colors make Maroon.");
    } else if (color2 == "pink"){
        alert("Darker pink");
    } else if (color2 == "orange"){
        alert("Darker orange");
    } else if (color2 == "purple"){
        alert("magenta or mauve depending on the mixture!");
    }
  } else if (color == "green"){
  color2 = prompt("Give me another color.");
  color2 = color2.toLowerCase();
    if (color2 == "red"){
        alert("Together those colors make either a brown or gray depending on the mixture!");
    } else if (color2 == "blue"){
        alert("Those colors put together make turquoise!");
    } else if (color2 == "yellow"){
        alert("Together, they make a color called chartreuse!");
    } else if (color2 == "brown"){
        alert("Black, hazel or somewhere in between!");
    } else if (color2 == "pink"){
        alert("Makes a light brown!");
    } else if (color2 == "orange"){
        alert("Makes brown");
    } else if (color2 == "purple"){
        alert("Brown");
    }
  } else if (color == "blue"){
  color2 = prompt("Give me another color.");
  color2 = color2.toLowerCase();
    if (color2 == "red"){
        alert("Together those colors make purple!");
    } else if (color2 == "green"){
        alert("Those colors put together make turquoise!");
    } else if (color2 == "yellow"){
        alert("They make green of course!");
    } else if (color2 == "brown"){
        alert("Either black or a slightly tinted brown.");
    } else if (color2 == "pink"){
        alert("Possibly a lighter shade of purple!");
    } else if (color2 == "orange"){
        alert("Variations of brown");
    } else if (color2 == "purple"){
        alert("Make indigo");
    }
  } else if (color == "yellow"){
  color2 = prompt("Give me another color.");
  color2 = color2.toLowerCase();
    if (color2 == "red"){
        alert("Those colors put together make orange!");
    } else if (color2 == "green"){
        alert("Those colors put together make lightgreen!");
    } else if (color2 == "blue"){
        alert("Together, those colors make lightbrown!");
    } else if (color2 == "brown"){
        alert("Mustard");
    } else if (color2 == "pink"){
        alert("Peach!");
    } else if (color2 == "orange"){
        alert("ligher orange");
    } else if (color2 == "purple"){
        alert("Make brown");
    }

  } else if (color == "brown"){
  color2 = prompt("Give me another color.");
  color2 = color2.toLowerCase();
    if (color2 == "red"){
        alert("Answer coming soon!");
    } else if (color2 == "green"){
        alert("Answer coming soon!");
    } else if (color2 == "blue"){
        alert("Answer coming soon!");
    } else if (color2 == "yellow"){
        alert("Those colors make Maroon.");
    } else if (color2 == "pink"){
        alert("Answer coming soon!");
    } else if (color2 == "orange"){
        alert("Answer coming soon!");
    } else if (color2 == "purple"){
        alert("Answer coming soon!");
    }

  } else if (color == "pink"){
  color2 = prompt("Give me another color.");
  color2 = color2.toLowerCase();
    if (color2 == "red"){
        alert("Answer coming soon!");
    } else if (color2 == "green"){
        alert("Answer coming soon!");
    } else if (color2 == "blue"){
        alert("Answer coming soon!");
    } else if (color2 == "yellow"){
        alert("Answer coming soon!");
    } else if (color2 == "brown"){
        alert("Answer coming soon!");
    } else if (color2 == "orange"){
        alert("Answer coming soon!");
    } else if (color2 == "purple"){
        alert("Answer coming soon!");
    }
  } else if (color == "orange"){
  color2 = prompt("Give me another color.");
  color2 = color2.toLowerCase();
    if (color2 == "red"){
        alert("Answer coming soon!");
    } else if (color2 == "green"){
        alert("Answer coming soon!");
    } else if (color2 == "blue"){
        alert("Answer coming soon!");
    } else if (color2 == "yellow"){
        alert("Answer coming soon!");
    } else if (color2 == "brown"){
        alert("Answer coming soon!");
    } else if (color2 == "pink"){
        alert("Answer coming soon!");
    } else if (color2 == "purple"){
        alert("Answer coming soon!");
    }
  } else if (color == "purple"){
  color2 = prompt("Give me another color.");
  color2 = color2.toLowerCase();
    if (color2 == "blue"){
        alert("Answer coming soon!");
    } else if (color2 == "green"){
        alert("Answer coming soon!");
    } else if (color2 == "blue"){
        alert("Answer coming soon!");
    } else if (color2 == "yellow"){
        alert("Answer coming soon!");
    } else if (color2 == "brown"){
        alert("Answer coming soon!");
    } else if (color2 == "pink"){
        alert("Answer coming soon!");
    } else if (color2 == "orange"){
        alert("Answer coming soon!");
    }
  }
}