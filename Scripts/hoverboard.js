const container = document.getElementById("continer")
const colors =["#e74c3c","#8344ad","#3498db","#12fd32ac"]

const max_iteration=500

for(let i=0;i<max_iteration ;i++){

    const square = document.createElement("div")
    square.classList.add("boxes")

    square.addEventListener("mouseover",function(){setcolor(square)})
    square.addEventListener("mouseout",function(){removecolor(square)})
    container.appendChild(square)

}

function setcolor(a){
    const color = colors[Math.floor(Math.random()*colors.length)]
    a.style.background = color
}

function removecolor(a){
    a.style.background = "rgb(49, 51, 54)"
}
