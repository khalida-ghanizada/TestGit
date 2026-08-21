// ==================================================
// BACK TO TOP BUTTON
// ==================================================

const topButton = document.getElementById("topButton");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


// ==================================================
// BACK TO TOP
// ==================================================

topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ==================================================
// IMAGE LAZY LOADING
// ==================================================

const images =
    document.querySelectorAll("img");


images.forEach(function (image) {

    image.setAttribute(
        "loading",
        "lazy"
    );

});


// ==================================================
// MAGAZINE CARD ANIMATION
// ==================================================

const cards =
    document.querySelectorAll(
        ".magazine-card, .member-card"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.1
        }

    );


// Initial card position

cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(20px)";

    card.style.transition =
        "all 0.7s ease";

    observer.observe(card);

});


// ==================================================
// PRINT MAGAZINE
// ==================================================

function printMagazine() {

    window.print();

}


// ==================================================
// CONSOLE MESSAGE
// ==================================================

console.log(
    "Volunteer Memories Magazine Loaded Successfully."
);