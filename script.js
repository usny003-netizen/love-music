// ===============================
// ตั้งค่า
// ===============================

const PASSWORD = "22062542"; 
// เปลี่ยน PIN ตรงนี้


const LOVE_DATE = new Date("2024-06-22T00:00:00");
// เปลี่ยนวันที่เริ่มคบตรงนี้



// ===============================
// เปิดด้วย PIN
// ===============================

function checkPin(){

    const pin =
    document.getElementById("pin").value;


    if(pin === PASSWORD){

        document.getElementById("login")
        .style.display = "none";


        document.getElementById("gift")
        .style.display = "flex";


    }else{

        document.getElementById("error")
        .innerHTML =
        "รหัสผิด ลองใหม่อีกครั้งนะ 💔";

    }

}




// ===============================
// กดค้างเปิดกล่องของขวัญ
// ===============================

let holdTimer;


function holdStart(){


    holdTimer = setTimeout(()=>{


        document.getElementById("gift")
        .style.display="none";


        document.getElementById("story")
        .style.display="block";



        // เล่นเพลง

        let music =
        document.getElementById("music");


        music.play();



        // เริ่มนับเวลา

        startCounter();



    },1500);


}



function holdEnd(){

    clearTimeout(holdTimer);

}





// ===============================
// กดหัวใจ
// ===============================

function heart(){


    const item =
    document.createElement("div");


    item.className="fly";


    item.innerHTML="❤️";


    item.style.left =
    Math.random()*80 + "%";


    item.style.top="50%";


    document.body.appendChild(item);



    setTimeout(()=>{

        item.remove();

    },1000);



}





// ===============================
// ตัวนับเวลาความรัก
// ===============================

function startCounter(){


    function update(){


        let now = new Date();


        let time =
        now - LOVE_DATE;



        let days =
        Math.floor(
        time /
        (1000*60*60*24)
        );



        let hours =
        Math.floor(
        (time /
        (1000*60*60))
        %24
        );



        let minutes =
        Math.floor(
        (time /
        (1000*60))
        %60
        );



        let seconds =
        Math.floor(
        (time/1000)
        %60
        );



        document.getElementById("time")
        .innerHTML =

        `
        ${days} วัน
        <br>
        ${hours} ชั่วโมง
        ${minutes} นาที
        ${seconds} วินาที
        `;


    }



    update();


    setInterval(update,1000);


}





// ===============================
// ปุ่มตกลง
// ===============================

function yes(){


    alert(
    "เย้ ❤️ ขอบคุณที่อยู่กับเรา"
    );


}
