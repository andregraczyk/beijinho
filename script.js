let movel = document.getElementById("movel")
let fixo = document.getElementById("fixo")
let names = document.getElementById("name")
let num = 0
let div = document.getElementById("box")
var clonado = fixo.cloneNode(true)

function moveButton() {
  let randomlf = Math.floor(Math.random() * div.clientWidth)
  let randomhv = Math.floor(Math.random() * div.clientHeight)
  movel.style.left = `${randomlf}px`
  movel.style.top = `${randomhv}px`

  num++
  function cont(){

    switch (num) {
      case 4:
        names.innerHTML = "Me da um beijin porfavo" 
      break;
      case 7:
        names.innerHTML = "Vou perguntar de novo!!"
        setTimeout(() =>{
          names.innerHTML = "Tem certeza?????"
        }, 1000)
      break;
      case 11:
        div.appendChild(clonado).style.left = `${randomhv}px`
        div.appendChild(clonado).style.top = `${randomhv}px`
      break
      case 15:
        names.innerHTML = "Como assim nao?? :("
      break
      case 19:
        names.innerHTML = "Ok, sabia que ia rolar"
        fixo.classList.add("grande")
        div.appendChild(clonado).style.display = 'none'
        movel.style.display = "none"
      break
    }
  }
  cont()
}

// Check if the user is on a mobile device
if (window.matchMedia("(max-width: 768px)").matches) {
  // If they are, move the button when it's clicked
  movel.addEventListener("click", moveButton)
} else {
  // If they're not, move the button when the mouse hovers over it
  movel.addEventListener("mouseenter", moveButton)
}

fixo.addEventListener("click", () =>{
  document.getElementById("img").classList.add("active")
  document.getElementById("overlay-active").classList.add("overlay-active")
  movel.style.display = "none"
})

moveButton();