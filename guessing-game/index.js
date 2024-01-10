const divapp = document.getElementById("app")
const title = document.getElementsByTagName("h3")
const table = document.createElement("table")
const titleText = title[0]
for (let i=1; i<=10; i++){
    let tr = document.createElement("tr")
    for(let j=(i-1)*10+1; j<=i*10; j++){
        let td = document.createElement("td")
        td.classList.add("val")
        td.textContent = j
        tr.appendChild(td)
    }
    table.appendChild(tr)
}
const x = Math.floor(Math.random() * (100)) + 1
const tdall = document.getElementsByClassName("val")
let guessNum = 10
function checkGuess(e){
    if (guessNum==0){
        table.style.pointerEvents = "none"
        titleText.textContent = "You loose, refresh to replay"
        alert("You have consumed all the allowed 10 attempts, refresh to replay")
        return false
    }
    guessNum--
    console.log(e, e.target.innerText, x)
    if (parseInt(e.target.innerText)===x){
        tdall[x-1].style.backgroundColor="green"
        console.log(true)
        table.style.pointerEvents = "none"
        titleText.textContent = "You win, refresh to replay"
        alert("You win, you guessed the x is : "+x + " refresh to replay")
    } else if(parseInt(e.target.innerText)<x){       
        console.log(false)
        for (let k=0; k<parseInt(e.target.innerText); k++){
            tdall[k].style.backgroundColor = "red"
        }
        alert("The x is greater than : " + e.target.innerText + " you still have : " + guessNum + " attempts")
    } else {       
        console.log(false)
        for (let k=parseInt(e.target.innerText)-1; k<=99; k++){
            tdall[k].style.backgroundColor = "red"
        }
        alert("The x is less than : " + e.target.innerText + " you still have : " + guessNum + " attempts")
    }
}
divapp.appendChild(table)
const tdevent = document.getElementsByClassName("val")
table.addEventListener("click", checkGuess)