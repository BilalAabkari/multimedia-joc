var gameList = new Array(4);
var solution = Array("green", "yellow", "yellow", "blue");
// yellow yellow yellow green 
var correctColors; //Counter for correct colors
var correctPosition; //Counter for correct colors and correct position
var index = 0;
var tries = 0;

function check(){
    if(index < 4){
        //Not enough elements on the list to compare
        window.alert("Not enough elements on the list to compare");
    }
    else{
        tries++;
        //check and show results, restore elements from the list
        var i;
        var j;
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
            gameList[i] = ""; //We start to empty the list to optimize.
        }
        //Falta agafar element de la taula i afegir a la solució.
        Document.getElementById("correctColors") = correctColors;
        Document.getElementById("correctPosition") = correctPosition;
        index = 0; //Restore elements from the list
        if(tries == 10){
            finishGame();
        }
    }
}

function finishGame(){

}

function addColor(color){
    if(index == 4){
        //If list is full, alert 
        window.alert("List is full, remove some elements to add new ones");
    }
    else{
        var colorClass = color + "Circle";

        var input = document.getElementById("input"); // We assign the "table" (of the elements we add) a var
        const child = document.createElement("div"); // We create a child. 
        child.setAttribute("id", "color" + index);
        child.className = colorClass; // We assign a classname
        input.appendChild(child); // We insert this child to the "table"

        gameList[index] = color;
        index++;
    }
}

function removeColor(){
    if(index > 0){
        var element = document.getElementById("color" + (index-1));
        element.remove();
        gameList[index-1] = "";
        index--;
    }
    else{ //If there's not any element on the list then we pop an alert.
        window.alert("List is empty");
    }
}