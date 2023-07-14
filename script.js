const ColorN1 = document.querySelector("#ColorN°1")
const ColorN2 = document.querySelector("#ColorN°2")

const code = document.querySelector(".Code p")
const Code = document.querySelector(".direction")
const color1Code = document.querySelector(".color1Code")
const color2Code = document.querySelector(".color2Code")

const DirectionSelect = document.querySelector("#Direction")
const option = document.querySelectorAll("option")

const Refresh__Colors = document.querySelector("#Refresh__Colors")
const Copy__Code = document.querySelector("#Copy__Code")

const Gradient__Color = document.querySelector(".Gradient__Color")


DirectionSelect.addEventListener("change",()=>{
    Code.textContent = DirectionSelect.value.toLowerCase()
    Gradient__Color.style.cssText = `${code.textContent}`
})

ColorN1.addEventListener("input",()=>{
    color1Code.textContent = ColorN1.value
    Gradient__Color.style.cssText = `${code.textContent}`
})
ColorN2.addEventListener("input",()=>{
    color2Code.textContent = ColorN2.value
    Gradient__Color.style.cssText = `${code.textContent}`
})

Copy__Code.addEventListener("click",()=>{
    navigator.clipboard.writeText(code.textContent)
})

Refresh__Colors.addEventListener("click",()=>{
    color1Code.textContent = "#"+Math.floor(Math.random() * 0xffffff).toString(16)
    color2Code.textContent = "#"+Math.floor(Math.random() * 0xffffff).toString(16)
    ColorN1.value = color1Code.textContent
    ColorN2.value = color2Code.textContent
    Gradient__Color.style.cssText = `${code.textContent}`
})