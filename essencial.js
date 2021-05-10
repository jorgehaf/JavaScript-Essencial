// Linha 1    ---> Roteiro
// Linha 25   -> Arrays - Atribuição via desestrururação
// Linha 60   -> Objetos - Atribuição via desestrururação
// Linha      ->
// Linha      ->
// Linha      ->
// Linha      ->
// Linha      ->
// Linha      ->
// Linha      ->
// Linha      ->
// Linha      ->
// Linha      ->
// Linha      ->
// Linha      ->
// Linha      ->
// Linha      ->
// Linha      ->
// Linha      ->
// Linha      ->




// Arrays - Atribuição via desestrururação
var arrayAtribuicaoViaDesestruturacao = function () {
    let a = 'A';
    let b = 'B';
    let c = 'C';

    let letras = [b, c, a];
    [a, b, c] = letras;
    /* ["B", "C", "A"] */

    //<-------->

    let numeros = [18, 32, 65, 48, 12, 2, 7, 21];
    let [, , n3, , n5, n6] = numeros;

    // rest - ... rest para pegar resto de algo (resto)
    let [n1, n2, ...resto] = numeros;

    //spread - ... spread para espalhar (resto)
    let soma = sum(...numeros);

    let arrayNumeros = [
        [10, 20, 30],
        [40, 50, 60],
        [70, 80, 90]
    ];
    let [lista1, , [, , noventa]] = arrayNumeros;
}







// Objetos - Atribuição via desestrururação
var objetosAtribuicaoViaDesestruturacao = function () {
    let pessoa = {
        nome: 'Jorge',
        idade: 20,
        sexo: 'Masculino',
        endereco: {
            rua: 'Av Edmeia',
            numero: '3791'
        }
    }

    let {
        nome,
        nome: nome2 = 'Se não tiver nome, isso aparece',
        sobrenome = 'Não existe',
        endereco: {
            numero
        }
    } = pessoa;
    console.log(nome, nome2, sobrenome, numero);
}