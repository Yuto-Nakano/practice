"use strict";
{
    const word = "apple";
    let loc = 0;
    let score = 0;
    let miss = 0;
    const target = document.getElementById("target");
    const scoreLabel = document.getElementById("score");
    const missLabel = document.getElementById("miss");
    target.textContent = word;
    function updateTarget(){
        let placeholder = "";
        for(let i = 0;i< loc;i++){
            placeholder += "_";
        }
        target.textContent = placeholder + word.substring(loc);
    }
    window.addEventListener("keyup",e =>{
        if(word[loc] === e.key){
            console.log("score");
            loc++;
           score++;
           updateTarget();
        }else{
            console.log("miss");
            miss++;
        }
        scoreLabel.textContent = score;
        missLabel.textContent = miss;

    })
}