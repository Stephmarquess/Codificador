const btnCodificador = document.getElementById("btn-codificar");
const btnDecodificador = document.getElementById("btn-decodificar");

function codificar () {


    const saída = document.getElementById("saída");
    const entrada = document.getElementById("entrada").value;
    const regrasCriptografia = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    const mensagem = entrada.replace(/[eioua]/g, char => regrasCriptografia[char]);
    saída.innerText = `${mensagem}`
    console.log(mensagem);    
    console.log(saída.textContent); 

}

function decodificar() {
 
    const valor = document.getElementById("saída").textContent;
    console.log(valor);
    const regrasDecriptografia = {
        'enter': 'e',   
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
 
    const mensagemDecriptada = valor.replace(/enter|imes|ai|ober|ufat/g, sequence => regrasDecriptografia[sequence]);
    
    document.getElementById("saída").textContent = mensagemDecriptada;
    console.log(mensagemDecriptada);

}