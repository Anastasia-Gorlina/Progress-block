function toggleAnimation() {
    let animateChecked = document.getElementById("animateCheck")
    animateChecked.addEventListener("change", function () {
        let animationStyle = this.checked ? "rotate 2s linear infinite" : "none";
        document.getElementsByClassName("progress")[0].style.animation = animationStyle;
    });
}

function toggleVisibility() {
    let hideChecked = document.getElementById("hideCheck")
    hideChecked.addEventListener("change", function () {
        let visibilityStyle = this.checked ? "hidden" : "visible";
        document.getElementsByClassName("progress")[0].style.visibility = visibilityStyle;
    });
}

function setValue(newValue) {
    let circularProgress = document.querySelector(".progress");
    let progressVal = document.querySelector(".progress-value");
    let progressStartVal = 0;
    let speed = 30;
    let progress;
    if (isNaN(newValue)) {
        newValue = 0
    }
    if (newValue > 100 || newValue < 0) {
        alert("Неправильное значение");
    } else {
        clearInterval(progress);

        progressVal.textContent = `${newValue}%`;
        progressStartVal = 0;

        progress = setInterval(() => {

            circularProgress.style.background = `conic-gradient(blue ${progressStartVal * 3.6}deg, #ededed 0deg)`;
            if (progressStartVal == newValue) {
                clearInterval(progress);
            }
            progressStartVal++;
        }, speed);
    }
}

export {toggleAnimation, setValue, toggleVisibility}