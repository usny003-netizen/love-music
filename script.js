document.addEventListener("DOMContentLoaded", () => {
const correctPIN = "0802";
const pinBox = document.getElementById("pinBox");
const pinInput = document.getElementById("pinInput");
const pinBtn = document.getElementById("pinBtn");
const pinError = document.getElementById("pinError");
const mainContent = document.getElementById("mainContent");
const envelope = document.getElementById("envelope");
const message = document.getElementById("message");
const music = document.getElementById("loveSong");
const typingText = document.getElementById("typingText");
if(mainContent){
    mainContent.style.display="none";
}
// ==========================
// PIN
// ==========================
function unlock(){
    if(pinInput.value===correctPIN){
        pinBox.style.display="none";
        mainContent.style.display="block";
    }else{
        pinError.innerHTML="❌ PIN ไม่ถูกต้อง";
        pinInput.value="";
    }
}
pinBtn.onclick=unlock;
pinInput.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        unlock();
    }
});
// ==========================
// เปิดซอง
// ==========================
let opened=false;
envelope.onclick=()=>{
    if(opened) return;
    opened=true;
    envelope.innerHTML="💖";
    envelope.style.transform="scale(1.2)";
    message.style.display="block";
    if(music){
        music.volume=0.7;
        music.play();
    }
    typeMessage();
};
// ==========================
// พิมพ์ข้อความ
// ==========================
const text=`สุขสันต์วันครบรอบนะ 💕
ขอบคุณที่อยู่ด้วยกันเสมอ
ตั้งแต่วันที่
8 กุมภาพันธ์ 2019
ทุกช่วงเวลาที่มีเธอ
คือความทรงจำที่ดีที่สุด
รักเธอมากที่สุด ❤️`;
function typeMessage(){
    typingText.innerHTML="";
    let i=0;
    let timer=setInterval(()=>{
        typingText.innerHTML+=text.charAt(i);
        i++;
        if(i>=text.length){
            clearInterval(timer);
        }
    },80);
}// ==========================
// นับวันรัก
// ==========================
function updateCounter(){
    const counter =
    document.getElementById("counter");
    if(!counter) return;
    const start =
    new Date("2019-02-08T00:00:00");
    const today =
    new Date();
    const diff =
    today - start;
    const totalDays =
    Math.floor(diff / 86400000);
    const years =
    Math.floor(totalDays / 365);
    const months =
    Math.floor((totalDays % 365) / 30);
    const days =
    (totalDays % 365) % 30;
    counter.innerHTML =
    `
    ❤️ อยู่ด้วยกันมาแล้ว ❤️
    <br><br>
    ${years} ปี
    ${months} เดือน
    ${days} วัน
    <br><br>
    รวมทั้งหมด
    ${totalDays}
    วัน 💕
    `;
}
updateCounter();
// ==========================
// Gallery Slide
// ==========================
const gallery =
document.querySelector(".gallery");
if(gallery){
    const photos =
    gallery.querySelectorAll("img");
    let current=0;
    setInterval(()=>{
        current++;
        if(current>=photos.length){
            current=0;
        }
        gallery.scrollTo({
            left:
            photos[current].offsetLeft,
            behavior:"smooth"
        });
    },3000);
}// ==========================
// หัวใจลอย
// ==========================
function createHeart(){
    const heart =
    document.createElement("div");
    heart.className="heart";
    heart.innerHTML="💗";
    heart.style.left=
    Math.random()*100+"vw";
    document.body.appendChild(heart);
    setTimeout(()=>{
        heart.remove();
    },6000);
}
setInterval(createHeart,500);
// ==========================
// กลีบดอกไม้
// ==========================
function createPetal(){
    const petal=
    document.createElement("div");
    petal.className="petal";
    petal.innerHTML="🌸";
    petal.style.left=
    Math.random()*100+"vw";
    document.body.appendChild(petal);
    setTimeout(()=>{
        petal.remove();
    },8000);
}
setInterval(createPetal,800);
// ==========================
// ดาว
// ==========================
function createStar(){
    const star=
    document.createElement("div");
    star.className="star";
    star.innerHTML="✨";
    star.style.left=
    Math.random()*100+"vw";
    star.style.top=
    Math.random()*100+"vh";
    document.body.appendChild(star);
    setTimeout(()=>{
        star.remove();
    },3000);
}
setInterval(createStar,300);
// ==========================
// หน้าจบเมื่อเพลงจบ
// ==========================
const ending =
document.getElementById("ending");
if(music && ending){
    music.addEventListener("ended",()=>{
        ending.style.display="flex";
    });
}
// ==========================
// ปุ่มดูอีกครั้ง
// ==========================
const restartBtn =
document.getElementById("restartBtn");
if(restartBtn){
    restartBtn.onclick=()=>{
        location.reload();
    };
}
// ==========================
// จบไฟล์
// ==========================
});
