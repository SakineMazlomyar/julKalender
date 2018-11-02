var container;
function init(){
    loopSingleDiv()
    slideShow()
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


function slideShow(){
    //create div for picture
    var divSlideShow = document.createElement("div");
    divSlideShow.classList.add("slideShowDiv")

    //get pictures add class
   
    var pictures = document.querySelectorAll("img.slide");
    var index = 0;
    // we append all pictures to div and then body
    for(var i = 0; i<pictures.length; i++){
        var allPictures = pictures[i];
        divSlideShow.appendChild(allPictures);
        
    }
    
    setInterval(function(){
        // we remove the first picture
        pictures[index].classList.remove("display")
        index ++
        if(index >= 3){
            index =  0;

        }   
        pictures[index].classList.add("display")

    }, 3000)

    document.body.appendChild(divSlideShow)

}
