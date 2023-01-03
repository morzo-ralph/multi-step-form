'use strict';

const app = (() => {
    let isToggle = false, isChecked = false;
    let nextButton, nextButton2, nextButton3, nextButton4, goBack1, goBack2, goBack3;
    let arcade, advanced, pro, toggle, month, year;
    let checkedValue;
    const init = () => {
        
        arcade = document.querySelector('#arcade');
        advanced = document.querySelector('#advanced');
        pro = document.querySelector('#pro');
        toggle = document.querySelector('#toggle-checkbox');
        month = document.querySelector('#month');
        year = document.querySelector('#year');
        month.style.color = 'var(--primary-marine-blue)';
        checkedValue = document.querySelectorAll('.list-container input');

        goBack1 = document.querySelector('#go-back-1');
        goBack2 = document.querySelector('#go-back-2');
        goBack3 = document.querySelector('#go-back-3');

        nextButton = document.querySelector('#next-step');
        nextButton2 = document.querySelector('#next-step-2');
        nextButton3 = document.querySelector('#next-step-3');
        nextButton4 = document.querySelector('#next-step-4');
        applyListeners();
        
    }
    
    const applyListeners = () => {
        nextButton.addEventListener('click', () => {
            document.querySelector('.step-1').style.display = "none";
            document.querySelector('.step-2').style.display = "block";
            document.querySelectorAll('.circle')[0].classList.remove("circle-active");
            document.querySelectorAll('.circle')[1].classList.add("circle-active");
        });
        nextButton2.addEventListener('click', () => {
            document.querySelector('.step-2').style.display = "none";
            document.querySelector('.step-3').style.display = "block";
            document.querySelectorAll('.circle')[1].classList.remove("circle-active");
            document.querySelectorAll('.circle')[2].classList.add("circle-active");
        });
        nextButton3.addEventListener('click', () => {
            document.querySelector('.step-3').style.display = "none";
            document.querySelector('.step-4').style.display = "block";
            document.querySelectorAll('.circle')[2].classList.remove("circle-active");
            document.querySelectorAll('.circle')[3].classList.add("circle-active");
        });
        nextButton4.addEventListener('click', () => {
            document.querySelector('.step-4').style.display = "none";
            document.querySelector('.step-5').style.display = "block";
        });
        goBack1.addEventListener('click', () => {
            document.querySelector('.step-1').style.display = "block";
            document.querySelector('.step-2').style.display = "none";
            document.querySelectorAll('.circle')[1].classList.remove("circle-active");
            document.querySelectorAll('.circle')[0].classList.add("circle-active");
        });
        goBack2.addEventListener('click', () => {
            document.querySelector('.step-2').style.display = "block";
            document.querySelector('.step-3').style.display = "none";
            document.querySelectorAll('.circle')[2].classList.remove("circle-active");
            document.querySelectorAll('.circle')[1].classList.add("circle-active");
        });
        goBack3.addEventListener('click', () => {
            document.querySelector('.step-3').style.display = "block";
            document.querySelector('.step-4').style.display = "none";
            document.querySelectorAll('.circle')[3].classList.remove("circle-active");
            document.querySelectorAll('.circle')[2].classList.add("circle-active");
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

        checkedValue[0].addEventListener('change', () => {
            let res = document.getElementsByClassName('checkbox')[0].checked
            if(res) {
                document.getElementsByClassName('list-container')[0].style.border = "1px solid var(--primary-purplish-blue)";
            } else {
                document.getElementsByClassName('list-container')[0].style.border = "1px solid var(--neutral-cool-gray)";
            }
        })
        checkedValue[1].addEventListener('change', () => {
            let res = document.getElementsByClassName('checkbox')[1].checked
            if(res) {
                document.getElementsByClassName('list-container')[1].style.border = "1px solid var(--primary-purplish-blue)";
            } else {
                document.getElementsByClassName('list-container')[1].style.border = "1px solid var(--neutral-cool-gray)";
            }
        })
        checkedValue[2].addEventListener('change', () => {
            let res = document.getElementsByClassName('checkbox')[2].checked
            if(res) {
                document.getElementsByClassName('list-container')[2].style.border = "1px solid var(--primary-purplish-blue)";
            } else {
                document.getElementsByClassName('list-container')[2].style.border = "1px solid var(--neutral-cool-gray)";
            }
        })

        toggle.addEventListener('change', () => {
            if(isToggle){
               month.style.color = 'var(--primary-marine-blue)';
               year.style.color = 'var(--neutral-cool-gray)';
                isToggle = false
                monthPrice();
            } else {
                isToggle = true
                year.style.color = 'var(--primary-marine-blue)';
                month.style.color = 'var(--neutral-cool-gray)';
                yearPrice();
            }
            console.log(isToggle);
        })
    }

    const monthPrice = () => {
        document.querySelectorAll('.step-2-price')[0].innerHTML = "$9/mo";
        document.querySelectorAll('.step-2-price')[1].innerHTML = "$12/mo";
        document.querySelectorAll('.step-2-price')[2].innerHTML = "$15/mo";

        document.querySelectorAll('.price')[0].innerHTML = "$1/mo";
        document.querySelectorAll('.price')[1].innerHTML = "$2/mo";
        document.querySelectorAll('.price')[2].innerHTML = "$2/mo";
    }

    const yearPrice = () => {
        document.querySelectorAll('.step-2-price')[0].innerHTML = "$90/yr<br><span class='two-months'>2 months free</span>";
        document.querySelectorAll('.step-2-price')[1].innerHTML = "$120/yr<br><span class='two-months'>2 months free</span>";
        document.querySelectorAll('.step-2-price')[2].innerHTML = "$150/yr<br><span class='two-months'>2 months free</span>";

        document.querySelectorAll('.price')[0].innerHTML = "+$10/yr";
        document.querySelectorAll('.price')[1].innerHTML = "+$20/yr";
        document.querySelectorAll('.price')[2].innerHTML = "+$20/yr";
    }

    init();

})();