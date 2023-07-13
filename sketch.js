//https://editor.p5js.org/filipe460/sketches/bIeXDsAUf

let  muzan
let  nezuko
let  gramado
let sol 

let andarX = 0
let andarY = 0

let resetGameBtn
let comecarBtn

let comecar = false

const tamanho = 64
const velocidade = 64

function drawGrass(){
  for (let i = 0; i < 9; i ++){
    for (let j = 0; j < 9; j++){
      image(gramado,tamanho * i , tamanho *j , tamanho, tamanho)
    }   
  } 
}

function reset(){
  
  andarX = 0
  andarY = 0
  resetGameBtn.remove()
  loop()
  
}

function comecarJogo(){
  comecarBtn.remove()
  comecar = true
  loop()
  
}

function setup() {
  createCanvas(576, 576);
  muzan = loadImage('muzan-kibutsuji.png')
  nezuko = loadImage('nezuko.png')
  gramado = loadImage('grama.png')
  sol = loadImage('sol.png')
  
}

function draw() {
  
  
  if (comecar){
    background(222)

    drawGrass()
    image(nezuko, andarX, andarY, tamanho, tamanho)
    image(sol, 512, 512, tamanho, tamanho)


    if (andarX < 0){
      andarX = 0
    }

    if (andarY < 0){
      andarY= 0
    }

    if (andarX > 512){
      andarX = 512
    }

    if (andarY > 512){
      andarY= 512
    }

    if (andarX  === 512 && andarY === 512)
    {
        rect(160, 160, 256,256 )
        textSize(16)
        text('A nezukou conquistou o sol!!!', 180, 300)
      
        resetGameBtn = createButton('Recomeçar')
        resetGameBtn.mousePressed(reset)
        resetGameBtn.style("font-size", "16px")
    
        resetGameBtn.position(245, 380)
        noLoop()

    }  
  }
  else{
    
    rect(180, 180, 340,240 )
    textSize(16)
    text('Ajude a Nezuko Kamado.', 185, 280)
    text('Ela precisa da sua ajuda para conquistar o sol!', 185, 300)
    text('Use as teclas direcionais para alcançar o sol.', 185, 320)
    comecarBtn = createButton('Começar!!')
    comecarBtn.mousePressed(comecarJogo)
    comecarBtn.style("font-size", "16px")
    comecarBtn.position(300, 380)
    
    noLoop()
  }
  
  
}

function keyPressed(){
  if(keyIsDown(UP_ARROW)){
      andarY -= velocidade
  }
  
  if(keyIsDown(DOWN_ARROW)){
    andarY += velocidade
  }
   if(keyIsDown(LEFT_ARROW)){
    andarX -= velocidade
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    andarX += velocidade
  }
  
 
}

