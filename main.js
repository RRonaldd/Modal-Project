const button = document.querySelector("button")


const content= document.querySelector(".content")
const icon= document.querySelector(".icon")
const section = document.querySelector("section")
console.log(icon);
button.addEventListener("click", function(){
    content.style.display= "block"
    section.style.display= "block"
    // button.style.border= " 2px solid red"
});

icon.addEventListener("click", function(){
    content.style.display= "none"
    section.style.display= "none"
})
