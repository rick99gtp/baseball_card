let rating_CON_VSL = 40;
let rating_CON_VSR = 37;
let rating_POW_VSL = 97;
let rating_POW_VSR = 99;

let PI = 3.14159265359;

const con_vsl = document.querySelector('.rating-con-vsl');
const con_vsr = document.querySelector('.rating-con-vsr');
const track = document.querySelector('.rating-track-vsl');
const track_vsr = document.querySelector('.rating-track-vsr');
const track_pow_vsl = document.querySelector('.rating-track-pow-vsl');
const pow_vsl = document.querySelector('.rating-pow-vsl');
const track_pow_vsr = document.querySelector('.rating-track-pow-vsr');
const pow_vsr = document.querySelector('.rating-pow-vsr');

const radius = con_vsl.r.baseVal.value;
const circumference = radius * 2 * PI;

console.log(circumference);

// set vs-left-contact text
let vslContactText = document.querySelector('.vs-left-contact');
let vsrContactText = document.querySelector('.vs-right-contact');
vslContactText.innerHTML = "vs. Left";
vsrContactText.innerHTML = "vs. Right";

con_vsl.style.strokeDasharray =  `${circumference} ${circumference}`;
con_vsl.style.strokeDashoffset = circumference;

con_vsr.style.strokeDasharray =  `${circumference} ${circumference}`;
con_vsr.style.strokeDashoffset = circumference;

track.style.strokeDasharray =  `${circumference} ${circumference}`;
track.style.strokeDashoffset =  circumference - (.4 * circumference);

track_vsr.style.strokeDasharray = `${circumference} ${circumference}`;
track_vsr.style.strokeDashoffset = circumference - (.4 * circumference);

track_pow_vsl.style.strokeDasharray = `${circumference} ${circumference}`;
track_pow_vsl.style.strokeDashoffset = circumference - (.4 * circumference);

track_pow_vsr.style.strokeDasharray = `${circumference} ${circumference}`;
track_pow_vsr.style.strokeDashoffset = circumference - (.4 * circumference);

pow_vsl.style.strokeDasharray = `${circumference} ${circumference}`
pow_vsl.style.strokeDashoffset = circumference;

pow_vsr.style.strokeDasharray = `${circumference} ${circumference}`
pow_vsr.style.strokeDashoffset = circumference;

function setProgress(percent) {
    con_vsl.style.transition = 'stroke-dashoffset .5s ease-out';
    let offset = circumference - (rating_CON_VSL * 4) / 1000 * circumference;
    con_vsl.style.strokeDashoffset = offset;

    pow_vsl.style.transition = 'stroke-dashoffset .5s .25s ease-out';
    offset = circumference - (rating_POW_VSL * 4) / 1000 * circumference;
    pow_vsl.style.strokeDashoffset = offset;

    con_vsr.style.transition = 'stroke-dashoffset .5s .2s ease-out';
    offset = circumference - (rating_CON_VSR * 4) / 1000 * circumference;
    con_vsr.style.strokeDashoffset = offset;

    pow_vsr.style.transition = 'stroke-dashoffset .5s .25s ease-out';
    offset = circumference - (rating_POW_VSR * 4) / 1000 * circumference;
    pow_vsr.style.strokeDashoffset = offset;
}

setTimeout(setProgress);