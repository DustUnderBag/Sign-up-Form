const allInputs = document.querySelectorAll("input");

allInputs.forEach(input => 
    input.addEventListener("click", ()=> {
        input.classList.add('clicked');
    }
));

function markClicked(input) {
    input.classList.add('clicked');
}

const input_pwd = document.querySelector("input#pwd");
const input_cfm_pwd = document.querySelector("input#cfm-pwd");

