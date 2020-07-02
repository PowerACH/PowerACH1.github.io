

//card flip
const memoryCard = window.document.querySelectorAll("#card");//selects card div

function flipCard() {
    this.classList.toggle('flip');//Toggles between a class name for an element. If its there, it will remove it. If the class does not exist, it will add it.
} 

memoryCard.forEach(card => card.addEventListener("click", flipCard))//assigns action to card div












// // array containing the images for each card
// let imgArray = ['./images/img1.png', './images/img1.png','./images/img2.png', './images/img2.png','./images/img3.png', './images/img3.png','./images/img4.png', './images/img4.png','./images/img5.png', './images/img5.png','./images/img6.png', './images/img6.png','./images/img7.png', './images/img7.png','./images/img8.png', './images/img8.png']

// let values = [];

// let memoryTileIds = [];

// let tilesFlipped = 0;

// // let horse = [4,3,2,5,32,5,2,5]

// // shuffle function for cards, array of images
// Array.prototype.shuffleDeck = function() {
//     for(let i = this.length -1; i > 0; i--){
//         const j = Math.round(Math.random() * (i+1)) 
//         const rand = this[i]
//         this[i] = this[j]
//         this[j] = rand
//     }
// }

// //new board for new game
// function reset() {
//     tilesFlipped = 0;
//     let output = '';
//     imgArray.shuffleDeck();
//     Array.forEach(function(i) {
//         output+=<div id="'card' + i +'" onclick="memoryFlipTile(this,\''+ imgArray[i] + '\')"></div>
//     })
//     document.getElementById('board').innerHTML = output;
// }

// function memoryFlipTile(card, value) {
//     if(card.innerHTML == "" && values.length < 2) {
//         tilesFlipped.style.background = '#FFF'; //background turns white
//         tilesFlipped.innerHTML = val; //value appears in card
//         if(values.length == 0) {//if the values is at zero, 
//             values.push(val);//the value of the card selected will be pushed to the values array
//             memoryTileIds.push(card.id)//the tile ID will also be pushed
//         } else if(values.length == 1) {//if 1 card already selected, this will run
//             values.push(val);
//             memoryTileIds.push(card.id)
//             if(values[0] == values[1]) {//this checks to see if the two cards match by checking if the two numbers in the array are equal
//                 tilesFlipped +=2;
//                 //Clear both arrays
//                 values = [];
//                 memoryTileIds = []
//                 //check if whole board is cleared
//                 if(tilesFlipped == imgArray.length) {
//                     alert("GAME OVER...New Board")
//                     document.getElementById('board').innerHTML = "";
//                     reset()
//                 }

//             } else {
//                 function noMatch() {
//                     //flip the 2 caards back
//                     var card_1 = document.getElementById(memoryTileIds[0]);
//                     var card_2 = document.getElementById(memoryTileIds[1]);
//                     card_1.style.background = #FFF;
//                     card_1.style.innerHTML = "";
//                     card_2.style.background = #FFF;
//                     card_2.style.innerHTML = "";

//                 }
//             }
//         }
//     }
// }

// //eventListener calls a function whenver the specified event is delivered to the target
// window.addEventListener('load', reset())