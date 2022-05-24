//Aluno: André Luiz H. Kanashiro
function atv1(){
    var num = Number(window.prompt("Digite um número: "));

    if(num % 2 == 0 && num % 7 == 0){
        result = "O valor é divisível por 2 e 7.";
    } else {
        result = "O valor não é divisível por 2 e 7.";
    }

    document.getElementById("resultado").innerHTML = result;
}


function atv2() {
    var num = prompt("Escolha um numero de 1 a 7:")
    switch (num) {
        case "1":
            alert("Sabado");
            break;
        case "2":
            alert("Segunda");
            break;
        case "3":
            alert("Terça");
            break;
        case "4":
            alert("Quarta");
            break;
        case "5":
            alert("Quinta");
            break;
        case "6":
            alert("Sexta");
            break;
        case "7":
            alert("Sabado");
            break;
    }
}

function atv3(){
    var numero = Number(window.prompt(("Informe um numero: ")))
    for(var count=1; count<=10 ; count++)
    document.write(numero +" x "+count+" = " + (numero*count) + "<br />");
    }

    function atv4(){
        var res1 = cop * 0.025;
        var cop = window.prompt(("Informe um numero de copias: "))

        if(cop <= 100){
            window.alert(res1)
        }
        else{
            window.alert()
        }
    }