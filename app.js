

var multiplyTable=document.getElementById("displayNum"),
     reset=document.querySelector("#reset"),
     result=document.getElementsByTagName("li"),
     message= document.querySelector(".message"),
     time=document.getElementById("time"),
     showScore=document.getElementById("showScore"),
     gameOver=document.getElementById("gameOver"),
     timeRemaining=document.querySelector(".timeRemaining"),
     performanceMessage=document.getElementById("performanceMessage");
     var number1,number2,answer,index,t,randomNumber,k;
     var count=60; var scoreCount=0;
     var problem=[
               multiplication,
               addition,
               subtraction,
               division
      ];

function randomNumberGenerator(){
     
       number1=Math.floor(1+Math.random()*10);
       number2=Math.floor(1+Math.random()*10);

    }

  
  reset.addEventListener("click",function(){
        problem[Math.floor(Math.random()*problem.length)]();
         count=60;
       gameOver.style.display="none";
       timeRemaining.style.display="inline";
        time.style.color="white";
        score.innerHTML="";
        message.textContent="";
        clearTimeout(t);
         scoreCount=0;
        timedCount();

    
  });

function checkAnswer(){
 
	for(var i=0;i<result.length;i++){
	  result[i].addEventListener("click",function(){
	     var selection=parseInt(this.innerHTML);
		     if(selection===answer){
		     	document.getElementById("score").innerHTML=++scoreCount;
                 
		             message.textContent ="correct";
		     	      problem[Math.floor(Math.random()*problem.length)]();
                    
		        }
		     else{
		     	message.textContent="try again";
	        
	         }
	  });


}

}
function timedCount(){
     if(count<0){
      stopCount();
   
    }
    if(count<10)
       time.style.color="red";
   
   time.innerHTML=count--;

  t=setTimeout(function(){timedCount()},1000);

}

function stopCount(){
   
        clearTimeout(t);
        checkPerformance();
        showScore.innerHTML=scoreCount;
        timeRemaining.style.display="none";
        gameOver.style.display="block";
        

         
}

function checkPerformance(){
  if(scoreCount>20)
    performanceMessage.innerHTML="Great Job Amigo!";
  else if(scoreCount>10 && scoreCount<=20)
     performanceMessage.innerHTML="Not bad.You can improve though!";
   else
    performanceMessage.innerHTML="You need to work really hard!!!";


}

function multiplication(){

       randomNumberGenerator();
       answer=number1 *number2;
       multiplyTable.innerHTML=number1 +" x "+ number2;
       index=Math.floor(Math.random()*result.length)
       result[index].innerHTML=answer;
       populateAnswers(1);
      

}

function addition(){

      randomNumberGenerator();
      answer=number1+number2;
      multiplyTable.innerHTML=number1 +" + "+number2;
      index=Math.floor(Math.random()*result.length);
      result[index].innerHTML=answer;
      populateAnswers(2);
}

function subtraction(){

      randomNumberGenerator();
      answer=number1>number2? number1-number2 : number2-number1;
      if(number1>number2)
         multiplyTable.innerHTML=number1 +" -"+number2;
       else
          multiplyTable.innerHTML=number2 +"-"+number1;
      index=Math.floor(Math.random()*result.length);
      result[index].innerHTML=answer;
      populateAnswers(3);
}

function division(){
       randomNumberGenerator();
       answer=number1>number2?number1%number2:number2%number1;
        if(number1>number2)
         multiplyTable.innerHTML=number1 +" %"+number2;
       else
          multiplyTable.innerHTML=number2 +"%"+number1;

        index=Math.floor(Math.random()*result.length);
        result[index].innerHTML=answer;
        populateAnswers(4);



}
function populateAnswers(selection){
      var sum=0;
      
        for(var i=0;i<result.length;i++){
               if(index!==i){
                    var k=Math.floor(5+Math.random()*2);
                   result[i].innerHTML=Math.abs(k);
                
                 }
        }

}


randomNumberGenerator();
multiplication();
checkAnswer();
timedCount();

