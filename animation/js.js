const circleOne = document.querySelector(".circle")
function circle() {
    circleOne.style = 'fill:green;'
}
function circleOut() {
    circleOne.style = 'fill:#464655;'
}
function circleColor() {
    circleOne.style = 'fill:green;'
}
circleOne.addEventListener("mouseover", circle)
circleOne.addEventListener("mouseout", circleOut)
circleOne.addEventListener("click", circleColor)
// /////////////////////////////////////////////////////////////////
const circleTwo = document.querySelector(".circleTwo")
function circleTwoFun() {
    circleTwo.style = 'fill:green;'
}
function circleTwoOut() {
    circleTwo.style = 'fill:#464655;'
}
function circleColorTwo() {
    circleTwo.style = 'fill:green;'
}
circleTwo.addEventListener("mouseover", circleTwoFun)
circleTwo.addEventListener("mouseout", circleTwoOut)
circleTwo.addEventListener("click", circleColorTwo)
// /////////////////////////////////////////////////////////////////
const car = document.querySelector("#car")
car.addEventListener("click",function(){
    car.style = 'transform:translateX(250px); transition:3s;'
})

const crug = document.querySelector("#car") 
crug.addEventListener("dblclick", function(){
    crug.style = 'transform:translateX(0px); transition:3s;'
})

