let slideIndex = 1;

const slideshow = document.getElementsByClassName("mySlides");
const correct_button = document.getElementById("correct");
const wrong_button = document.getElementById("wrong");
const restart_button = document.getElementById("restart");

let slidelength = slideshow.length;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// increasing progress bar
let progress = 0;
const filler = document.getElementById("filler");

filler.style.width = (progress * 100) + "%"
function increaseprogress() {
    if (progress < 1) {
        progress += 1 / slidelength;
        var percentageincrease = (progress * 100) + "%";
        filler.style.width = percentageincrease;
    }
}
// change slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        correct_button.style.display = "none";
        wrong_button.style.display = "none";
        restart_button.style.display = "block";
        correct_amount.style.display = "block";
        slide_show_container.style.display = "none";
        return
    }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function restart() {
    location.reload();
}


const correct_amount = document.getElementById("percentCorrect");
var incorrect = 0
var incorrect_questions = []
var percent_correct = 100;

function percentRight() {
    percent_correct -= 100 / slideshow.length;
    incorrect += 1
    incorrect_questions += slideIndex
    if (incorrect == slidelength) {
        percent_correct = 0
    }
    percent_correct = percent_correct.toFixed(2)
    correct_amount.textContent = percent_correct + "% correct!";
}