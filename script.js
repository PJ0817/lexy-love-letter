
const welcomeScreen = document.getElementById("welcome-screen");
const envelopeScreen = document.getElementById("envelope-screen");
const letterScreen = document.getElementById("letter-screen");
const finalScreen = document.getElementById("final-screen");

const startButton = document.getElementById("start-button");
const envelope = document.getElementById("envelope");
const continueButton = document.getElementById("continue-button");

const letterBody = document.querySelector(".letter-body");
const musicButton = document.getElementById("music-button");

// Lexy's surprise letter
const letter = `Ohhhh Lexy Poo! 🥹

Surpriseee! I hope you weren't expecting this when you opened this little website.

I wanted to do something a little different for you. Not because I needed a reason, but because sometimes I think the people who bring something special into our lives deserve to be reminded of it.

I hope you understand how much I appreciate you. From our random conversations and little jokes to the moments when we talk about life, there's something about having you in my day that I genuinely look forward to.

You have this way of making ordinary moments feel special without even trying. I appreciate your personality, your heart, your perspective, and even the little things you probably don't realize I notice.

I don't ever want you to feel like you have to be anything other than yourself around me. You deserve to be appreciated, respected, understood, and given the same peace that you bring into the lives of others.

And if I'm being honest, I look forward to the day when these conversations aren't just through a phone screen. I want the laughs, the silly moments, the spontaneous adventures, and all the little memories we haven't gotten to make yet.

Until then, just know that I'm rooting for you, I'm proud of you, and I'm grateful that our paths crossed.

So here's your reminder, my little cabbage patch doll: you're appreciated more than you know. Never forget that. 🥲

And don't get too comfortable thinking you're getting away without more ninja turtle shenanigans. 😂`;

// Floating hearts
function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.textContent = Math.random() > 0.5 ? "♡" : "♥";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

// Typewriter effect
function typeLetter() {
    let index = 0;
    const speed = 32;

    letterBody.textContent = "";

    function typeNextCharacter() {
        if (index < letter.length) {
            letterBody.textContent += letter.charAt(index);
            index++;

            letterBody.scrollIntoView({
                block: "nearest",
                behavior: "smooth"
            });

            setTimeout(typeNextCharacter, speed);
        }
    }

    typeNextCharacter();
}

// Welcome screen
startButton.addEventListener("click", () => {
    welcomeScreen.classList.add("hidden");
    envelopeScreen.classList.remove("hidden");
});

// Open envelope
envelope.addEventListener("click", () => {
    envelope.classList.add("open");

    setTimeout(() => {
        envelopeScreen.classList.add("hidden");
        letterScreen.classList.remove("hidden");

        typeLetter();

        // Start floating hearts
        setInterval(createHeart, 700);
    }, 700);
});

// Continue to final surprise
continueButton.addEventListener("click", () => {
    letterScreen.classList.add("hidden");
    finalScreen.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // More hearts for the final surprise
    for (let i = 0; i < 8; i++) {
        setTimeout(createHeart, i * 250);
    }
});

// Direct Aaliyah song link
musicButton.href =
    "https://www.youtube.com/watch?v=bqzVkIcBchM&list=RDbqzVkIcBchM&start_radio=1";

musicButton.target = "_blank";
musicButton.rel = "noopener noreferrer";
