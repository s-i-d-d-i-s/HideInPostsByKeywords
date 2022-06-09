function removeIt(){
    console.log("Removing");
    var textToRemove = "Training and Placement";
    var eles = document.getElementsByClassName('occludable-update');
    for(let i=0;i<eles.length;i++){
        var html = (eles[i].innerHTML);
        if(html.indexOf(textToRemove) != -1){
            eles[i].style = "display: none;"
        }
    }
}

setInterval(removeIt, 2000);