function startSurprise() {

    const teddy = document.getElementById("teddy");
    const message = document.getElementById("message");
    const button = document.getElementById("startButton");
    const voice = document.getElementById("teddyVoice");

    /*
     * Change the message
     */

    message.innerHTML =
        "Wait... he has something to tell you. 🧸❤️";


    /*
     * Hide the Open button
     */

    button.style.display = "none";


    /*
     * Make the teddy look like it is talking
     */

    teddy.classList.add("talking");


    /*
     * Try to play the voice.
     * If it works, great.
     * If it doesn't, the website still continues.
     */

    voice.play().catch(function () {

        console.log("Audio could not play automatically.");

    });


    /*
     * IMPORTANT:
     *
     * We are NOT waiting for the audio to finish.
     *
     * After 4 seconds, we automatically
     * move to the cooking question.
     */

    setTimeout(function () {

        showCookingScreen();

    }, 4000);

}


/*
========================================
SHOW COOKING SCREEN
========================================
*/

function showCookingScreen() {

    const mainScreen =
        document.getElementById("mainScreen");

    const cookingScreen =
        document.getElementById("cookingScreen");

    const teddy =
        document.getElementById("teddy");


    /*
     * Stop teddy talking
     */

    teddy.classList.remove("talking");


    /*
     * Hide first screen
     */

    mainScreen.classList.remove("active");


    /*
     * Show cooking screen
     */

    cookingScreen.classList.add("active");

}


/*
========================================
FOOD CHOICES
========================================
*/

function chooseFood(choice) {

    const reply =
        document.getElementById("reply");


    if (choice === "sweet") {

        reply.innerHTML =
            "Hmm... something sweet? 😌❤️ I hope you saved some for me.";

    }


    else if (choice === "spicy") {

        reply.innerHTML =
            "Spicy? 👀 You sure you can handle me then? 😂❤️";

    }


    else if (choice === "you") {

        reply.innerHTML =
            "Egbami 😭😂 I knew you were going to say that. Behave yourself, chef. ❤️";

    }

}