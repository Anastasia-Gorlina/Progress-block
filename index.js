const circularProgress = document.querySelector(".progress");
const progressVal = document.querySelector(".progress-value");
const speed = 20;
let progressStartVal = 0;
let progress;

function changeStyle(element, property, value) {
    document.getElementsByClassName(element)[0].style[property] = value;
}

document.getElementById("value-number").addEventListener("input", function () {
    let inputValue = parseInt(this.value);
    if (isNaN(inputValue)) {
        inputValue = 0
    }
    if (inputValue > 100 || inputValue < 0) {
        console.error("Неправильное значение");
    } else {
        clearInterval(progress);
        progressStartVal = 0;

        progress = setInterval(() => {
            circularProgress.style.background = `conic-gradient(#2150fc ${progressStartVal * 3.6}deg, #ededed 0deg)`;
            if (progressStartVal == inputValue) {
                clearInterval(progress);
            }
            progressStartVal++;
        }, speed);
    }
});

window.onload = () => {
    document.getElementById("value-number").value = "";
    document.getElementById("animateCheck").checked = false;
    document.getElementById("hideCheck").checked = false;
};

const hideChecked = document.getElementById("hideCheck")
hideChecked.addEventListener("change", function () {
    if (this.checked) {
        changeStyle("progress", "visibility", "hidden");
    } else {
        changeStyle("progress", "visibility", "visible");
    }
});

const animateChecked = document.getElementById("animateCheck")
animateChecked.addEventListener("change", function () {
    if (this.checked) {
        changeStyle("progress", "animation", "rotate 2s linear infinite");
        progressVal.style.animation = "un-rotate 2s linear infinite";
    } else {
        changeStyle("progress", "animation", "none");
        progressVal.style.animation = "none";
    }
});