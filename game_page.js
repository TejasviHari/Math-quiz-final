player1_name=localStorage.getItem("player_1");
player2_name=localStorage.getItem("player_2");
console.log("check");
player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn:"+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn:"+player2_name;

function send(){
   number1=document.getElementById("number_1").value;
   number2=document.getElementById("number_2").value;
   actual_answer=parseInt(number1)*parseInt(number2);
   
   question=number1+" x "+number2;
   answer_input="<br><input id='answer' class='form-control' placeholder='Your Answer'";
    check="<br><br><button class='btn btn-success' id='check' onclick='score()'>Check</button>";
row=question+answer_input+check;
document.getElementById("output").innerHTML=row;

document.getElementById("number_1").value="";
document.getElementById("number_2").value="";
}

question_turn="player_1";
answer_turn="player_2";

function score(){
    user_answer=document.getElementById("answer").value;
    answer=user_answer.toLowerCase();
    
    if(answer==actual_answer){
        if(answer_turn=="player_1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
    
        }
        else
        {
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(question_turn=="player_1"){
        question_turn="player_2";
        document.getElementById("player_question").innerHTML="Question Turn-"+player2_name;
    
    }
    
    else{
        question_turn="player_1";
        document.getElementById("player_question").innerHTML="Question Turn-"+player1_name;
    }
    
    
    if(answer_turn=="player_1"){
        question_turn="player_2";
        document.getElementById("player_answer").innerHTML="Answer Turn-"+player2_name;
    
    }
    
    else{
        question_turn="player_1";
        document.getElementById("player_answer").innerHTML="Answer Turn-"+player1_name;
    }
    
    }