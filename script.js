// ===================
// ตั้งค่า
// ===================


const PASSWORD = "22062542";


const LOVE_DATE =
new Date("2024-06-22T00:00:00");




// PIN

document
.getElementById("openBtn")
.addEventListener("click",()=>{


let pin =
document.getElementById("pin").value;


if(pin === PASSWORD){


document.getElementById("login")
.style.display="none";


document.getElementById("gift")
.style.display="flex";


}

else{


document.getElementById("error")
.innerHTML =
"รหัสผิด 💔";


}


});






// ===================
// กดค้าง
// ===================


let timer;


const giftBox =
document.getElementById("giftBox");



function startHold(e){

e.preventDefault();


giftBox.innerHTML =
"❤️ กำลังเปิด...";


timer=setTimeout(()=>{


document.getElementById("gift")
.style.display="none";


document.getElementById("story")
.style.display="block";



let music =
document.getElementById("music");


music.play()
.catch(()=>{});



startCounter();



},2000);



}





function stopHold(){


clearTimeout(timer);


giftBox.innerHTML =
"🎁<br>กดค้าง ❤️";


}





giftBox.addEventListener(
"mousedown",
startHold
);


giftBox.addEventListener(
"mouseup",
stopHold
);



giftBox.addEventListener(
"mouseleave",
stopHold
);



giftBox.addEventListener(
"touchstart",
startHold
);



giftBox.addEventListener(
"touchend",
stopHold
);








// ===================
// หัวใจ
// ===================


document
.getElementById("heart")
.onclick=()=>{


let h =
document.createElement("div");


h.innerHTML="❤️";


h.style.position="absolute";

h.style.fontSize="50px";

h.style.left=
Math.random()*80+"%";


h.style.top="50%";


document.body.appendChild(h);



h.animate(

[
{
transform:"scale(0)"
},

{
transform:"scale(2)",
opacity:0
}

],

{
duration:1000
}

);



setTimeout(()=>{

h.remove();

},1000);


};







// ===================
// เวลา
// ===================


function startCounter(){


setInterval(()=>{


let now =
new Date();


let diff =
now - LOVE_DATE;


let day =
Math.floor(
diff/(1000*60*60*24)
);



let hour =
Math.floor(
(diff/(1000*60*60))%24
);



let min =
Math.floor(
(diff/(1000*60))%60
);



let sec =
Math.floor(
(diff/1000)%60
);



document
.getElementById("time")
.innerHTML=

`
${day} วัน
<br>
${hour} ชั่วโมง
${min} นาที
${sec} วินาที

`;



},1000);


}






document
.getElementById("yesBtn")
.onclick=()=>{


alert(
"เย้ ❤️ ขอบคุณที่เลือกเรา"
);


};
