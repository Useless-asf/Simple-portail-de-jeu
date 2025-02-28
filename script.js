gamesCards = document.querySelectorAll(".game-card");

gamesCards.forEach(i => {
    i.addEventListener('click', (e) => {
        game = e.currentTarget.dataset.game;
        console.log(game);
    })
});