let clutter= "";
let score=0
for(let i=1;i<=300;i++)
{
    let num=Math.floor(Math.random()*10);
    console.log(num)
    clutter +=`<div id=bubble onClick="points(1)">${num}</div>`;
    
}
document.querySelector(".bottom-part").innerHTML=clutter;
document.getElementById("bubble").addEventListener("click",points);

function points(one){
    score+=one;
}

console.log(score);