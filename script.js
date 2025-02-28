

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


    //      Ajout des events de clicks sur les return-button pour retourner au menu 

    const returnButtons = document.querySelectorAll(".return-button");

    returnButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            gameSections.forEach(section => {
                section.style.display = "none";
            })

            menu.style.display = "flex";
        })
    })


    //      Ajout les tiles du morpion

    const morpion = document.getElementById("morpion-game");

    for (let i=1; i<4; i++) {
        for (let j=1; j<4; j++) {
            const tile = document.createElement("div");
            tile.classList.add("morpion-tile");
            tile.dataset.tile = `${i} ${j}`;
            morpion.appendChild(tile);
            tile.addEventListener("click", (e) => {
                console.log(tile.dataset.tile);
            })
        }
    }

})