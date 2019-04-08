var titulo = document.querySelector(".titulo");
 titulo.textContent ="Aparecida é a sensação";

//  var botao = document.querySelector(".botao");
//  botao.addEventListener.onClick(pegaPesoAltura);

 
     var pacientes = document.querySelectorAll(".paciente");

     
     for(var i=0; i<pacientes.length;i++){

          var paciente = pacientes[i]
          
          var tdPeso = paciente.querySelector(".info-peso");
          var tdAltura = paciente.querySelector(".info-altura");
          
          var peso = tdPeso.textContent;
          var altura = tdAltura.textContent;
         
        
        
          
          var tdImc = paciente.querySelector(".info-imc");
         
          var alturaValida = true;
          var pesoValido = true;
     
          if(peso<30||peso>200){
              
               tdImc.textContent = "Peso inválido"
               pesoValido = false;
               tdImc.classList.add("mensagem-erro")
             
          }
          if(altura<0||altura>3){
               
               tdImc.textContent = "ALtura inválido"
               alturaValida = false;
               tdImc.classList.add("mensagem-erro")
               
          }
          if(pesoValido && alturaValida){
               tdImc.textContent = calcImc(peso, altura);
          } if((pesoValido = false) && (alturaValida = false)){
               tdImc.textContent = "Peso e altura são inválidos"
          }
          

     }
     
          function calcImc(peso, altura){
               var imc = 0;
               var imc = peso / (altura * altura);
               return imc.toFixed(1);

          }


