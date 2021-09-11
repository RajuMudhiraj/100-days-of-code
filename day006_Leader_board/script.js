var player_scores = [];
var current_score="";


function button_clicked(n){
    current_score += n;
    document.getElementById('current_score').innerHTML = current_score;
}

function enter_clicked(){
    var player = document.getElementById("name").value;
    if(player != "" && current_score != "" && current_score != '#' ){
    var game = {name:player, score:Number(current_score)}
    player_scores.push(game)
    sortArray()
    current_score =""
    document.getElementById('current_score').innerHTML = current_score;
    document.getElementById("name").value = "";
    min();
    max();
    leaderboard();
    }
    else {
        alert('Please enter name and score!')

    }
}


function sortArray() {
    player_scores.sort(function(a, b){return a.score - b.score});

}


function min(){
document.getElementById('min-display').innerHTML = player_scores[0].name + " - " + player_scores[0].score;
}

function max(){
document.getElementById('max-display').innerHTML = player_scores[player_scores.length-1].name + " - " + player_scores[player_scores.length-1].score;
}

function leaderboard(){
    var output = document.getElementById("output");
    var outputdisplay = document.createElement('p');

    for(var i =0; i<player_scores.length; i++){
        outputdisplay.innerHTML = i+1 + "&nbsp;&nbsp;&nbsp;&nbsp;" + player_scores[i].name + "&nbsp;&nbsp;&nbsp;&nbsp;" +player_scores[i].score;
        output.appendChild(outputdisplay);

    }
}