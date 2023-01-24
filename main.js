const form = document.getElementById ('form-atividade');
const imgAprovado = '<img src="./images/images/aprovado.png" alt="Emoji festejando">'
const imgReprovado = '<img src="./images/images/reprovado.png" alt="Emoji festejando">'
const atividades = [];
const notas = []
var linhas = ''
const spanAprovado = '<span class="resultado aprovado">aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">reprovado</span>'
const notaMinima = parseFloat(prompt('digite a nota minima'))

form.addEventListener('submit', function(e){
    e.preventDefault();

adicionaLinha();
atualizaTabela ();
atualizaMediaFinal ();
});

function adicionaLinha(){
    var inputNomeAtividade = document.getElementById('nome-atividade');
    var inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)){
        alert (`a atiividade ${inputNomeAtividade.value} ja foi inserida`)
    } else {

    atividades.push (inputNomeAtividade.value)
    notas.push (parseFloat(inputNotaAtividade.value))

        let linha = `<tr>`;
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`
        linhas += linha;
    }
        
        inputNomeAtividade.value = ``
        inputNotaAtividade.value = ``
}

function atualizaTabela () {
    var corpotabela = document.querySelector('tbody')
    corpotabela.innerHTML = linhas
}

function atualizaMediaFinal () {
const mediaFinal = calculaMediaFinal ()

document.getElementById ('media-final-valor').innerHTML = mediaFinal
document.getElementById ('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado


}

function calculaMediaFinal (){
    let somaDasNotas = 0

    for (let i =0; i < notas.length; i++ ) {
        somaDasNotas += notas[i]
    } 

    return somaDasNotas / notas.length

}