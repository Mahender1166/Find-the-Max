function calc()
{
    var Value1=  parseFloat(document.getElementById("v1").value);
    var Value2=  parseFloat(document.getElementById("v2").value);
    var max=math.max(Value1,Value2);
    document.getElementById("total").innerHTML=sum;
}
document.querySelector('#cal').addEventListener('click',calc);
 