function addres(x){ 
    document.getElementById("res").value += x;
    let resul = document.getElementById("res").value
    
    if(resul == "*" || resul == "/"){
        apagar();
    }
    if (x == "*" || x == "+" || x == "-" || x == "/" || x == ".")// verifica se o atual é um sinal
        if(resul[resul.length-2] == '*' || resul[resul.length-2] == '/' || resul[resul.length-2] == '-' || resul[resul.length-2] == '+' || resul[resul.length-2] == '.' )// verifica se o ultimo foi um sinal
            apagar();
}

function mostrares(){
    let resul = document.getElementById("res").value
    if (resul){
        guardaResultado(resul);
        document.getElementById("res").value = eval(resul);
    }   
}

function limpar(){
    document.getElementById("res").value = '';
    document.getElementById("guardares").value = "";
}

function apagar(){
    let resul = document.getElementById("res").value;

    document.getElementById("res").value = resul.substring(0,(resul.length-1));
}

function guardaResultado(x){
    document.getElementById("guardares").value = x + "=";
}