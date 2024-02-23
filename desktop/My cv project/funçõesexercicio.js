function escrevaMeuNome(nome){
    return "Meu nome é "  + nome;
}

function verificarIdade(idade){
    if (idade>= 18) {
        console.log(escreveMeuNome('Adilson') + 'é Maior');
    } else {
        console.log (escrevaMeuNome('Adilson') +  'é Menor');
    }
}

verificarIdade(19);