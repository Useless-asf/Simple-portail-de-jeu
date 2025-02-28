

document.addEventListener("DOMContentLoaded", () => {
    
    //      Ajout des events de clicks sur les game-card pour changer quel est la page actuel
    
    const gamesCards = document.querySelectorAll(".game-card");
    const gameSections = document.querySelectorAll(".game-section");
    const menu = document.getElementById("menu");
    
    gamesCards.forEach(card => {
        card.addEventListener("click", (e) => {
            const game = e.currentTarget.dataset.game;

            menu.style.display = "none";

            gameSections.forEach(section => {
                section.style.display = "none";
            });

            const selectedGame = document.getElementById(game);
            if (selectedGame) {
                selectedGame.style.display = "flex";
            }
        })
    })

    const returnButtons = document.querySelectorAll(".return-button");

    returnButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            gameSections.forEach(section => {
                section.style.display = "none";
            })

            menu.style.display = "flex";
        })
    })


})