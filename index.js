function cal(){
  var a=parseInt(document.getElementById("one").value);
  var b=parseInt(document.getElementById("two").value);
  var c=parseInt(document.getElementById("three").value);
  var d=parseInt(document.getElementById("four").value);
  var e=a+b+c+d;

  if(a>100 || b>100 || c>100 || d>100)
  {
    window.alert("Invalid Marks")
  }
  else{
    document.getElementById("obtain").innerHTML=e;
  }
    if(e>=300)
  {
    document.getElementById("grade").innerHTML="A";
  }else
  {
    document.getElementById("grade").innerHTML="B";
  }
  if(e>=200)
  {
    document.getElementById("remark").innerHTML="PASS";
  }
  else{
    document.getElementById("remark").innerHTML="FAIL";
  }
}