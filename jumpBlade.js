var tiger =document.getElementById("tiger");
var block =document.getElementById("block");
function jump(){
    if(tiger.classList != "aminate"){
        tiger.classList.add("aminate");
    }
    setTimeout(function(){
        tiger.classList.remove("aminate");

    },500)
}
var CheckDead = setInterval(function(){
    // function tigertop(){ parseInt(window.getComputedStyle(tiger)
    // .getPropertyValue("top"));}
    // function blockleft(){ parseInt(window.getComputedStyle(block)
    // .getPropertyValue("left"));}
    if(block<20 && block>0 && 
        tiger>=130){
            block.style.animation= "none";
            block.style.display= "none";
            alert("u lose.")
        }
},10)