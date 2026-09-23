/* =========================
   SECRET WORD
========================= */

const secretWord = "aaa";


/* =========================
   ENTER WEBSITE
========================= */

function enterUniverse() {

    const input =
        document.getElementById("secretInput")
            .value
            .trim()
            .toLowerCase();

    const error =
        document.getElementById("error");

    if (input === secretWord) {

        // Hide welcome screen
        document.getElementById("welcome")
            .style.display = "none";

        // Show love animation
        const transition =
            document.getElementById("loveTransition");

        transition.classList.remove("hidden");

        // Wait for animation
        setTimeout(function() {

            // Hide love animation
            transition.classList.add("hidden");

            // Show main website
            document.getElementById("universe")
                .classList.remove("hidden");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            // Extra sparkles
            createSparkles();

            // Hearts
            createHearts();

        }, 3500);

    } else {

        error.innerHTML =
            "Hmm... that's not the magic word ✨ Try again.";

    }
}

/* ENTER KEY */

document
    .getElementById("secretInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            enterUniverse();
        }

    });


/* =========================
   SCROLL
========================= */

function scrollToMoments() {

    document
        .getElementById("moments")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   QUESTION
========================= */

function rememberYes() {

    const answer =
        document.getElementById("questionAnswer");

    answer.innerHTML =
        "I knew it... ❤️ Some memories are impossible to forget.";

    createHearts();

}


function rememberNo() {

    const answer =
        document.getElementById("questionAnswer");

    answer.innerHTML =
        "Maybe you forgot... but I didn't. 🌙❤️";

    createSparkles();

}


/* =========================
   LETTER
========================= */

function revealLetter() {

    document
        .getElementById("hiddenLetter")
        .classList.remove("hidden");

}


/* =========================
   GIFT
========================= */

function openGift() {

    const giftBox =
        document.getElementById("giftBox");

    const finalMessage =
        document.getElementById("finalMessage");

    giftBox.classList.add("open");

    document.querySelector(".click-text")
        .style.opacity = "0";

    setTimeout(function() {

        finalMessage.classList.remove("hidden");

        createHearts();
        createConfetti();
        createSparkles();

        finalMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 700);

}


/* =========================
   HEARTS
========================= */

function createHearts() {

    for (let i = 0; i < 30; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML =
            Math.random() > 0.5
                ? "❤️"
                : "💖";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-40px";

        heart.style.fontSize =
            15 + Math.random() * 25 + "px";

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const duration =
            2500 + Math.random() * 2500;

        heart.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(-${window.innerHeight + 150}px) rotate(360deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );

        setTimeout(function() {
            heart.remove();
        }, duration);

    }

}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const symbols = [
        "✨",
        "💜",
        "💖",
        "🌸",
        "⭐",
        "💕"
    ];

    for (let i = 0; i < 50; i++) {

        const piece =
            document.createElement("div");

        piece.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        piece.style.position = "fixed";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top = "-30px";

        piece.style.fontSize =
            12 + Math.random() * 22 + "px";

        piece.style.zIndex = "9999";

        piece.style.pointerEvents = "none";

        document.body.appendChild(piece);

        const duration =
            2500 + Math.random() * 2500;

        piece.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(${window.innerHeight + 100}px) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-in"
            }
        );

        setTimeout(function() {
            piece.remove();
        }, duration);

    }

}


/* =========================
   SPARKLES
========================= */

function createSparkles() {

    for (let i = 0; i < 20; i++) {

        const sparkle =
            document.createElement("div");

        sparkle.innerHTML = "✦";

        sparkle.style.position = "fixed";

        sparkle.style.left =
            Math.random() * 100 + "vw";

        sparkle.style.top =
            Math.random() * 100 + "vh";

        sparkle.style.color = "white";

        sparkle.style.fontSize =
            10 + Math.random() * 15 + "px";

        sparkle.style.zIndex = "9998";

        sparkle.style.pointerEvents = "none";

        document.body.appendChild(sparkle);

        sparkle.animate(
            [
                {
                    opacity: 0,
                    transform: "scale(0)"
                },
                {
                    opacity: 1,
                    transform: "scale(1.5)"
                },
                {
                    opacity: 0,
                    transform: "scale(0)"
                }
            ],
            {
                duration: 1500
            }
        );

        setTimeout(function() {
            sparkle.remove();
        }, 1600);

    }

}


/* =========================
   PHOTO GALLERY
========================= */

let currentPhotoIndex = 0;

let galleryImages = [];


function initGallery() {

    galleryImages =
        [
            ...document.querySelectorAll(".gallery-photo")
        ];

    galleryImages.forEach(function(img, index) {

        img.addEventListener("click", function() {

            openPhoto(index);

        });

    });

}


function openPhoto(index) {

    currentPhotoIndex = index;

    const modal =
        document.getElementById("photoModal");

    const modalImage =
        document.getElementById("modalImage");

    modalImage.src =
        galleryImages[index].src;

    modal.classList.remove("hidden");

    document.body.style.overflow = "hidden";

}


function closePhoto() {

    document
        .getElementById("photoModal")
        .classList.add("hidden");

    document.body.style.overflow = "";

}


function nextPhoto() {

    currentPhotoIndex =
        (currentPhotoIndex + 1)
        % galleryImages.length;

    document.getElementById("modalImage").src =
        galleryImages[currentPhotoIndex].src;

}


function prevPhoto() {

    currentPhotoIndex =
        (currentPhotoIndex - 1 + galleryImages.length)
        % galleryImages.length;

    document.getElementById("modalImage").src =
        galleryImages[currentPhotoIndex].src;

}


/* KEYBOARD CONTROLS */

document.addEventListener("keydown", function(event) {

    const modal =
        document.getElementById("photoModal");

    if (modal.classList.contains("hidden")) {
        return;
    }

    if (event.key === "Escape") {
        closePhoto();
    }

    if (event.key === "ArrowRight") {
        nextPhoto();
    }

    if (event.key === "ArrowLeft") {
        prevPhoto();
    }

});


/* START GALLERY */

initGallery();