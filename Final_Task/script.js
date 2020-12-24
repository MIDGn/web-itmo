function makeTable() {
    rows = document.getElementById("row").value;
    cols = document.getElementById("col").value;
    var body = document.querySelector("body"), table = document.createElement("table"), tr, td, input, button;
    caption = document.createElement("caption");
    table.appendChild(caption);
    id = document.createElement("id");
    table.appendChild(id);
    table.id = "MainTable";
    cellId = 1;
    for(var i = 0; i < rows; i++){
        tr = document.createElement("tr");
            for(var j = 0; j < cols; j++){
                td = document.createElement("td");
                td.id = cellId;
                cellId++;
                input = document.createElement("textarea");
                button = document.createElement("input");
                button.type = "button";
                button.addEventListener("click", saveTextArea); 
                button.value = "Сохранить";
                td.appendChild(input);
                td.appendChild(button);
                tr.appendChild(td); 
                }
            table.appendChild(tr);
    }
    body.appendChild(table);
    $("#form").attr("hidden", "");
    $("#list_of_functions").removeAttr("hidden");
}

function saveTextArea(){
    var parentCell = this.parentElement, string;    
    string = parentCell.children[0].value;
    parentCell.children[0].remove();
    parentCell.children[0].remove();
    data = document.createElement("span");
    data.innerHTML = string;
    parentCell.append(data);
}

function changeWidth(){
    borderWidth = document.getElementById("width").value;
    document.getElementById("dynamicButton").value = "Применить " + borderWidth + " px и рамка " + borderStyle;
}

function changeBorderStyle(){
    borderStyle = document.getElementById("border").value;
    document.getElementById("dynamicButton").value = "Применить " + borderWidth + " px и рамка " + borderStyle;
}

function editTable(){
    borderStyle = document.getElementById("border").value;
    borderWidth = document.getElementById("width").value;

    $('td').css({'border':borderStyle + ' ' + borderWidth + 'px'});
}

function addCaption(){
    caption.innerHTML = "<h2>" + document.getElementById("caption").value + "</h2>";
}

function deleteRow() {
    DelRow = document.getElementById("DelRow").value;
    let table = document.querySelector("table");
        if  (DelRow < 1){
            alert("Не введен номер строки");
        }
        else{
        if (DelRow > table.rows.length){
            alert("Такой строки не существует")
        }
        else{
            table.deleteRow(DelRow - 1);
        }
    }

}

function getRandomIntInc(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function magic() {
    var body = document.querySelector("body"),
        table = document.querySelector("table");
        
    randCellId = getRandomIntInc(1, (cols * rows));
    randCell = document.getElementById(randCellId);
    rand = getRandomIntInc(1, 2);

    if (rand == 1 && randCell.children[0].tagName=="SPAN"){
        randCell.children[0].remove();
        input = document.createElement("textarea");
        button = document.createElement("input");
        button.type = "button";
        button.addEventListener("click", saveTextArea); 
        button.value = "Сохранить"
        randCell.appendChild(input);
        randCell.appendChild(button);
        return;
    } 
    
    colorR = getRandomIntInc(1, 255);
    colorG = getRandomIntInc(1, 255);
    colorB = getRandomIntInc(1, 255);
    textHeight = getRandomIntInc(15, 25);
    colorBG = "rgb(" + colorR + ", " + colorG + ", " + colorB + ")";
    randCell.style.backgroundColor = colorBG;
    colorR = getRandomIntInc(1, 255);
    colorG = getRandomIntInc(1, 255);
    colorB = getRandomIntInc(1, 255);
    colorText = "rgb(" + colorR + ", " + colorG + ", " + colorB + ")";
    randCell.style.color = colorText;
    randCell.style.fontSize = textHeight + "pt";
}

function deleteTable() {
    var body = document.querySelector("body"),
        table = document.querySelector("table");
    
    document.body.removeChild(table);
    $("#list_of_functions").attr("hidden", "");
    $("#form").removeAttr("hidden");
}









