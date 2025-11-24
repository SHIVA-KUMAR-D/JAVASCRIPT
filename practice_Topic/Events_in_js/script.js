let container = document.querySelector(".container");
let box = document.querySelector(".box");
let button = document.querySelector("button");

button.addEventListener("click",()=>{
    box.innerHTML = "<b>the button is clickerd</b> yahhh!";
    alert("button is clicked");
})

button.addEventListener("contextmenu",()=>{
    box.innerHTML = "<b>Dont right click please !</b> yahhh!";
    alert("Right click is clicked");
})

document.addEventListener("keydown",(e)=>{
    box.innerHTML = `<b>key is pressed ${e.key}</b>`;
    alert(`key is pressed ${e.key}`);   
})
// Events are 1.click 2.dblclick 3.mouseover 4.mouseout 5.mousemove 6.keydown 7.keyup 8.keypress 9.change 10.submit 11.focus 12.blur
// 13.resize 14.scroll 15.load 16.unload 17.error 18.contextmenu 19.drag 20.drop    