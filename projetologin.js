//-Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
//-Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
//-Listar participantes e palestrantes por evento.
//-Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.


let dataAtual= 10;
let dataEvento = 9;
let idade = 18;
let palestrantes = 100;

if (dataEvento >= dataAtual ){
    console.log("permitir cadastro");
    }else{
     console.log("cadastro não permitido. data inválida");
}       if(idade >=18){
        console.log("permitir cadastro")
}       else{
        console.log("cadastro não permitido. idade insuficiente");
}           if(palestrantes <=100){
            console.log("Permitir cadastro");
}           else{
             console.log("não cadastro não permitido. excedeu o limite")
}