// Stage 5/5: Expect the unexpected

const input = require('sync-input');

let giftList = {
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
    if (Object.keys(giftList).length === 0) {
        console.log(`Wow! There are no gifts to buy.`);
    } else {
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
                console.log(`Please enter a valid number!`);
                makeChoice();
                break;
        }  
    }
    while (userChoice != 5);
}

function buyGift() {
    if (Object.keys(giftList).length === 0) {
        console.log(`\nWow! There are no gifts to buy.`);
    } else {
        let numberGift = Number(input(`Enter the number of the gift you want to get: `));
        if (!Number.isInteger(numberGift)) {
            console.log(`Please enter a valid number!`);
        } else if(numberGift < 1 | numberGift > 10) {
            console.log(`There is no gift with that number!`);
        } else {
            const giftChoice = giftList[numberGift];
            if (numberGift in giftList) {
                for(let giftName in giftChoice) {
                    if(userTickets < giftChoice[giftName]) {
                        console.log(`You don't have enough tickets to buy this gift.`);
                    } else {
                        console.log(`Here you go, one ${giftName}!`);
                        userTickets -= giftChoice[giftName];
                    }
                }
                delete giftList[numberGift];
                checkTicket();
            } else {
                console.log(`Wow! There are no gifts to buy.`);
            }
        }
    }
}

function checkTicket() {
    console.log(`Total tickets: ${userTickets}`);
}

function displayEndMessage() {
    console.log(`Have a nice day!\n\nProcess finished with exit code 0`);
}

function addTicket() {
    const ticketsToAdd = Number(input(`Enter the ticket amount: `).trim());
    if (isNaN(ticketsToAdd) || ticketsToAdd < 0 || ticketsToAdd > 1000) {
        console.log(`Please enter a valid number between 0 and 1000.`);
    } else {
        userTickets += ticketsToAdd;
        checkTicket();
    }
}

function main() {
    welcomeToCarnival();
    showGift();
    makeChoice();
    displayEndMessage();
}
    
main();

