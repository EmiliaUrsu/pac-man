let pac_x     = 2
let pac_y     = 2
let coin_x    = parseInt(1+Math.random()*9)
let coin_y    = parseInt(1+Math.random()*9)
let coin2_x   = parseInt(1+Math.random()*9)
let coin2_y   = parseInt(1+Math.random()*9)
let bomb_x    = 8
let bomb_y    = 7
let score     = 0
let hp        = 100
let coinState = true
let bombState = true


function action(){

    switch(event.key){
        case "ArrowUp"    :if(pac_y > 1) pac_y--
        break

        case "ArrowRight" : if(pac_x < 10)pac_x++
        break

        case "ArrowDown"  :if(pac_y < 10) pac_y++
        break

        case "ArrowLeft"  :if(pac_x > 1) pac_x--
        break
    }
if( pac_x == coin_x  & pac_y == coin_y ){
    score += 10 
    
}

if( pac_x == coin2_x  & pac_y == coin2_y ){
    score += 10 
}

if( pac_x == bomb_x & pac_y == bomb_y){
    hp -= 20
}
    
    
renderMap()
}


function renderMap(){
    gameMap.innerHTML = ` ` 
 for(y = 1; y <= 10; y ++){
    for(x = 1; x <= 10; x ++){

     if( x == pac_x && y == pac_y){
    gameMap.innerHTML +=`<div class ="pac">  </div>`}
     else if( x == coin_x && y == coin_y){
        gameMap.innerHTML +=`<div class ="coin">  </div>`  
     }
     
     else if( x == coin2_x && y == coin2_y){
        gameMap.innerHTML +=`<div class ="coin">  </div>`  
     } 
     
     else if(  x == bomb_x && y == bomb_y ){
        gameMap.innerHTML +=`<div class ="bomb">  </div>` 
     } 
     
  else {
    gameMap.innerHTML +=`<div class ="">  </div>` }
  
  }
  
 }
 gameScore.innerHTML = `Score :${score}`
 scoreHp.innerHTML   = `Health :${hp}`
}
renderMap()