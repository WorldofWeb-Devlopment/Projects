const inputbox = document.getElementById("input-box")

function displayvalues(input){
   
      inputbox.value+=input
}

function calculate(){
    try {
       inputbox.value = eval(inputbox.value) 
    } catch (error) {
        inputbox.value = "Syntax Error"
    }
}
function clearDisplay(){
inputbox.value =" ";
}

//for keyboard enter click
addEventListener("keydown",(e)=>{
    if(e.key =="Enter"){
      inputbox.value = eval(inputbox.value) 
    }
})