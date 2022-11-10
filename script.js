var gameList = new Array(4);
var solution = Array("green", "yellow", "yellow", "blue");
// yellow yellow yellow yellow 
var index = 0;
var tries = 0;

function check(){
    if(index < 4){
        //Not enough elements on the list to compare
        window.alert("Not enough elements on the list to compare");
    }
    else{
        tries++;
        var correctColors = 0; //Counter for correct colors
        var correctPosition = 0; //Counter for correct colors and correct position
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
        var found = false;
        for(i = 0; i<4; i++){ //Then we check only if the colors are correct(for example if there's some green then it has to count as a correct color but not a correct positon)
            if(visited[i] == false){ // If on the other for it wasn't the correct color and positon then we check if it's a correct color.
                j = 0;
                while(!found && j < 4){
                    if(gameList[i] == solution[j] && !visited[j]){ //We check if there's the same color and it hasn't been counted/added yet.
                        found = true;
                        correctColors++; //If there's the same color in some element in the solution we add one to the correctColors counter.
                    }
                    j++;
                }
                found = false;
            }
        }
        updateTable(correctColors, correctPosition);
        
        //Restore elements from the list
        index = 0; 

        var input = document.getElementById("input");
        input.innerHTML = "";
        if(tries == 10){
            finishGame();
        }
    }
}

function updateTable(correctColors, correctPosition){
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var color1 = row.insertCell(0);
    var color2 = row.insertCell(1);
    var color3 = row.insertCell(2);
    var color4 = row.insertCell(3);
    var space = row.insertCell(4);
    var correctColorPos = row.insertCell(5);
    var greenCheck = row.insertCell(6);
    var correctColor = row.insertCell(7);
    var orangeCheck = row.insertCell(8);
    /*var color1HTML = "<div class='" + gameList[0] + "Circle'> </div>";
    const child = document.createElement("div");
    child.className = gameList[0] + "Circle";
    color1.appendChild(child);
    color1.innerHTML(color1HTML);*/

    //Color1
    var colorClass = gameList[0] + "Circle";
    child = document.createElement("div"); // We create a child. 
    child.setAttribute("id", "color" + index);
    child.className = colorClass; // We assign a classname
    color1.appendChild(child); // We insert this child to the "table"

    //Color2
    colorClass = gameList[1] + "Circle";
    child = document.createElement("div"); // We create a child. 
    child.setAttribute("id", "color" + index);
    child.className = colorClass; // We assign a classname
    color2.appendChild(child); // We insert this child to the "table"

    //Color3
    colorClass = gameList[2] + "Circle";
    child = document.createElement("div"); // We create a child. 
    child.setAttribute("id", "color" + index);
    child.className = colorClass; // We assign a classname
    color3.appendChild(child); // We insert this child to the "table"

    //Color4
    colorClass = gameList[3] + "Circle";
    child = document.createElement("div"); // We create a child. 
    child.setAttribute("id", "color" + index);
    child.className = colorClass; // We assign a classname
    color4.appendChild(child); // We insert this child to the "table"

    //space it's an empty cell

    //correctColorPos
    correctColorPos.innerHTML = "<div>" + correctPosition + "</div>";

    //greenCheck
    greenCheck.innerHTML = "<img class='checkIcon' src='greenCheck.png'></img>";
    //correctColor
    correctColor.innerHTML = "<div>" + correctColors + "</div>";

    //OrangeCheck
    orangeCheck.innerHTML = "<img class='checkIcon' src='orangeCheck.png'></img>";
}

function finishGame(){

}

function resetGame(){
    
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