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
    var picture = document.querySelector("img.picture");
    //var pictureTwo = document.querySelector("img.pictureTwo");
    var date = new Date()
    var day = date.getDate()
    if(i === day){
        alert("Det är dagens datum")
        column.classList.add("text-primary")
        picture.classList.add("show")
    }else if(i <= day){
        alert("Detta datum har inträffat eller är nu")
    }else if(i > day){
        alert("Detta datum har inte kommit än")
        //pictureTwo.classList.add("showTwo")

    }else{
        alert("inget")
    }
  

}

function displayRandomPicture(){
    
}

