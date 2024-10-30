const texts = ["", "", ""]; // Texto a ser escrito
let index = 0; // Índice do texto atual
let currentText = ""; // Texto atual
let isDeleting = false; // Se está apagando ou escrevendo
let speed = 100; // Velocidade de digitação

function type() {
    const animatedTextElement = document.getElementById("animated-text");
    if (isDeleting) {
        currentText = texts[index].substring(0, currentText.length - 1); // Remove um caractere
    } else {
        currentText = texts[index].substring(0, currentText.length + 1); // Adiciona um caractere
    }
    animatedTextElement.textContent = currentText; // Atualiza o texto do elemento

    // Muda a velocidade
    if (isDeleting) {
        speed = 50; // Acelera ao apagar
    } else {
        speed = 100; // Diminui ao escrever
    }

    // Verifica se terminou de escrever ou apagar
    if (!isDeleting && currentText === texts[index]) {
        speed = 2000; // Espera um tempo antes de apagar
        isDeleting = true; // Começa a apagar
    } else if (isDeleting && currentText === "") {
        isDeleting = false; // Começa a escrever o próximo texto
        index = (index + 1) % texts.length; // Vai para o próximo texto
        speed = 500; // Diminui a velocidade ao mudar de texto
    }

    setTimeout(type, speed); // Chama a função novamente após a velocidade definida
}

// Inicia a animação
type();
