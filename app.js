let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper");
let scisor = document.querySelector(".scisor");

let icon = document.querySelectorAll(".icon");
let reset_game = document.querySelector("#reset");
let userScore = document.querySelector(".userscore");
let computerScore = document.querySelector(".computerscore");

let user = null;
let curr_user_score = 0;
let comput = null;
let curr_comput_score = 0;

rock.addEventListener("click" , () =>{
    console.log("user selected rock ");
    user = "Rock";
    comput = getRandomPick();
    console.log(comput);
    BackgroundLight();
    
})

paper.addEventListener("click" , () =>{
    console.log(" user selected paper ");
    user = "Paper";
    comput = getRandomPick();
    console.log(comput);
    BackgroundLight();
})

scisor.addEventListener("click" , () =>{
    console.log("scisor was selected");
    user = "Scissors";
    comput = getRandomPick();
    console.log(comput);
    BackgroundLight();
})

function BackgroundLight(){
    let winner = whoWon (user , comput);

    if(winner === user){
        userScore.setAttribute ("class" , "win");
        computerScore.setAttribute ("class" , "loss");

    }else if(winner === comput){
        userScore.setAttribute ("class" , "loss");
        computerScore.setAttribute ("class" , "win");

    }else{
        userScore.setAttribute ("class" , "draw");
        computerScore.setAttribute ("class" , "draw");
      

    }
    scoreCard(curr_user_score , curr_comput_score);
}


function getRandomPick() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function whoWon(user , comput){


    if(user === comput){
        return "tie";
    }

    const winCases = {
        Rock: "Scissors",
        Paper: "Rock",
        Scissors: "Paper"
    };
    
    if(winCases[user] === comput){
        console.log("user won");
        curr_user_score++;
        return user;
    }else{
        console.log("computer won");
        curr_comput_score++;
        return comput;
    }



}

function scoreCard (curr_user_score
 , curr_comput_score){
    userScore.innerHTML = `<p>User Score: ${curr_user_score
    
    }</p>`;

    computerScore.innerHTML = `<p>Computer Score: ${curr_comput_score}</p>`;

}

reset_game.addEventListener("click" , ()=>{
    console.log("game restart");
    user = null;
    comput = null;
    curr_user_score = 0;
    curr_comput_score = 0;
    userScore.innerHTML = `<p>User Score: ${curr_user_score}</p>`;
    computerScore.innerHTML = `<p>Computer Score: ${curr_comput_score}</p>`;
    userScore.setAttribute ("class" , "userscore");
    computerScore.setAttribute ("class" , "computerscore");
})






