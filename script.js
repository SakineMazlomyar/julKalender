var container;
function init(){
    loopSingleDiv()
}
function loopSingleDiv(){
    container = document.createElement("div")
    container.classList.add("container-fluid", "bg-light", "height", "row")
 

    for (var i = 1; i <= 24; i++){

        createDiv(i)
    }
    document.body.appendChild(container)

}


function createDiv(i){
    var column = document.createElement("div")
    column.classList.add("col-sm-4", "text-black");

    column.innerText = "click here to se date";
    container.appendChild(column, i)
    column.onclick = function(){onclickDiv(column, i)}
    
    return column


};
function onclickDiv(column, i){ 
    var sakine = true
    var date = new Date()
    var day = date.getDate()
    if(i === day){
        alert("Det är dagens datum")
        column.classList.add("text-primary")
    }else if(i <= day){
        alert("Detta datum har inträffat eller är nu")
    }else if(i > day){
        alert("Detta datum har inte kommit än")
        //pictureTwo.classList.add("showTwo")

    }else{
        alert("inget")
    }
    var picture = document.querySelectorAll("img.pictures");
    var pictureIndex
    for(var s = 0; s<=24; s++){
        pictureIndex = picture[s]
        if(sakine){
            pictureIndex.classList.add("show")
        }
    }
   
  

}



