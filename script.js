var container;
function init(){
    loopSingleDiv()
   // slideShow()
}
function loopSingleDiv(){
    container = document.createElement("div")
    container.classList.add("bg-light", "height", "row", "text-danger", "flex")
    for (var i = 1; i <= 24; i++){
        createDiv(i)
    }
    document.body.appendChild(container)
}


function createDiv(i){
    var column = document.createElement("div")
    column.classList.add("col-sm-2", "text-black");
    column.innerText =  i;
    container.appendChild(column, i);
    column.onclick = function(){onclickDiv(column, i)};
    return column


};
function onclickDiv(column, i){ 
    showPictures(i)
    var date = new Date()
    var day = date.getDate()
    // day is typeof number so it is why we have three equalies
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
   

}


function showPictures(i){
    var picture = document.querySelectorAll("img");
    picture[i-1].classList.remove("show")
    picture[i+1].classList.add("show")
    console.log(picture)

}

