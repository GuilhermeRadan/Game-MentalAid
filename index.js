
    var pos1X = 50;
    var pos1Y = 0 ;
    var pos2X = 50;
    var pos2Y = 110;
    var pos3X = 50;
    var pos3Y = 220;
    var pos4X = 160;
    var pos4Y = 0;
    var pos5X = 160;
    var pos5Y = 110;
    var pos6X = 160;
    var pos6Y = 220;
    var pos7X = 270;
    var pos7Y = 0;
    var pos8X = 270;
    var pos8Y = 110;
    var pos9X = 270;
    var pos9Y = 220;

window.onload = function() {
    nivel1();
    //renderCards()

} 

function renderCards(){
    var canvas = document.getElementById('myCanvas')
    var ctx = canvas.getContext('2d')

    var vermelho = ctx.fillStyle ="#FF0000";
    

    corQuadrado(vermelho)
    posicaoQuadrado(pos1X, pos1Y)
    
    corQuadrado(vermelho),
    posicaoQuadrado(pos2X, pos2Y)
    
    corQuadrado(vermelho)
    posicaoQuadrado(pos3X, pos3Y)
    
    corQuadrado(vermelho)
    posicaoQuadrado(pos4X, pos4Y)
    
   
    corQuadrado(vermelho)
    posicaoQuadrado(pos5X, pos5Y)
  
    corQuadrado(vermelho)
    posicaoQuadrado(pos6X, pos6Y)
  

    corQuadrado(vermelho)
    posicaoQuadrado(pos7X, pos7Y)
   
    corQuadrado(vermelho)
    posicaoQuadrado(pos8X, pos8Y)
    
    corQuadrado(vermelho)
    posicaoQuadrado(pos9X, pos9Y)
}


function corQuadrado(cor){
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    return ctx.fillStyle = cor;
}

function posicaoQuadrado(px, py){
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    return ctx.fillRect(px, py, 100, 100)
}

function limparQuadrado(px, py){
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    return ctx.clearRect(px, py, 100, 100)
}

// função que tem como parametro a posição do card "px" e py" e o por último o tempo de espera para executar.
function trocarCor (px , py, time) {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var azul = ctx.fillStyle = "#00BFFF";

    setTimeout(() => {
    limparQuadrado(px, py);
    corQuadrado(azul);
    return posicaoQuadrado(px, py);
    }, time); 
}

function nivel1(){
    renderCards();

    trocarCor(pos1X, pos1Y, 1000);
    trocarCor(pos3X, pos3Y, 2000);
    trocarCor(pos8X, pos8Y, 3000);


}

function nivel2(){
    renderCards()
    
}

































/*

function cards(){
    var canvas = document.getElementById('myCanvas')
    var ctx = canvas.getContext('2d')

    var vermelho = ctx.fillStyle ="#FF0000";
    var azul = ctx.fillStyle = "#00BFFF";


    var pos1 = {
        cor: corQuadrado(vermelho),
        tam:  tamanhoQuadrado(50, 0)
    }
     
   var pos2 = {
        cor: corQuadrado(vermelho),
        tam: tamanhoQuadrado(50, 110)
   }

   var pos3 = {
        cor:  corQuadrado(vermelho),
        tam: tamanhoQuadrado(50, 220)
   }

   var pos4 = {
        cor: corQuadrado(vermelho),
        tam: tamanhoQuadrado(160, 0)
    }

    var pos5 = {
        cor: corQuadrado(vermelho),
        tam:  tamanhoQuadrado(160, 110)
    }

    var pos6 = {
        cor:  corQuadrado(vermelho),
        tam: tamanhoQuadrado(160,220)
   }

   var pos7 = {
        cor: corQuadrado(vermelho),
        tam: tamanhoQuadrado(270, 0)
    }

    var pos8 = {
        cor:  corQuadrado(vermelho),
        tam:  tamanhoQuadrado(270, 110)
    }

    var pos9 = {
        cor: corQuadrado(azul),
        tam: tamanhoQuadrado(270, 220)
    }

    return  [pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9]

}

function nivel1(){
    for(var i = 0; i < 3; i++){
        
    }
}

function corQuadrado(cor){
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    return ctx.fillStyle = cor;
}

function tamanhoQuadrado(px, py){
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    return ctx.fillRect(px, py, 100, 100)
}*/