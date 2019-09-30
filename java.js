function calc()
{
    let box1=  parseFloat(document.getElementById("box1").value);
    let box2=  parseFloat(document.getElementById("box2").value);
    let max=math.max(box1,box2);
    document.getElementById("final").innerHTML=max;
}
document.querySelector('#cal').addEventListener('click',calc);
 