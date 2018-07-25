const generateButton = document.querySelector("#generate-button");
const generatorDiv = document.querySelector(".generator");

generateButton.addEventListener("click", (e) => {
  let randomNumber = () => {
    Math.floor(Math.random() * 10);
  };

  let promptOne = randomNumber();
  let promptTwo = randomNumber();
  let promptThree = randomNumber();

  switch(promptOne) {
    case 0:
      promptOne = "apple";
      break;
    case 1:
      promptOne = "ring";
      break;
    case 2:
      promptOne = "bear";
      break;
    case 3:
      promptOne = "giant";
      break;
    case 4:
      promptOne = "wish";
      break;
    case 5:
      promptOne = "seed";
      break;
    case 6:
      promptOne = "miracle";
      break;
    case 7:
      promptOne = "teacup";
      break;
    case 8:
      promptOne = "mirror";
      break;
    case 9:
      promptOne = "old house";
      break;
    default:
      alert("Error");
      break;
  }
  switch(promptTwo) {
    case 0:
      promptTwo = "cat";
      break;
    case 1:
      promptTwo = "glove";
      break;
    case 2:
      promptTwo = "child";
      break;
    case 3:
      promptTwo = "forest";
      break;
    case 4:
      promptTwo = "violin";
      break;
    case 5:
      promptTwo = "siren";
      break;
    case 6:
      promptTwo = "laugh";
      break;
    case 7:
      promptTwo = "hiccup";
      break;
    case 8:
      promptTwo = "fairy";
      break;
    case 9:
      promptTwo = "sword";
      break;
    default:
      alert("Error");
      break;
  }
  switch(promptThree) {
    case 0:
      promptThree = "hurricane";
      break;
    case 1:
      promptThree = "curse";
      break;
    case 2:
      promptThree = "reckoning";
      break;
    case 3:
      promptThree = "ghost";
      break;
    case 4:
      promptThree = "breakup";
      break;
    case 5:
      promptThree = "knife";
      break;
    case 6:
      promptThree = "sheets";
      break;
    case 7:
      promptThree = "grandfather clock";
      break;
    case 8:
      promptThree = "howl";
      break;
    case 9:
      promptThree = "tattoo";
      break;
    default:
      alert("Error");
      break;
  }

  let writingPrompt = `The ${promptOne}, the ${promptTwo}, and the ${promptThree}.`;
//Prompts are not receiving data
  let promptGenerator = document.createElement("p");
  promptGenerator.textContent = writingPrompt;
  promptGenerator.className = "prompt"; //CSS is not applying
  generatorDiv.appendChild(promptGenerator);
});
