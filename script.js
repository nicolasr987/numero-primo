function verificarPrimo() {
    let numero = document.getElementById("numero").value;
    let primo = true;

    if (numero < 2) {
        primo = false;
    } else {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                primo = false;
                break;
            }
        }
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (primo) {
        resultado.innerHTML = numero + " é um número primo!";
        let audio = document.getElementById("op");
    audio.play();
    } else {
        resultado.innerHTML = numero + " não é um número primo.";
        let audio = document.getElementById("bizaro");
        bizaro.play();
    }
}
