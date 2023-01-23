const dictionary = {
    
    '': ' ',
   
    'a': 'I01',
    'b': 'gKc',
    'c': 'L8f',
    'd': 'mEi',
    'e': '1N6',
    'f': 'sQO',
    'g': 'rGv',
    'h': 'Wxu',
    'i': '9Bh',
    'j': 'eCa',
    'k': 'Hfd',
    'l': 'K1g',
    'm': 'jLn',
    'n': 'Qom',
    'o': 'T1p',
    'p': 'Xus',
    'q': 'ZYv',
    'r': 'kAw',
    's': 'NDb',
    't': 'Ige',
    'u': 'p0E',
    'v': 'Mok',
    'x': '@8N',
    'y': 'uSq',
    'w': 'yVt',
    'z': 'AwX',
};

const botaoCriptografar = document.getElementById("botaoCriptografar");
const botaoDescriptografar = document.getElementById("botaoDescriptografar");
const campoTextoEntrada = document.getElementById("input");
const campoTextoSaida = document.getElementById("output");

// Adiciona o evento de clique para o botão de criptografar
botaoCriptografar.addEventListener("click", () => {
    let inputtext = campoTextoEntrada.value;
    let outputtext = "";
    for (let i = 0; i < inputtext.length; i++) {
        let char = inputtext[i];
        if (char in dictionary) {
            outputtext += dictionary[char];
        } else {
            outputtext += char;
        }
    }
    campoTextoSaida.value = outputtext;
});

// Adiciona o evento de clique para o botão de descriptografar
botaoDescriptografar.addEventListener("click", () => {
    let inputtext = campoTextoEntrada.value;
    let outputtext = "";
    for (let i = 0; i < inputtext.length; i += 3) {
        let char = inputtext.slice(i, i + 3);
        let letter = Object.keys(dictionary).find(key => dictionary[key] === char);
        if (letter) {
            outputtext += letter;
        } else {
            outputtext += char;
        }
    }
    campoTextoSaida.value = outputtext;
});

// Selecione o botão de copiar
const botaoCopiar = document.querySelector("#copiar");

    // Adicione um evento de clique ao botão
    botaoCopiar.addEventListener("click", function () {
    // Selecione a área de texto
    const texto = document.querySelector("#output");

    // Selecione o conteúdo do texto
    const conteudo = texto.value;

    // Execute a cópia
    navigator.clipboard.writeText(conteudo);
});
