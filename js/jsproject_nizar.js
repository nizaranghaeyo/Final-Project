//SCRIPT WELCOME
let i = 0;
let gambar = [];
let waktu = 3000;

gambar[0] = 'gambar/Slide 1.jpg';
gambar[1] = 'gambar/Slide 2.jpg';
gambar[2] = 'gambar/Slide 3.jpg';
gambar[3] = 'gambar/Slide 4.jpg';
gambar[4] = 'gambar/Slide 5.jpg';

function changeImg() {
    document.slide.src = gambar[i];

    if (i < gambar.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", waktu);
};
window.onload = changeImg;

//SCRIPT SKILL
function mySkill() {
    const list_skill = ["Mengoperasikan Lathe <em>Machine</em>", "Mengoperasikan <em>Frais Machine</em>", 
    "Mengoperasikan <em>Microsoft Office</em>", "<em>Able to work team</em>"];
    const dt = document.getElementById("listSkill");
    
    for (let index = 0; index < list_skill.length; index++) {
        dt.innerHTML = dt.innerHTML + `<li>${list_skill[index]}</li>`;
    }
}

