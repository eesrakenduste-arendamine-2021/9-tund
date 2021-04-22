let genderSlider = document.querySelector("#gender");
let ageSlider = document.querySelector("#age");
let selectedGender = document.querySelector("#selectedGender");
let selectedAge = document.querySelector("#selectedAge");
let result = document.querySelector("#result");
let style = document.querySelector('[data="test"]');
let github = document.querySelector("#github");
let task = document.querySelector("#task");
let taskList = document.querySelector("#taskList");
let difficulties = document.querySelector("#difficulties");
let pensionCalc = document.querySelector("#pensionCalc");
let next1 = document.querySelector("#next1");
let next2 = document.querySelector("#next2");
let next3 = document.querySelector("#next3");

let maleLimit = 65;
let femaleLimit = 63;

genderSlider.value = 1;
ageSlider.value = 25;

alterGender();
selectedAge.innerHTML = ageSlider.value;

taskList.style.display = "none";
difficulties.style.display = "none";
pensionCalc.style.display = "none";

alterResult();

genderSlider.oninput = function() {
    alterGender();
    alterResult();
}

ageSlider.oninput = function() {
    selectedAge.innerHTML = ageSlider.value;
    alterResult();
}

github.addEventListener("click", function() {
    window.open("https://github.com/Tyks23/9-tund", "_blank");
});

next1.addEventListener("click", function() {
    task.style.display = "none";
    taskList.style.display = "block";
    github.style.marginTop = "34.8vh";
});

next2.addEventListener("click", function() {
    taskList.style.display = "none";
    difficulties.style.display = "block";
    github.style.marginTop = "36.7vh";
});

next3.addEventListener("click", function() {
    difficulties.style.display = "none";
    pensionCalc.style.display = "block";
    github.style.marginTop = "22vh";
});

function alterGender() {
    if(genderSlider.value == 1) {
        selectedGender.innerHTML = "Mees";
        style.innerHTML = "#gender::-webkit-slider-thumb { background: #0644c9; }";
        selectedGender.style.color = "#0644c9";
    } else {
        selectedGender.innerHTML = "Naine";
        style.innerHTML = "#gender::-webkit-slider-thumb { background: #ac5a79; }";
        selectedGender.style.color = "#ac5a79";
    }
}

function alterResult() {
    if(genderSlider.value == 1) {
        if(ageSlider.value <= (maleLimit - 2)) {
            result.innerHTML = "Pensionini on jäänud " + (maleLimit - ageSlider.value) + " aastat.";
        } else if(ageSlider.value == (maleLimit - 1)) {
            result.innerHTML = "Pensionini on jäänud 1 aasta."
        } else if(ageSlider.value >= maleLimit) {
            result.innerHTML = "Peaksid juba pensionil olema."
        }
    } else {
        if(ageSlider.value <= (femaleLimit - 2)) {
            result.innerHTML = "Pensionini on jäänud " + (femaleLimit - ageSlider.value) + " aastat.";
        } else if(ageSlider.value == (femaleLimit - 1)) {
            result.innerHTML = "Pensionini on jäänud 1 aasta."
        } else if(ageSlider.value >= femaleLimit) {
            result.innerHTML = "Peaksid juba pensionil olema."
        }
    }
}