let clutter= "";

for(let i=1;i<=500;i++)
{
    let num=Math.floor(Math.random()*10);
    console.log(num)
    clutter +=`<div id=bubble>${num}</div>`;
    
}
document.querySelector(".bottom-part").innerHTML=clutter;
