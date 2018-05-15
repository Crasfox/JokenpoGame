var contador   = document.getElementById("contar"),
    formPc     = document.getElementById("pchoose"),
    rock       = document.getElementById("pedra"),
    paper      = document.getElementById("papel"),
    scissors   = document.getElementById("tesoura"),
    choose     = document.getElementById("choose"),
    resetar    = document.getElementById("reset"),
    vitoria    = 0,
    derrota    = 0;

resetar.onclick = function(){
  formPc.reset();
  contador.reset();

}

var compare = function(arma) {
  
    var computer = [1,2,3];
    var random = computer[Math.floor(Math.random()*computer.length)];
      
      if (random == 1){
    computer = "Pedra!";
      }else if (random == 2){
    computer = "Papel!";
      }else{
    computer = "Tesoura!";
      }
  
  if (arma == "pedra"){
    if (computer == "Pedra!"){
      
      formPc.pc.value = computer;
      contador.empate.value = +contador.empate.value + 1;
      showDraw();
     
    } else if (computer == "Papel!"){
      
       formPc.pc.value = computer;
      contador.lose.value = +contador.lose.value + 1;
      showLose();
      
    
    } else {
      formPc.pc.value = computer;
      contador.vic.value = +contador.vic.value + 1;
      showWin();
 
    }
  }
  if (arma == "papel"){
    if (computer == "Pedra!"){
      
      formPc.pc.value = computer;
      contador.vic.value = +contador.vic.value + 1;
      showWin();
      
    } else if (computer == "Papel!"){
      
      formPc.pc.value = computer;
      contador.empate.value = +contador.empate.value + 1;
      showDraw();
      
    } else {
      formPc.pc.value = computer;
      contador.lose.value = +contador.lose.value + 1; 
      showLose();
    }
  }
  if (arma == "tesoura"){
    if (computer == "Pedra!"){
      
      formPc.pc.value = computer;
      contador.lose.value = +contador.lose.value + 1;
      showLose();
     
    } else if (computer == "Papel!"){
      
       formPc.pc.value = computer;
      contador.vic.value = +contador.vic.value + 1;
      showWin();
    
    } else {
      formPc.pc.value = computer;
      contador.empate.value = +contador.empate.value + 1;
      showDraw();
   
    }
  }
}

rock.onclick = function(){
    compare("pedra");
}
paper.onclick = function(){
  compare("papel");
}

scissors.onclick = function(){
  compare("tesoura");
}

                                       
