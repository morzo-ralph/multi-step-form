'use strict';

const app = (() => {
    let isToggle = false;
    let nextButton, goBack1;
    let arcade, advanced, pro, toggle, month, year;
    const init = () => {
        nextButton = document.querySelector('#next-step');
        goBack1 = document.querySelector('#go-back-1');
        arcade = document.querySelector('#arcade');
        advanced = document.querySelector('#advanced');
        pro = document.querySelector('#pro');
        toggle = document.querySelector('#toggle-checkbox');
        month = document.querySelector('#month');
        year = document.querySelector('#year');
        month.style.color = 'var(--primary-marine-blue)';
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

        arcade.addEventListener('click', () => {
            arcade.style.border = "1px solid var( --primary-purplish-blue)";
            advanced.style.border = "1px solid var(--neutral-light-gray)";
            pro.style.border = "1px solid var(--neutral-light-gray)";
        });

        advanced.addEventListener('click', () => {
            arcade.style.border = "1px solid var(--neutral-light-gray)";
            advanced.style.border = "1px solid var( --primary-purplish-blue)";
            pro.style.border = "1px solid var(--neutral-light-gray)";
        });

        pro.addEventListener('click', () => {
            arcade.style.border = "1px solid var(--neutral-light-gray) ";
            advanced.style.border = "1px solid var(--neutral-light-gray)";
            pro.style.border = "1px solid var(--primary-purplish-blue)";
        });

        toggle.addEventListener('change', () => {
            if(isToggle){
               month.style.color = 'var(--primary-marine-blue)';
               year.style.color = 'var(--neutral-cool-gray)';
                isToggle = false
            } else {
                isToggle = true
                year.style.color = 'var(--primary-marine-blue)';
                month.style.color = 'var(--neutral-cool-gray)';
            }
            console.log(isToggle);
        })
    }

    init();

})();