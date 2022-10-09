// Work on project. Stage 1/5: Welcome to the carnival!

const giftList = ["Teddy Bear", "Big Red Ball", "Huge Bear", "Candy", "Stuffed Tiger", "Stuffed Dragon", "Skateboard", "Toy Car", "Basketball", "Scary Mask"];

function welcomeToCarnival () {
    console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!\nHello friend! Thank you for visiting the carnival!\nHere's the list of gifts:\n`);
    for(let i in giftList) {
        console.log(giftList[i]);
    }
}

welcomeToCarnival ();