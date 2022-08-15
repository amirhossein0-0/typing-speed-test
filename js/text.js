const text = document.querySelector(".content p");
const input = document.querySelector('input');
const mistake = document.getElementById('mistake')
const timer = document.getElementById("time")
const button = document.querySelector(".btn")

let index = 0 ;
let time = 60 ;
let mistakes = 0 ;
let isTyping = 0 ;

function loadParagraph () {
    const randomize = Math.floor(Math.random() * paragraph.length)
    paragraph[randomize].split("").forEach(item => {
        let x = `<span>${item}</span>`;
        text.innerHTML += x ;
    })
    text.querySelectorAll("span")[0].classList.add("active")
    document.addEventListener("keydown", () => input.focus())
    text.addEventListener("click" , () => input.focus())
    
}

input.addEventListener("input" , () =>  {

    let character = text.querySelectorAll("span");
    let charIndex = input.value[index];
    

    if(index < character.length - 1 && time > 0) {
        if(!isTyping) {
            moment = setInterval(initTime,1000);
            isTyping = true ;
        }
        if(charIndex == null) {
            if(index > 0) {
                index--;
                if(character[index].classList.contains("incorrect")) {
                    mistakes--;
                }
                character[index].classList.remove("correct", "incorrect")
            } 
        } else {
            if(character[index].innerText == charIndex) {
                character[index].classList.add("correct");
            } else {
                mistakes++;
                character[index].classList.add("incorrect");
            }
            index++;
        }
        character.forEach(span => span.classList.remove("active"));
        character[index].classList.add("active");
        mistake.innerText = mistakes;
    } else {
        clearInterval(moment);
        input.value = "";
    }   
    })


function initTime () {
    if(time > 0) {
        time--;
        timer.innerText = time
    } else {
        clearInterval(moment)
    }
}

button.addEventListener("click" , () => {
    location.reload();
})


loadParagraph();