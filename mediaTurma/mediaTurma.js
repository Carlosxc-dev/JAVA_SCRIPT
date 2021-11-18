
//---------calculo da media de uma turma------------

//objeto contendo todas as notas da sala 
var notas = {
    nota1: 6,
    nota2: 5,
    nota3: 5,
    nota4: 3,
};

// calculo da media dos alunos
var somaa = (notas.nota1 + notas.nota2 + notas.nota3 + notas.nota4) / 4;

// if/else que exibe resultado na pagina do html
somaa <= 5 ? document.write("turma perdeu media") : document.write("turma passou");
