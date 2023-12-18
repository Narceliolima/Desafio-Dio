
const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values: {
        hitPosition: 0,
        result: 0,
        currentTime: 60,
    },
    actions: {
        timerID: setInterval(randomSquare, 1000),
        countDownTimerID: setInterval(countDown, 1000),
    },
};

function playAudio(nomeAudio){ //Trocar para receber um parametro
    let audio = new Audio(`./assets/sons/${nomeAudio}.m4a`);
    audio.volume = 0.3;
    audio.play();
}

function countDown(){
    //state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if(state.values.currentTime < 0){
        clearInterval(state.actions.countDownTimerID);
        clearInterval(state.actions.timerID);
        alert(`Fim de Jogo! Sua pontuação foi ${state.values.score}`);
    }
}

function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    const randomNumber = Math.floor(Math.random() * 9);
    const randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function addListenerHitBox(){
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if(square.id === state.values.hitPosition){
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playAudio('hit');
            }
        })
    });
}

//Main
(function () {

    addListenerHitBox();
})();