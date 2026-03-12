//adding all elements



const addoverlaybtn = document.querySelector(".add-overlay-btn")

const addpopup = document.querySelector(".add-pop-up")

const mainpopup = document.querySelector(".main-pop-up")
 const container = document.querySelector(".container")

 const main = document.querySelector(".main")

addpopup.addEventListener("click",()=>{
    addoverlaybtn.classList.remove("hidden")
    mainpopup.classList.remove("hidden")
})

const addbtn = document.getElementById("add")
const canclebtn = document.getElementById("cancel")

addbtn.addEventListener("click",(e)=>{
    e.preventDefault()
     mainpopup.classList.add("hidden")
    addoverlaybtn.classList.add("hidden")
})

canclebtn.addEventListener("click",(e)=>{
    e.preventDefault();
    mainpopup.classList.add("hidden")
    addoverlaybtn.classList.add("hidden")
})
const editbtn = document.querySelector(".edit")
editbtn.addEventListener("click",(e)=>{
    e.preventDefault();
})


const authortitle = document.getElementById("author-title")

const authorname = document.getElementById("author-name")

const description = document.getElementById("description")



addbtn.addEventListener("click",()=>{
    var div = document.createElement("div")
    div.setAttribute("class","container bg-emerald-800 w-75 m-2 p-5 rounded-md")
    div.innerHTML = `<h1 class="font-bold text-white text-2xl">${authortitle.value}</h1> 
                    <h2 class="font-semibold text-white mt-3">${authorname.value}</h2>
                    <p class="text-white mt-2">${description.value}</p>
                     <button class="edit bg-green-200 font-semibold mt-3 p-2 rounded-xl hover:cursor-pointer">Edit</button>
                    <button class="remove bg-green-200 font-semibold p-2 mt-3 rounded-xl hover:cursor-pointer">Delete</button>`
    main.append(div)

    //input clear
     authortitle.value = ""
    authorname.value = ""
    description.value = ""
                    
})

const removebtn = document.querySelector(".remove")

// removebtn.addEventListener("click",(event)=>{
//    event.target.closest(".container").remove()
   
// })

main.addEventListener("click",(event)=>{
    if(event.target.classList.contains("remove")){
        event.target.closest(".container").remove()
    }
})

// const editbtn = document.querySelector(".edit")

//  editbtn.addEventListener("click",(event)=>{
// event.preventDefault();
// })
