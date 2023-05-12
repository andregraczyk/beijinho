let movel = document.getElementById("movel")
let fixo = document.getElementById("fixo")
let names = document.getElementById("name")
let num = 0
let div = document.getElementById("box")
var clonado = fixo.cloneNode(true)

movel.addEventListener("mouseenter", () =>{
  // função para mover o botão
  let randomlf = Math.floor(Math.random() * 1100)
  let randomhv = Math.floor(Math.random() * 510)
  movel.style.left = `${randomlf}px`
  movel.style.top = `${randomhv}px`

  // parametro de contagem
  num++
  function cont(){

    // if(num == 4){
    //   names.innerHTML = "O CARLOS, não é broxa??" 
    // }else if(num == 7){
    //   names.innerHTML = "VOU PEGUNTAR DE NOVO"
    //   setTimeout(() =>{
    //     names.innerHTML = "O CARLOS É BROXA?????"
    //   }, 1000)
    // }else if(num == 15){
    //   div.appendChild(clonado).style.left = `${randomhv}px`
    //   div.appendChild(clonado).style.top = `${randomhv}px`
    // }else if(num == 18){
    //   names.innerHTML = "Como assim não :("
    // }else if(num == 22){
    //   names.innerHTML = "OK, VOCÊ VENCEU"
    //   fixo.classList.add("grande")
    //   div.appendChild(clonado).style.display = 'none'
    //   movel.style.display = 'none'
    // }

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
        names.innerHTML = "Ok, venceu"
        fixo.classList.add("grande")
        div.appendChild(clonado).style.display = 'none'
        movel.style.display = "none"
      break
    }
  }
  cont()
})

fixo.addEventListener("click", () =>{
  document.getElementById("img").classList.add("active")
  document.getElementById("overlay-active").classList.add("overlay-active")
  movel.style.display = "none"
})