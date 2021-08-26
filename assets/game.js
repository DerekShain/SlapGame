var health = 100;
let hits = 0;
// var ko = 0;

// let char = [
//    wario:{
//        name: 'wario',
//         img: "https://ssb.wiki.gallery/images/thumb/6/68/Wario_Pose_WarioWareGold.png/800px-Wario_Pose_WarioWareGold.png"   
//     },
//     wario:{
//         name: 'waluigi',
//          img: "https://ssb.wiki.gallery/images/thumb/b/b9/WaluigiSMP2.png/800px-WaluigiSMP2.png"   
//      },
//     krool:{
//         name: 'king rool',
//          img: "https://ssb.wiki.gallery/images/thumb/6/68/Wario_Pose_WarioWareGold.png/800px-Wario_Pose_WarioWareGold.png"   
//      },
// ]


function slap(){
  health -= 1
  hits += 1
//   console.log(health)
  document.getElementById('healthBar').innerText = health
  document.getElementById('hitCount').innerText = hits

  if (health <= 0){
    document.getElementById('healthBar').innerText = 'K.O'
    document.getElementById("start-controls").classList.add("hidden")
    document.getElementById("end-controls").classList.remove("hidden")
    document.querySelectorAll('div').forEach(d => d.classList.add('shake'))
} 
}

function punch(){
    health -= 5
    hits += 1
    document.getElementById('healthBar').innerText= health
    document.getElementById('hitCount').innerText = hits
    if (health <= 0){
        document.getElementById('healthBar').innerText = 'K.O'
        document.getElementById("start-controls").classList.add("hidden")
        document.getElementById("end-controls").classList.remove("hidden")
        document.querySelectorAll('div').forEach(d => d.classList.add('shake'))
    } 
}

function kick(){
    health -= 10
    hits += 1
    document.getElementById('healthBar').innerText= health
    document.getElementById('hitCount').innerText = hits

    if (health <= 0){
        document.getElementById('healthBar').innerText = 'K.O';
        document.getElementById("start-controls").classList.add("hidden")
        document.getElementById("end-controls").classList.remove("hidden")
        document.querySelectorAll('div').forEach(d => d.classList.add('shake'))
    } 
}


function reset(){
    location.reload()
    document.getElementById("start-controls").classList.add("hidden")
    document.getElementById("end-controls").classList.add("hidden")
}

function start(){
document.getElementById("start-controls").classList.remove("hidden")
document.getElementById("start-button").classList.add("hidden")
}


function wario(){
    document.getElementById("waluigi-control").classList.add("hidden")
    document.getElementById("krool-control").classList.add("hidden")
    document.getElementById("start-controls").classList.remove("hidden")
document.getElementById("start-button").classList.add("hidden")
}

function waluigi(){
    document.getElementById("wario-control").classList.add("hidden")
    document.getElementById("krool-control").classList.add("hidden")
    document.getElementById("start-controls").classList.remove("hidden")
document.getElementById("start-button").classList.add("hidden")
}

function krool(){
    document.getElementById("waluigi-control").classList.add("hidden")
    document.getElementById("wario-control").classList.add("hidden")
    document.getElementById("start-controls").classList.remove("hidden")
document.getElementById("start-button").classList.add("hidden")
}
