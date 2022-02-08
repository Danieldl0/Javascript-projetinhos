function numberOnly(id){
    let x = document.getElementById(id);
    x.value = x.value.replace(/[^0-9]/gi, "");
}

const cep = document.querySelector("#cep")

function preencherEndereco(dados){
    for (const key in dados) {
        if(document.querySelector(`#${key}`)){
            document.querySelector("#"+key).value = dados[key];
        }
    }
}

function pegarDados(){
    const options = {
        method: "GET",
        mode: "cors",
        cache: "default"
    }

    fetch(`https://viacep.com.br/ws/${cep.value}/json/`, options)
    .then(response => {response.json().then(result => preencherEndereco(result))})
    .catch(erro => console.log(erro))
}

cep.addEventListener("blur", pegarDados);