console.log('%cDEFER ATTRIBUTE EXECUTING',"color:#ef4444; font-size: 13px; font-weight:bold")
 
 
window.addEventListener('DOMContentLoaded', ()=>{
    
    console.log("%c dom content load event fired", "color:#64748b; font-weight:600")
})


window.addEventListener('load', ()=>{
    console.log("%c load event fires", "color:#64748b; font-weight:600")
})
document.body.style.backgroundColor = 'orange';