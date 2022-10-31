const file = new File([""], 'darthvader.png');
Object.defineProperty(file, 'size', { value: 10024 * 100024 + 1 })
console.log( file.size ); // 1048577

window.addEventListener('DOMContentLoaded', ()=>{
    
    console.log("BODY CLOSE TAG SCRIPT--------DOM CONTENT LOADED EVENT")
})


window.addEventListener('load', ()=>{
    console.log("BODY CLOSE TAG SCRIPT ASYNC SCRIPT--------LOAD EVENT")
})


document.body.style.backgroundColor = 'black'