// Linha   25    -> Arrays - Atribuição via desestrururação
// Linha   54    -> Objetos - Atribuição via desestrururação
// Linha   74    -> Funções
// Linha   108   -> Array filter
// Linha   158   -> Array map
// Linha   192   -> Array reduce
// Linha   235   -> Filter + Map + Reduce
// Linha   245   -> for of, for in, forEach
// Linha   261   -> Classes e prototype
// Linha         ->
// Linha         ->
// Linha         ->
// Linha         ->
// Linha         ->
// Linha         ->
// Linha         ->
// Linha         ->
// Linha         ->
// Linha         ->
// Linha         ->




// Arrays - Atribuição via desestrururação
var arrayAtribuicaoViaDesestruturacao = function () {
    let a = 'A',
        b = 'B',
        c = 'C';

    let letras = [b, c, a];
    [a, b, c] = letras;

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

// Funções
var funcoes = function () {

    exemplo1()

    function exemplo1() {
        console.log(this.Date());
    }

    var exemplo2 = function (a, b) {
        return a + b
    }
    exemplo2(5, 10)

    var arrorFunction = () => {
        console.log('Arrow function')
    }
    arrorFunction()

    let objeto = {
        nome: 'Jorge',
        sobrenome: 'Henrique',
        bio: function () {
            console.log('Meu nome é Jorge, tenho 21 anos e quero me tornar um Front End developer!')
        },
        arrayNome: [nome = function () {
            console.log('Jorge')
        }]
    }
    objeto.bio()
    objeto.arrayNome[0]()

}

// Array filter
var arrayFilter = function () {
    let numeros = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

    function callbackFilter(valor, indice, array) {
        return valor > 10
    }
    let exemplo0 = numeros.filter(callbackFilter);

    let exemplo1 = numeros.filter(function (valor) {
        return valor > 15
    });

    let exemplo2 = numeros.filter(valor => {
        return valor > 15
    });

    let exemplo3 = numeros.filter(valor => valor > 10);


    let pessoas = [{
            nome: 'Jorge',
            idade: 20
        },
        {
            nome: 'Henrique',
            idade: 20
        },
        {
            nome: 'Eduardo',
            idade: 43
        },
        {
            nome: 'Jessica',
            idade: 30
        },
        {
            nome: 'Camila',
            idade: 25
        },
        {
            nome: 'Jose',
            idade: 75
        },
    ];

    let exemplo4 = pessoas.filter(obj => obj.nome.startsWith('J'));

}

// Array map
var arrayMap = function () {
    let numeros = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

    let numerosX10 = numeros.map(valor => valor * 10);

    let pessoas = [{
            nome: 'Jorge',
            idade: 20
        },
        {
            nome: 'Henrique',
            idade: 20
        }
    ];

    let nomes = pessoas.map(obj => obj.nome);
    let idades = pessoas.map(obj => ({
        idade: obj.idade
    }));
    let insercaoIds = pessoas.map(function (obj, indice) {
        obj.id = indice;
        return obj
    });
    let newObjWithIds = pessoas.map(function (obj, indice) {
        const newObj = {
            ...obj
        }
        newObj.id = indice;
        return newObj;
    });

}

// Array reduce
var arrayReduce = function () {
    let numeros = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

    let pares = numeros.reduce(function (acumulador, valor, indice, array) {
        if (valor > 20) acumulador.push(valor);
        return acumulador;
    }, []);


    let pessoas = [{
            nome: 'Jorge',
            idade: 20
        },
        {
            nome: 'Henrique',
            idade: 20
        },
        {
            nome: 'Eduardo',
            idade: 43
        },
        {
            nome: 'Jessica',
            idade: 30
        },
        {
            nome: 'Camila',
            idade: 25
        },
        {
            nome: 'Jose',
            idade: 75
        },
    ];

    let maisNovo = pessoas.reduce(function (acumulador, valor, indice, array) {
        if (acumulador.idade < valor.idade) return acumulador;
        return valor;
    });

}

// Filter + Map + Reduce
var filterMapReduce = function () {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    let numerosParesX2Somados = numeros
        .filter(valor => valor % 2 === 0)
        .map(valor => valor * 2)
        .reduce((acumulador, valor) => acumulador + valor);
}

// for of, for in, forEach
var forOfForInForEach = function () {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // for of
    for (let valor of numeros) console.log(valor);

    // for in
    for (let index in numeros) console.log(numeros[index])

    // forEach
    let total = 0;
    numeros.forEach((valor, indice, array) => total += valor);

}

// Classes e prototype
var classesAndPrototype = function () {
    class Pessoa {
        constructor(nome, sobrenome) {
            this.nome = nome;
            this.sobrenome = sobrenome;
        }

        falar() {
            console.log(`${this.nome} está falando.`);
        }
    }
    let pessoa1 = new Pessoa('Jorge', 'Henrique');

    // Prototype
    function Pessoa2(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    Pessoa.prototype.falar = function () {
        console.log(`${this.nome} está falando.`);
    }

    let pessoa2 = new Pessoa2('Jorge', 'Henrique');

}