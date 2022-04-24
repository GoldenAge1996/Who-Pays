// const tagsEl = document.querySelector(".tags")
// const textarea = document.getElementById("textarea")

// const button = document.querySelector(".btn")


// textarea.addEventListener("keyup", (e)=>{
//     createTags(e.target.value)

// /* if(e.key == "Enter"){
//   setTimeout(()=>{
// e.target.value = ""
//   },10)


//     randomSelect()
// } */


// })


// button.addEventListener("click", ()=>{
//     setTimeout(()=>{
//         e.target.value = ""
//           },10)
        
        
//             randomSelect()
// })



// function createTags(input){
//     const tags = input.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim())
   

//    tagsEl.innerHTML = ""

//    tags.forEach(tag => {
//     const tagEl = document.createElement("span")
//     tagEl.classList.add("tag")
//     tagEl.innerHTML = tag
//     tagsEl.appendChild(tagEl)
//    });

  
// }

// function randomSelect(){
//   const times = 30

//   const interval = setInterval(()=>{
//        const randonTag = getRandomTag()
//          highlight(randonTag)

//         setTimeout(()=>{
//              unHighlight(randonTag)
//         }, 100)
//        },100);

//    setInterval(()=>{
//        clearInterval(interval)
//       const randonTag = getRandomTag()
//         highlight(randonTag)
//                }, times *100)

// }

// function getRandomTag(){
//     const tags = document.querySelectorAll(".tag")
//     return tags[Math.floor(Math.random() * tags.length)]
// }

// function highlight(tag){
//     tag.classList.add("highlight")
// }

// function unHighlight(tag){
//     tag.classList.remove("highlight")
// }




//Auto-Text

const textEl = document.getElementById("text");


const text = "You don't need to argue or fight over who gets to pay the bill, Let chance decide that for you!"

let idx = 1;
let speed = 140;

writeText();

function writeText(){
textEl.innerText = text.slice(0, idx);
idx++;

if(idx > text.length){
    idx = 1;
}


setTimeout( writeText, speed);

}









//testing



const tagsEl = document.querySelector(".tags")
const textarea = document.getElementById("textarea")

const button = document.querySelector(".btn")

const sec = document.querySelector(".sec")
const openi = document.querySelector(".openi")



textarea.addEventListener("keyup", (e)=>{
    createTags(e.target.value)

/* if(e.key == "Enter"){
  setTimeout(()=>{
e.target.value = ""
  },10)


    randomSelect()
} */


})


button.addEventListener("click", ()=>{
    const times = 30
   textarea.value =""
        
        
            randomSelect()

            const randonTag = getRandomTag()
          const value=  randonTag.innerText

          setTimeout(()=>{
             setTimeout(()=>{
           sec.classList.add("show")
           openi.innerHTML = `
           <h2> Awnnn ${value},  you get to pay the bills today. Maybe next time you won't get to pay.</h2>
    
           <button onclick = "location.reload()">Try Again!</button>
           `
             },100)
          }, times*100)

          
})



function createTags(input){
    const tags = input.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim())
   

   tagsEl.innerHTML = ""

   tags.forEach(tag => {
    const tagEl = document.createElement("span")
    tagEl.classList.add("tag")
    tagEl.innerHTML = tag
    tagsEl.appendChild(tagEl)
   });

  
}

function randomSelect(){
  const times = 30

  const interval = setInterval(()=>{
       const randonTag = getRandomTag()
         highlight(randonTag)

        setTimeout(()=>{
             unHighlight(randonTag)
        }, 100)
       },100);

   setTimeout(()=>{
       clearInterval(interval)
       setTimeout(()=>{
        const randonTag = getRandomTag()
        console.log(randonTag.innerText)
        highlight(randonTag)
       },100)
     
               }, times *100)

}

function getRandomTag(){
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlight(tag){
    tag.classList.add("highlight")
}

function unHighlight(tag){
    tag.classList.remove("highlight")
}