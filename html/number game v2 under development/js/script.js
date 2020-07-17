// Canvas Code 

// var canvas = document.querySelector('canvas');
// var ctx = canvas.getContext('2d');
// function animation(){
//     requestAnimationFrame(animation);
//     canvas.width=window.innerWidth;
// canvas.height=window.innerHeight;
// for (let index = 0; index < circleArray.length; index++) {
//     circleArray[index].update();
    
// }
// }
  

// function circle(x,y,radius){
//     this.x=x;
//     this.y=y;
//     this.radius=radius;
//     this.draw=function(){
//         ctx.beginPath()
    
//         ctx.arc(x,y,radius,0,Math.PI*2,false);
        
//         ctx.strokeStyle="white"
//         ctx.fillStyle="white";
//         ctx.shadowColor="white"
//         ctx
//         ctx.shadowBlur="40"
//         ctx.stroke();
//         ctx.fill();
//     }
//     this.update=function(){
//         if(this.radius>radius){
//             this.radius-=1
//         }
//         if(this.radius<radius){
//             this.radius+=1
//         }
//         this.radius+=1
//         this.draw();
//     }

// }

// var circleArray=[]




// for (let i= 0; i<8; i++) {
//         x=Math.random()*window.innerWidth;
//         y=Math.random()*window.innerHeight;
//         radius=(Math.random()*35)+15
//         circleArray.push(new circle(x,y,radius));
// }
// animation();












randomNumber=Math.floor(Math.random()*20);


let n=1
function Myvalidation(){
if (n<=5){
const myvalue=document.getElementById('inputnumber').value


if (myvalue<randomNumber){
    const myNewPara=document.createElement('li');
    myNewPara.textContent=`${myvalue} is less than that number  `
    document.querySelector('.list').appendChild(myNewPara);
}else if (myvalue>randomNumber){

    const myNewPara=document.createElement('li');
    myNewPara.textContent=`${myvalue} is greater than that number  `;
    document.querySelector('.list').appendChild(myNewPara)

}else{
    
    const myNewPara=document.createElement('li')
    myNewPara.textContent=`${myvalue} is than number  `
    document.querySelector('.list').appendChild(myNewPara)
    alert('You got that number')
}
myvalue.value = myvalue.defaultValue;
n+=1
}
else{
    alert("Only 5 chances are allowed")
}

}