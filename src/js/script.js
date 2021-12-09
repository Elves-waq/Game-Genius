// variable of ambient
let order = [];
let clickedOrder = [];
let score = 0 ;
// selected areas display
const red = document.querySelector('.color__area--red');
const blue = document.querySelector('.color__area--blue');
const green = document.querySelector('.color__area--green');
const yellow = document.querySelector('.color__area--yellow');
const start = document.querySelector('.start__button');

// fuctions

// set color order
let setOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    for(let i in order) {
        let elementColor = createElementColor(order[i]);
        ligthColor(elementColor,Number(i) + 1);
    }

}
// color display
let ligthColor = (element, number) => {
        number = number * 500 ;
        setTimeout(()=>{
            element.classList.add('ative')
        },number - 250 );
        setTimeout(() => {
            element.classList.remove('ative')
        },number - 100);
}

//  verificate for order
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] !== order[i]){
            lose();
            break; 
        }
    }
    if(clickedOrder.length === order.length) {
         alert(`Pontuação: ${score}\n Você arcetou !\n Iniciando próximo nivel!`) ;
         nextLevel();  
    }

};

// fuction click for user 
let click = (color) => {
    clickedOrder[clickedOrder.length] = color ;
    createElementColor(color).classList.add('ative');

    setTimeout(()=>{
        createElementColor(color).classList.remove('ative');
        checkOrder();
    },100)

    
}


// function return color
 
let createElementColor = (color) => {
    if(color == 0) {
        return red;
    }else if (color == 1){
        return blue;
    }else if(color == 2){
        return green;
    }else if(color == 3){
        return yellow;
    }

}
//set next level function 
let nextLevel = () => {
    score++;
    setOrder();
}

//set lose function 
let lose = () => {
    alert(`Sua Pontuação Foi : ${score}\n Você perdeu \n Clique em ok para iniciar um novo jogo`);
    order = [];
    clickedOrder= [];
    score = 0 ;
    playGame();
    
} 
// the start game 
let playGame = () => {
    alert(`Bem vindo ao Genius!\n Bom jogo!!!` )
    order = [];
    clickedOrder=[];
    score = 0;
    nextLevel();
};

// events the click 
start.addEventListener('click',playGame);
red.onclick =()=> click(0);
blue.onclick = ()=> click(1);
green.onclick = ()=>click(2);
yellow.onclick = ()=> click(3);

