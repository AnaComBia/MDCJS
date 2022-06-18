const iniciar = () => {

    event.preventDefault();
    console.log("carregado :)");

};

const calculomdc = () => {

    event.preventDefault();

    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;

    let mdc = 0;
    let sobrou = -1;

    do {
        sobrou = n1 % n2;
        n1 = n2;
        n2 = sobrou;
        if (sobrou === 0) {
            mdc = n1;
            break;
        }
    } while (n2 !== 0);
    document.getElementById('resultado').innerText = `${mdc}`;
};

document.addEventListener('DOMContentLoaded', iniciar);