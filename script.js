var gameList = new Array(4);
var solution = Array("green", "yellow", "yellow", "blue");
// yellow yellow yellow green 
var correctColors; //Counter for correct colors
var correctPosition; //Counter for correct colors and correct position
var index = 0;
var i;
var j;

function check(){
    if(index < 4){
        //Not enough elements on the list to compare
        window.alert("Not enough elements on the list to compare");
    }
    else{
        //check and show results, restore elements from the list
        var visited = Array(false, false, false, false);
        for(i = 0; i<4; i++){ // Firstly we check if the positons and the colors are correct.
            if(solution[i] == gameList[i]){
                visited[i] = true;
                correctPosition++;
            }
        }
        for(i = 0; i<4; i++){ //Then we check only if the colors are correct(for example if there's some green then it has to count as a correct color but not a correct positon)
            if(visited[i] == false){ // If on the other for it wasn't the correct color and positon then we check if it's a correct color.
                for(j = 0; j<4; j++){
                    if(gameList[i] == solution[j]){
                        correctColors++; //If there's the same color in some element in the solution we add one to the correctColors counter.
                    }
                }
            }
        }
        Document.getElementById("correctColors") = correctColors;
        Document.getElementById("correctPosition") = correctPosition;
        index = 0; //Restore elements from the list
    }
}

function addGreen(){
    if(index == 4){
        //If list is full, alert 
        window.alert("List is full, remove some elements to add new ones");
    }
    else{
        //Add green
        gameList[index] = "green";
        index++;
    }
}

function addYellow(){
    if(index == 4){
        //If list is full, alert 
        window.alert("List is full, remove some elements to add new ones");
    }
    else{
        //Add yellow
        gameList[index] = "yellow";
        index++;
    }
}

function addBlue(){
    if(index == 4){
        //If list is full, alert 
        window.alert("List is full, remove some elements to add new ones");
    }
    else{
        //Add blue
        gameList[index] = "blue";
        index++;
    }
}

function addRed(){
    if(index == 4){
        //If list is full, alert 
        window.alert("List is full, remove some elements to add new ones");
    }
    else{
        //Add red
        gameList[index] = "red";
        index++;
    }
}