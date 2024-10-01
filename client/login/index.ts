console.log("object");
// alert("jjjjjjj")
const sign_up_but: HTMLElement = document.querySelector(".sign_up_but")!
const sgin_in_title:HTMLHeadElement = document.querySelector(".sgin_in_title")!
const forgot_password:HTMLElement = document.querySelector(".forgot_password")!
const submit :HTMLInputElement = document.querySelector(".submit")!

sign_up_but.addEventListener("click", ()=>{
    if (sign_up_but.textContent == "Signup" ){
        sign_up_but.textContent = "Sginin"
        sgin_in_title.textContent = "sgin up"
        forgot_password.textContent = ""
        submit.value = "send"
    }
    else{
        sign_up_but.textContent = "Signup"
        sgin_in_title.textContent = "sgin in"
        forgot_password.textContent = "Forgot Password"
        submit.value = "Login"
    }
})


