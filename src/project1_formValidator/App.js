let form  = document.getElementById("form");
let username  = document.getElementById("username");
let email  = document.getElementById("email");
let password  = document.getElementById("password");
let passwordConfirm  = document.getElementById("confirmPassword");

function showError(node, message){
    let formControl = node.parentElement;
    formControl.className = "form-control error";
    let small = formControl.querySelector("small");
    small.innerText = message;
};

function showSuccess(node){
    let formControl = node.parentElement;
    formControl.className = "form-control success";

}
function isValidatorFormatter(inputArray){
    inputArray.forEach(function (input) {
        if(!input.value){
            showError(input,`${input.name}为必填项`);
            return false;
        }else{
            showSuccess(input);
        }
    })
}
function isCheckLength(input, min, max){
    if(input.value.length<min){
        showError(input,`${input.name}长度不能小于${min};`);
    }else if(input.value.length>max){
        showError(input,`${input.name}长度不能大于${max}`);
    }else{
        showSuccess(input);
    }
}
function isCheckEmail(input){
    const reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
    let isEmailType =  reg.test(input.value);
    !isEmailType? showError(input,`${input.name}格式错误`) : showSuccess(input);
}
form.addEventListener("submit", function (e){
    e.preventDefault();
    isValidatorFormatter([username,email,password,passwordConfirm]);
    isCheckLength(username,3,6);
    isCheckLength(password, 6,17);
    isCheckEmail(email);
});