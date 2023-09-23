
let isAlive = false
let cards = []
let cardsEl = document.getElementById("cards")
let sumEl = document.getElementById("sum")
let sum = 0
let hasBJ = false 
let thePS = document.getElementById("PS")
let Points = document.getElementById("points")
let points = 0
let more = true

//draw Random Cards

function RandomCard() {
    let newCard = Math.floor(Math.random() * 12 + 1)
    if (newCard === 1) {
        newCard = 11
    } else if (newCard > 10) {
        newCard = 10
    } else {
        newCard = newCard
    }

    return newCard
}





function StartGame() {
    more = true
    isAlive = true
    hasBJ = false
    let Card1 = RandomCard()
    let Card2 = RandomCard()
    cards = [Card1, Card2]
    sum = Card1 + Card2
    thePS.innerHTML = ("Draw another card")
    render()

}

function DrawCard(){

    if(isAlive === true && hasBJ === false){
        let pulledCard = RandomCard()
        cards.push(pulledCard)
        sum += pulledCard
    }
    render()

}


function render() {

    cardsEl.textContent = "Cards: "
    for (let index = 0; index < cards.length; index++) {
        cardsEl.textContent += cards[index] + " ";
    }
    
    
    sumEl.innerHTML = ("sum: " + sum)

    if (sum === 21) {
        hasBJ = true
        thePS.innerHTML = ("U HAVE GOT A BLACKJACK!!")
       if (more === true) {
         Points.textContent = points += 1
       }
        more = false
    }else if(sum > 21){
        isAlive = false
        thePS.innerHTML = ("U HAVE LOST, BITCH")
    }

}