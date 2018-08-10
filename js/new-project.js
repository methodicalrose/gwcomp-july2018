//Div containing all writing prompt elements
const generatorDiv = document.querySelector(".generator");
//Generate Prompt Button
const generateButton = document.querySelector("#generate-button");
//Paragraph tag containing generated writing prompt
const outputP = document.querySelector("#prompt-output");
//Form containing the text editor
const writingForm = document.forms.textEditor;

/* When the user clicks the Generate Prompt button, random number function is activated
This will generate a random number based on the length of the array it is used for. */
generateButton.addEventListener("click", (e) => {
  let randomNumber = (len) => {
    return Math.floor(Math.random() * len);
  };
/* Arrays have been used to more concisely organize the text values. */
  const list1 = ["apple", "ring", "bear", "giant", "wish", "seed", "miracle", "teacup", "mirror", "old house", "shoe"];
  const list2 = ["cat", "glove", "child", "forest", "violin", "siren", "laugh", "hiccup", "fairy", "sword"];
  const list3 = ["hurricane", "curse", "reckoning", "ghost", "breakup", "knife", "sheets", "grandfather clock", "howl", "tattoo"];
/* The indices of the arrays for each prompt are randomly generated with the function, allowing
for any length of array to be used should I wish to add or remove any text values from a list. */
  let promptOne = list1[randomNumber(list1.length)];
  let promptTwo = list2[randomNumber(list2.length)];
  let promptThree = list3[randomNumber(list3.length)];

/* The new values of all of the pieces are placed inside of an interpolated string
which will be added to the page in the next step */
  let writingPrompt = `The ${promptOne}, the ${promptTwo}, and the ${promptThree}.`;
/* The text content of the writing prompt gets replaced with new values each time the
button is clicked. */
  outputP.textContent = writingPrompt;
}); // End of event

//Displays the text input on the page -- work in progress
function displayText() {
  let title = document.getElementById("title").value;
  let textBody = document.getElementById("textBody").value;

  document.write(`<h3>${title}</h3> <br>`);
  document.write(`${textBody} <br>`);
}
