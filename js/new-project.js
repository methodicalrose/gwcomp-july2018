//Div containing all writing prompt elements
const generatorDiv = document.querySelector(".generator");
//Generate Prompt Button
const generateButton = document.querySelector("#generate-button");
//Paragraph tag containing generated writing prompt
const outputP = document.querySelector("#prompt-output");

/* When the user clicks the Generate Prompt button, random number function is activated
This will generate a random number between 0 and 9 */
generateButton.addEventListener("click", (e) => {
  let randomNumber = () => {
    return Math.floor(Math.random() * 10);
  };
// The random number function is called for each piece of the generated text output
  let promptOne = randomNumber();
  let promptTwo = randomNumber();
  let promptThree = randomNumber();
/* Based on which number was generated, each piece of the prompt will have its value replaced
with the associated string. This is repeated for each piece of the prompt */
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
  } // End of first Switch
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
  } // End of second Switch
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
  } // End of third Switch
  
/* The new values of all of the pieces are placed inside of an interpolated string
which will be added to the page in the next step */
  let writingPrompt = `The ${promptOne}, the ${promptTwo}, and the ${promptThree}.`;
/* The text content of the writing prompt gets replaced with new values each time the
button is clicked. Styling is also added to the prompt. */
  outputP.textContent = writingPrompt;
  outputP.className = "prompt";
}); // End of event
