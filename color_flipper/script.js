const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.querySelector("#btnColorChanger");
const span = document.querySelector("#myColorSpan");

function getRandomHex(){
    return Math.floor(Math.random()*hex.length);
}

btn.addEventListener("click",function(){
    let hex_color = "#";
    for(let i = 0; i<6 ; i++){
        hex_color += hex[getRandomHex()]
    }

    span.innerHTML =hex_color;
    document.body.style.backgroundColor = hex_color;

});