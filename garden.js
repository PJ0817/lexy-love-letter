const flowers = [
    {
        emoji: "🌹",
        title: "Your Beauty",
        message: "There's something about you that I find so beautiful. And I'm not just talking about your appearance. It's the little things, your expressions, your laugh, the way you carry yourself, and all the things that make you YOU. 🤍"
    },
    {
        emoji: "🌷",
        title: "Your Heart",
        message: "I appreciate the heart you have. The way you care, the little things you do, and the person you are mean more than you probably realize. Never forget how special that heart of yours is. 🥹"
    },
    {
        emoji: "🌻",
        title: "Your Smile",
        message: "You have an amazing smile, it is one of those things that can instantly make my day better. I hope you never run out of reasons to smile, and I hope I get to be one of those reasons sometimes. 😊"
    },
    {
        emoji: "🌼",
        title: "Your Personality",
        message: "I love that there's only one you. Eventhough you be pushing it sometimes, your sense of humor, your playful side, and all those little things that make you different. Please never feel like you have to change those things. 😂🤍"
    },
    {
        emoji: "🪻",
        title: "Your Peace",
        message: "I hope life gives you plenty of moments where you can breathe, relax, laugh, and simply enjoy being yourself. You deserve peace, happiness, and days that feel a little lighter. 💜"
    },
    {
        emoji: "🌸",
        title: "Friends",
        message: "Some of my favorite things are the little moments we've shared. The conversations, the laughs, and even the random silly things. Sometimes it's the simplest moments that end up meaning the most. 🥲"
    },
    {
        emoji: "🌺",
        title: "Your Uniqueness",
        message: "There's no replacement for you, Lexy Poo. You have your own way of making an impression, and I hope you always embrace everything that makes you different. Never dim your light. 🌺"
    },
    {
        emoji: "💐",
        title: "One Last Thing",
        message: "If I could leave you with one thing, it would be this: I hope you always see the beauty in yourself and continue to stay strong. You deserve kindness, laughter, genuine happiness, and all the beautiful things life has waiting for you. Thank you for being you, Lexy Poo. 🤍"
    }
];

const flowerElements = document.querySelectorAll(".flower");
const overlay = document.getElementById("message-overlay");
const messageFlower = document.getElementById("message-flower");
const messageTitle = document.getElementById("message-title");
const messageText = document.getElementById("message-text");
const closeButton = document.getElementById("close-message");

const completion = document.getElementById("completion");
const completionClose = document.getElementById("completion-close");

const openedFlowers = new Set();

flowerElements.forEach((flower) => {
    flower.addEventListener("click", () => {
        const index = Number(flower.dataset.flower);
        const selectedFlower = flowers[index];

        if (!selectedFlower) return;

        messageFlower.textContent = selectedFlower.emoji;
        messageTitle.textContent = selectedFlower.title;
        messageText.textContent = selectedFlower.message;

        overlay.classList.add("show");
        openedFlowers.add(index);

        flower.classList.add("opened");

        if (openedFlowers.size === flowers.length) {
            setTimeout(() => {
                completion.classList.add("show");
            }, 500);
        }
    });
});

function closeMessage() {
    overlay.classList.remove("show");
}

closeButton.addEventListener("click", closeMessage);

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        closeMessage();
    }
});

completionClose.addEventListener("click", () => {
    completion.classList.remove("show");
});