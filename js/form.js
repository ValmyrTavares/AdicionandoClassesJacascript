
var form = document.querySelector("form");
var botao = document.querySelector(".adiciona-paciente");

botao.addEventListener("click",adicionaPaciente)

function adicionaPaciente(){
    event.preventDefault()
    var paciente = obtemPacienteFormulario(form);
    var pacienteValidado = validaPaciente(paciente)
    var pacienteTr = montaTr(pacienteValidado);
    var tabela = document.querySelector(".tabela-paciente")
    tabela.appendChild(pacienteTr)
    form.reset();
}

function obtemPacienteFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura:form.altura.value,
        imc: calcImc( form.peso.value, form.altura.value)

    }
    return paciente
}
function validaPaciente(paciente){
   if((paciente.peso<=0)||(paciente.peso>200)){
    paciente.peso = "Peso Inválido";
    paciente.imc = "Imc inválido";
    paciente.peso.classList.add("mensagem-erro")
    
    
   
   
   }
   if((paciente.altura<0)||(paciente.altura>3)){
    paciente.altura= "Altura invalida"
    paciente.imc = "Imc inválido"
   }
   console.log(form.peso.value );
   console.log( form.altura.value)
   console.log(paciente)
   
  
    return paciente
}



  

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");

    pacienteTr.appendChild( montaTd(paciente.nome,"info.nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info.peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info.altura"));
    pacienteTr.appendChild( montaTd(paciente.imc,"info.imc"));

    return pacienteTr
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
   
    

  










