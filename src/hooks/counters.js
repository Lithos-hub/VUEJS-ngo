export function counter1() { 
    let i = 0;
    if (i == 0) {
        i = 1;
        let view = window.screenTop;
        let value = document.getElementById("data-number1")
        let number = 1;

        let id = setInterval(frame, 1);
        function frame() {
        if (number >= 1768) {
            clearInterval(id);
            i = 1;
        } else {
            if(view) {
                number++;
                value.innerHTML = number;
                }
            }
        }
    } 
};



export function counter2() { 
    let i = 0;
    if (i == 0) {
        i = 1;
        let view = window.screenTop;
        let value = document.getElementById("data-number2")
        let number = 1;

        let id = setInterval(frame, 100);
        function frame() {
        if (number >= 32) {
            clearInterval(id);
            i = 1;
        } else {
            if(view) {
                number++;
                value.innerHTML = number;
                }
            }
        }
    } 
};



export function counter3() { 
    let i = 0;
    if (i == 0) {
        i = 1;
        let view = window.screenTop;
        let value = document.getElementById("data-number3")
        let number = 1;

        let id = setInterval(frame, 200);
        function frame() {
        if (number >= 27) {
            clearInterval(id);
            i = 1;
        } else {
            if(view) {
                number++;
                value.innerHTML = number;
                }
            }
        }
    } 
};








