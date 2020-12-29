function Login(){
    player1=document.getElementById("user1").value;
    player2=document.getElementById("user2").value;

    localStorage.setItem("player_1",player1);
    localStorage.setItem("player_2",player2);

    window.location="game_page.html";
}