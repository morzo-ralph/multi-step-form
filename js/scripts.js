'use strict';

const app = (() => {

    let nextButton, goBack1;
    const init = () => {
        nextButton = document.querySelector('#next-step');
        goBack1 = document.querySelector('#go-back-1');
        applyListeners();
    }
    
    const applyListeners = () => {
        nextButton.addEventListener('click', () => {
            document.querySelector('.step-1').style.display = "none";
            document.querySelector('.step-2').style.display = "block";
            document.querySelectorAll('.circle')[0].classList.remove("circle-active");
            document.querySelectorAll('.circle')[1].classList.add("circle-active");
        });

        goBack1.addEventListener('click', () => {
            document.querySelector('.step-1').style.display = "block";
            document.querySelector('.step-2').style.display = "none";
            document.querySelectorAll('.circle')[1].classList.remove("circle-active");
            document.querySelectorAll('.circle')[0].classList.add("circle-active");
        });
    }

    init();
})();