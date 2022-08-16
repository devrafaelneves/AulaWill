//para mudar a cor do background quando aperta o botão 
// var btn = document.querySelector('#btn1');

// function random(number) {
//   return Math.floor(Math.random()*(number+1));
// }

// btn.onclick = function() {
//   var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   document.body.style.backgroundColor = rndCol;
// }


// Fazer o cálculos no js
$('#btnresultado').click(
    function(){
        calculo =
            {
                'a':document.getElementById('btnn1').value,
                'b':document.getElementById('btnn2').value,
                'c':document.getElementById('btnn3').value
            }
            
       let media = (parseInt(calculo.a) + parseInt(calculo.b) + parseInt(calculo.c)) / 3;
       if (media >= 7){
           alert("Você foi APROVADO!!");
       }
       else {
           alert("Você foi REPROVADO!!")
           
           let exame = 10 - media;

           alert('Você precisa tirar '+ exame)
       }
       }
    
)










// Pra mostrar o pop-up com as info do cadastro da pessoa
// $('#btn2').click(
//     function(){
//         cadastro = 
//         {
//             'nome':document.getElementById('btnnome').value,
//             'endereço':document.getElementById('btnendereço').value,
//             'email':document.getElementById('btnemail').value
//         }
//         alert('Nome:'+cadastro.nome+'  End:'+cadastro.endereço+'  @'+cadastro.email);
        
//      }
// )





// PRIMEIRO
// $('#btn2').click(
//     function(){
//         const nome = document.getElementById('btnnome').value;
    
//             alert(nome); 
        
//      }



//SEGUNDO
//  *$('#btn2').click(
//    function(){
//         alert('O click');
//     }
// )
// ctrl + ; = comentar tudo que tá selecionado

