var container;
function init(){
    loopSingleDiv()
}
function loopSingleDiv(){
    container = document.createElement("div")
    container.classList.add("container-fluid", "bg-light", "height", "row", "text-danger")

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


function showPictures(index){
    var picture = document.querySelectorAll("img");
    picture[index-1].classList.remove("show")
    picture[index-1].classList.add("show")

}

/* 
function slideShow(){
    var divSlideShow = document.createElement("div");
    document.body.appendChild(divSlideShow)
    console.log(slideShow)
    setInterval(function(){
        var picture = document.querySelectorAll("img");
        picture.classList.add()

    }, 3000)

}
slideShow() */