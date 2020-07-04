








//card flip
const memoryCard = window.document.querySelectorAll(".card");//selects card div

let flippedCard = false;
let firstChoice, secondChoice;
let stopBoard = false;//disables other cards while picking two

function flipCard() {
    if (stopBoard) {
        return
    }
    if (this === firstChoice) {
        return
    }
    this.classList.toggle('flip');//Toggles between a class name for an element. 
    if (!flippedCard) {
        //first card choice
        flippedCard = true;
        firstChoice = this;

        return
        //second card choice
    } else {
        flippedCard = false;
        secondChoice = this;

        matched()
    }
}

function matched() {
    //when cards match, keep cards open
    if (firstChoice.dataset.name === secondChoice.dataset.name) { //disable cards
        firstChoice.removeEventListener('click', flipCard)
        firstChoice.removeEventListener('click', flipCard)

        resetBoard()

    //when cards dont match, unflip cards
    } else {
        stopBoard = true;
        setTimeout(() => {
            firstChoice.classList.remove('flip')
            secondChoice.classList.remove('flip')
            stopBoard = false;
        }, 1000)
    }
}

function resetBoard() {
    flippedCard = false
    stopBoard = false
    firstChoice = null
    secondChoice = null

}

(function shuffle() {
    memoryCard.forEach(card => {
        let random = Math.floor(Math.random() * 16)
        card.style.order = random;
    })
})()



memoryCard.forEach(card => card.addEventListener("click", flipCard))//assigns action to card div

