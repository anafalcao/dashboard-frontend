function darkmode() {
    var element = document.body
    console.log(element)
    element.classList.toggle("dark-mode");
    biggerHeader();
    boxes();
    grey();
    console.log(element.classList);
  }


function biggerHeader(){
    var element = document.getElementById("biggerHeader");
    let color = element.style.background;
if(color == 'rgb(32, 34, 47)'){
    element.style.background = '#F8F9FE' ;
}else{
   element.style.background = '#20222F' ;} 
}

function boxes(){
    for(let i = 0; i<12; i++){
        var name = "bigSquare"+[i]
        var element = document.getElementById(name);
    let color = element.style.background;
    if(color == 'rgb(37, 43, 67)'){
        element.style.background = '#F8F9FE' ;
        element.style.color = 'black'
    }else{
    element.style.background = '#252B43' 
    element.style.color = 'white'
    ;}

}}
function grey(){
    var element = document.getElementById("title");
    let color = element.style.color;
    if(color == 'white'){
        element.style.color = '#646673' ;
    }else{
    element.style.color = 'white' ;} 
}