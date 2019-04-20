"use strict";
{
    const words = [
        "apple","middle","action","speaks","louder","than","words"
    ]
    let word = words[Math.floor(Math.random() * words.length)];
    let loc ;
    let score; 
    let miss ;
    let isPlaying = false;
    const target = document.getElementById("target");
    const scoreLabel = document.getElementById("score");
    const missLabel = document.getElementById("miss");
    const timeLabel = document.getElementById("time");
    const timeLimit = 10 * 1000;
    let startTime ;


    window.addEventListener("click",() => {
      if(isPlaying === true){
          return;
      }
        resetAll();
        isPlaying = true;
        updateTarget();
        startTime = Date.now();
        updateTimer();
    })

    function updateTarget(){
        let placeholder = "";
        for(let i = 0;i< loc;i++){
            placeholder += "_";
        }
        target.textContent = placeholder + word.substring(loc);
    }


    function updateTimer(){
        const timeLeft = startTime + timeLimit - Date.now();
        timeLabel.textContent = (timeLeft/1000).toFixed(2);
        const timerId = setTimeout(() => {
            updateTimer();
        },10);
        
        if(timeLeft < 0){
            clearTimeout(timerId);
            timeLabel.textContent = 0.00;
            setTimeout(() => {
                showResult();
            },100)
            isPlaying = false;
            target.textContent = "click to start again";
        }
    }
    window.addEventListener("keyup",e =>{
        if(isPlaying === false){
            return;
        }
        if(word[loc] === e.key){
            console.log("score");
            loc++;
            if(loc === word.length){
                word = words[Math.floor(Math.random() * words.length)];
                loc = 0;
                target.textContent = word;
            }
           score++;
           updateTarget();
           
        }else{
            console.log("miss");
            miss++;
        }
        scoreLabel.textContent = score;
        missLabel.textContent = miss;

    })

    function showResult(){
        const accuracy = score / (score + miss)*100;
        window.alert(`Yourscore: ${score} , Yourmiss: ${miss} , 正答率${accuracy.toFixed(2)}%`);
    }

    function resetAll(){
        loc = 0;
        score = 0;
        miss = 0;
        word = words[Math.floor(Math.random() * words.length)];
    }
}