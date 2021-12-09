var checkButton=document.querySelector("#check-button");
var message=document.querySelector("#display-error");
var angles=document.querySelectorAll(".angle");
checkButton.addEventListener("click",function checkValidTriangle(){
     var sum=0;
     for(var i=0;i<3;++i){
         sum+=Number(angles[i].value);
     }
     if(sum===180){
         message.innerText="Yes, this forms a trianlge";
     }
     else{
         message.innerText="No, this does not from a triangle";
     }
});
