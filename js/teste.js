
var Tform = document.querySelector(".T");
var Tbotao = document.querySelector(".Tbotao");
var Ttabela = document.querySelector(".Ttabela")

Tbotao.addEventListener("click",Tcompleto);

function Tcompleto(){
    event.preventDefault();
    var Tpaciente = TpegandoCidadao(Tform);
    var linha = criaLinha(Tpaciente);
    Ttabela.appendChild(linha);
    Tform.reset();
}

function TpegandoCidadao(Tform){
    cidadao = {
        nome: Tform.Tnome.value,
        sobrenome: Tform.Tsobrenome.value,
        idade: Tform.Tidade.value,
        nacionalidade: Tform.Tnacionalidade.value
    }
    return cidadao
   
}
    
    // function criaLinha(cidadao){
    //     var linhaPrincipal = document.createElement("tr")
        
    //     var tdNome = document.createElement("td");
    //     var tdSobrenome = document.createElement("td");
    //     var tdIdade = document.createElement("td");
    //     var tdNacionalidade = document.createElement("td");

    //     tdNome.textContent = cidadao.nome;
    //     tdSobrenome.textContent = cidadao.sobrenome;
    //     tdIdade.textContent = cidadao.idade;
    //     tdNacionalidade.textContent = cidadao.nacionalidade;

    //     linhaPrincipal.appendChild(tdNome);
    //     linhaPrincipal.appendChild(tdSobrenome);
    //     linhaPrincipal.appendChild(tdIdade);
    //     linhaPrincipal.appendChild(tdNacionalidade);

    //     return linhaPrincipal;

    // }

    // function criaLinha(cidadao){
    //     var linhaPrincipal = document.createElement("tr")
        
       

    //     tdNome = criaLinhaTurbo(cidado.nome, "info-nome")
    //     tdSobrenome= criaLinhaTurbo(cidado.sobrenome, "info-sobrenome")
    //     tdIdade = criaLinhaTurbo(cidado.idade, "info-idade")
    //     tdNacionalidade =criaLinhaTurbo(cidado.nacionalidade, "info-nacionalidade")

    //     linhaPrincipal.appendChild(tdNome);
    //     linhaPrincipal.appendChild(tdSobrenome);
    //     linhaPrincipal.appendChild(tdIdade);
    //     linhaPrincipal.appendChild(tdNacionalidade);

    //     return linhaPrincipal;

    // }

    function criaLinha(Tpaciente){
        var linhaPrincipal = document.createElement("tr")
        
        linhaPrincipal.appendChild(criaLinhaTurbo(Tpaciente.nome, "info-nome"));
        linhaPrincipal.appendChild(criaLinhaTurbo(Tpaciente.sobrenome, "info-sobrenome"));
        linhaPrincipal.appendChild(criaLinhaTurbo(Tpaciente.idade, "info-idade"));
        linhaPrincipal.appendChild(criaLinhaTurbo(Tpaciente.nacionalidade, "info-nacionalidade"));

        return linhaPrincipal;

    }
    
    
    function criaLinhaTurbo(dado, classe){
             var td = document.createElement("td");
             td.textContent = dado;
             td.classList.add(classe);
             return td;
         }
    
        
    
    
    
    
    
    