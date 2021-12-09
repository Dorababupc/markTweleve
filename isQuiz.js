var submitbtn=document.querySelector(".submit");
var message=document.querySelector("#display-error");
var form=document.querySelector(".bloc");
var correctanswers=["100","obtuse","false"];
function clickHandler(){
    const formResults=new FormData(form);
    console.log(formResults);
    let index=0;
    let score=0;
    for(let values of formResults.values()){
        if(values===correctanswers[index]){
           score=score+1;
        }
        index++;
    }
    message.innerText="Your score is "+score;
}
submitbtn.addEventListener("click",clickHandler);