var checkButton=document.querySelector("#check-button");
var message=document.querySelector("#display-error");
var angles=document.querySelectorAll(".angle");
checkButton.addEventListener("click",function findHypotenuse(){
      var s1=angles[0].value;
      var s2=angles[1].value;
      var h=Math.sqrt(s1*s1+s2*s2);
      var result="The length of the hypotenuse is "+h;
      message.innerText=result;
});
