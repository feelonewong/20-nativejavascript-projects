let form  = document.getElementById("form");
let username  = document.getElementById("username");
let email  = document.getElementById("email");
let password  = document.getElementById("password");
let passwordConfirm  = document.getElementById("passwordConfirm");

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

form.addEventListener("submit", function (e){
    e.preventDefault();
    if(!username.value){
        showError(username,"请输入用户名");
    }else{
        showSuccess(username);
    }
})