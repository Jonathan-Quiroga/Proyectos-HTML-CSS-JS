const menuToggle = document.querySelector(".menuToggle")
const navigation = document.querySelector(".navigation") // se selcciona por que tiene a todo el menu en su contenido 


/* para manipular las transiciones */
menuToggle.onclick = function (){
    navigation.classList.toggle('open')
}

/* para manipular los contenidos del menu */

const list = document.querySelectorAll('.list')
function activarLink(){
    list.forEach((item) =>
    item.classList.remove('active'))
    this.classList.add('active')    
}
list.forEach((item)=>
item.addEventListener('click', activarLink)
)
