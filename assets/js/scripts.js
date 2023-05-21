const textoAencriptar = document.querySelector(".textoAencriptar");
const textoEncriptado = document.querySelector(".textoEncriptado");

let claves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

let Encriptar = () => {
    const encriptado = encriptador(textoAencriptar.value);
    textoEncriptado.value = encriptado;
    textoAencriptar.value = "";
    textoEncriptado.style.backgroundImage = "none";
}


let encriptador = (aEncriptar) => {

    aEncriptar = aEncriptar.toLowerCase(); //convertimos la cadena a minusculas

    //recorremos el array y reemplazamos cada letra con su llave respectiva para encriptar
    for (let i = 0; i < claves.length; i++) {
        if (aEncriptar.includes(claves[i][0])) {
            aEncriptar = aEncriptar.replaceAll(claves[i][0], claves[i][1]);
        }
    }
    return aEncriptar;
}


let desEncriptar = () => {
    const desencriptado = desencriptador(textoAencriptar.value);
    textoEncriptado.value = desencriptado;
    textoAencriptar.value = "";
    textoEncriptado.style.backgroundImage = "none";
}

let desencriptador = (adeseEncriptar) => {

    adeseEncriptar = adeseEncriptar.toLowerCase(); //convertimos la cadena a minusculas

    //recorremos el array y reemplazamos cada letra con su llave respectiva para desencriptar
    for (let i = 0; i < claves.length; i++) {
        if (adeseEncriptar.includes(claves[i][1])) {
            adeseEncriptar = adeseEncriptar.replaceAll(claves[i][1], claves[i][0]);
        }
    }
    return adeseEncriptar;
}

//funcion de copiar....
const botonCopiar = document.querySelector(".btnCopiar");
const mensajeAviso = document.querySelector(".mensajeAviso");

let copiar = () => {
    textoEncriptado.select();
    textoEncriptado.setSelectionRange(0, 99999);
    document.execCommand("copy");
    botonCopiar.innerText = "Copiado!";
    mensajeAviso.innerText = "Texto copiado al portapapeles.";
    mensajeAviso.classList.add("visible");
    setTimeout(() => {
        botonCopiar.innerText = "Copiar";
        mensajeAviso.classList.remove("visible");
    }, 2000);
}

botonCopiar.addEventListener("click", copiar);

