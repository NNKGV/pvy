function openLetter(){
    document.querySelector(".envelope").classList.toggle("open");
}

function sendMessage(){
    const input = document.getElementById("inputMsg");
    const display = document.getElementById("chatDisplay");

    if(input.value.trim() !== ""){
        const p = document.createElement("p");
        p.textContent = "💌 " + input.value;
        display.appendChild(p);
        input.value = "";
    }
}
