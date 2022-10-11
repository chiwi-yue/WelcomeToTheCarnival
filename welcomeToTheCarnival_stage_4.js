// Stage 4/5: Can you repeat?

const input = require('sync-input');

const giftList = {
    1: {"Teddy Bear": 10},
    2: {"Big Red Ball": 5},
    3: {"Huge Bear": 50},
    4: {"Candy": 8},
    5: {"Stuffed Tiger": 15},
    6: {"Stuffed Dragon": 30},
    7: {"Skateboard": 100},
    8: {"Toy Car": 25},
    9: {"Basketball": 20},
    10: {"Scary Mask": 75}
};

let userTickets = 0;

function welcomeToCarnival() {
    console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!\nHello friend! Thank you for visiting the carnival!`);
}

function showGift() {
    console.log(`Here's the list of gifts:\n`);

    for(const orderID in giftList) {
        let giftName;
        let giftPrice;
        for(let giftKey in giftList[orderID]) {
            giftName = giftKey;
            giftPrice = giftList[orderID][giftKey];
        }
        console.log(`${orderID}- ${giftName}, Cost: ${giftPrice} tickets`);
    }
}


function makeChoice() {
    do {
        console.log();
        console.log(`What do you want to do?`);
        userChoice = Number(input(`1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop\n`).trim());
        switch (userChoice) {
            case 1:
                buyGift();
                break;
            case 2:
                addTicket();
                break;
            case 3:
                checkTicket();
                break;
            case 4:
                showGift();
                break;
            case 5:
                break;
            default:
                makeChoice();
                break;
        }  
    }
    while (userChoice != 5);
}

function buyGift() {
    const numberGift = Number(input(`Enter the number of the gift you want to get: `).trim());
    const giftChoice = giftList[numberGift];
    for(let giftName in giftChoice) {
        console.log(`Here you go, one ${giftName}!`);
        userTickets -= giftChoice[giftName];
    }
    checkTicket();
}

function checkTicket() {
    console.log(`Total tickets: ${userTickets}`);
}

function displayEndMessage() {
    console.log(`Have a nice day!`);
}

function addTicket() {
    const ticketsToAdd = Number(input(`Enter the ticket amount: `).trim());
    userTickets += ticketsToAdd;
    checkTicket();
}

function main() {
    welcomeToCarnival();
    showGift();
    makeChoice();
    displayEndMessage();
}
    
main();

