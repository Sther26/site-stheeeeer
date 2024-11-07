document.getElementById("yesBtn").addEventListener("click", function() {
    // Tocar som alegre
    const alegriaAudio = new Audio('https://www.soundjay.com/button/beep-07.wav'); // Exemplo de som alegre
    alegriaAudio.play();
    
    // Mostrar mensagem de sucesso
    document.getElementById("responseMessage").innerHTML = "Eu sabia véi";
    document.getElementById("responseMessage").style.color = "black";
});

document.getElementById("noBtn").addEventListener("click", function() {
    // Tocar som triste
    const tristezaAudio = new Audio('https://www.soundjay.com/button/beep-06.wav'); // Exemplo de som triste
    tristezaAudio.play();
    
    // Mostrar mensagem de tristeza
    document.getElementById("responseMessage").innerHTML = "Tudo bem... Vou respeitar sua decisão. (espero q se lasque tbm)";
    document.getElementById("responseMessage").style.color = "black";
});
const alegriaAudio = new Audio('alegria.mp3');
const tristezaAudio = new Audio('tristeza.mp3');