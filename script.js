let clutter= "";
let totalscore=0;

let n=Math.floor(Math.random()*400);
for(let i=1;i<=n&&i<1000;i++)
{
    let num=Math.floor(Math.random()*10);
    console.log(num)
    clutter +=`<div class=bubble id="manideep+${i}"onClick="points(${num},${i})">${num}</div>`;
    
}

document.querySelector(".bottom-part").innerHTML=clutter;

function points(sum,index)
{
    let x=`manideep+${index}`;
    totalscore+=sum;
    
    document.getElementById("totalscore").innerHTML=totalscore;
    document.getElementById(x).innerHTML=0;
    document.getElementById(x).style.scale="0";
}
