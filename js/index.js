let rating_CON_VSL = 65;
let rating_CON_VSR = 97;

let PI = 3.14159265359;

const circle_vsl = document.querySelector('.blue-rating');
const circle_vsr = document.querySelector('.blue-rating-vsr');
const track = document.querySelector('.rating-track');
const track_vsr = document.querySelector('.rating-track-vsr');
const radius = circle_vsl.r.baseVal.value;
const circumference = radius * 2 * PI;

// set vs-left-contact text
let vslContactText = document.querySelector('.vs-left-contact');
let vsrContactText = document.querySelector('.vs-right-contact');
vslContactText.innerHTML = rating_CON_VSL;
vsrContactText.innerHTML = rating_CON_VSR;

circle_vsl.style.strokeDasharray =  `${circumference} ${circumference}`;
circle_vsl.style.strokeDashoffset = circumference;

circle_vsr.style.strokeDasharray =  `${circumference} ${circumference}`;
circle_vsr.style.strokeDashoffset = circumference;

track.style.strokeDasharray =  `${circumference} ${circumference}`;
track.style.strokeDashoffset =  circumference;

function setProgress(percent) {
    circle_vsl.style.transition = 'stroke-dashoffset .5s ease-out';
    circle_vsl.setAttribute('stroke',"#0FA4F8"); //#0FA4F8");
    let offset = circumference - (rating_CON_VSL * 8) / 1000 * circumference;
    circle_vsl.style.strokeDashoffset = offset;

    circle_vsr.style.transition = 'stroke-dashoffset .5s .2s ease-out';
    circle_vsr.setAttribute('stroke',"#0FA4F8"); //url(#linear)
    offset = circumference - (rating_CON_VSR * 8) / 1000 * circumference;
    circle_vsr.style.strokeDashoffset = offset;
}

setTimeout(setProgress);