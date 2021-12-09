var checkButton=document.querySelector("#check-button");
var message=document.querySelector("#display-error");
var angles=document.querySelectorAll(".angle");
checkButton.addEventListener("click",function findArea(){
      var s1=angles[0].value;
      var s2=angles[1].value;
      var h=(s1*s2)/2;
      var result="The area of the triangle "+h;
      message.innerText=result;
});
