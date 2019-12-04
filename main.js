//class questionCard with properties to ask the question, give answer choices and provide the correct answer
class questionCard {
    constructor(question,answerChoice,rightAnswer) {
        this.question = question
        this.answerchoice = answerChoice
        this.rightAnswer = rightAnswer
        
    }

    //isAnswerCorrect(clickedAnswer) {
        //if (clickedAnswer === )
    //}
}

//new array with class questionCard and its properties, question, answerChoice, rightAnswer
const parkCards = [
    new questionCard("What state contains the most national parks?",
    ["Alaska", "Colorado","Utah", "California"], 
    "California"),
    new questionCard("What was the first National Park?",
    ["Dealth Valley National Park", "Yosemite National Park", "Acadia National Park", "Yellowstone National Park"],
    "Yellowstone National Park"),
    new questionCard("What national park is home to the longest cave system in the world?",
    ["Mammoth Cave National Park", "Canyonlands National Park", "Carlsbad Caverns National Park", "Great Basin National Park"], 
    "Mammoth Cave National Park")
];

let activeCard = 0

const questionTitle = document.querySelector(".question-title")
const answerChoices = document.querySelector(".answer-choices")
const buttonContainer = document.querySelector(".button-container")
const nextButton = document.getElementById("next-question-button")
const backButton = document.getElementById("prev-question-button")


function displayQuestionCard() {
    // for (let i = 0; i < parkCards.length; i++) {
        //seperates out each question object from the array of parkCards starting at card 0 in the parkCards array
        const card = parkCards[activeCard]
        //grabs question from question card class
        const currentQuestion = card.question;
        questionTitle.innerHTML = currentQuestion
        //create a new div element
        //const newDiv = document.createElement("div")
        //add said class to new div element
        //newDiv.className = "question-title"
        //create text node with question
        //const titleText = document.createTextNode(currentQuestion)
        //newDiv.appendChild(titleText);
        //document.querySelector(".card-container").insertBefore(newDiv, answerChoices)


        const answerList = card.answerchoice
        answerList.forEach(choice => {
            let answerList2 = document.createElement("ul")
            let answerItem = document.createElement("li")
            let textnode = document.createTextNode(choice)
            answerList2.appendChild(answerItem)
            answerItem.appendChild(textnode);
            answerChoices.appendChild(answerList2)
            //console.log(textnode)
        });
    // }
}
displayQuestionCard();

nextButton.addEventListener("click", evt => {
    evt.preventDefault();
    activeCard++;
    displayQuestionCard()

})

backButton.addEventListener("click", evt => {
    evt.preventDefault();
    activeCard--;
    displayQuestionCard()

})


