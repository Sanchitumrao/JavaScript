// this will give a popup msg
alert("Js connected")
// ex1
document.getElementById("changetxtbtn").addEventListener('click',function(){
    // console.log(this)
    let para=document.getElementById("Para1")
    // console.log(para.textContent)
    para.textContent=`The  paragraph is changed`
})