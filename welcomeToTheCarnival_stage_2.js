// Work on project. Stage 2/5: Welcome to the carnival!

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
    10: {"Scary Mask": 10}
};

function welcomeToCarnival () {
    console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!\nHello friend! Thank you for visiting the carnival!\nHere's the list of gifts:\n`);
    for(let i in giftList) {
        console.log(giftList[i]);
    }
}

welcomeToCarnival ();