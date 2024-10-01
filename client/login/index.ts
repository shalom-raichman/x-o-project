//all query selectors
const sign_up_but: HTMLElement = document.querySelector(".sign_up_but")!
const sgin_in_title:HTMLHeadElement = document.querySelector(".sgin_in_title")!
const forgot_password:HTMLElement = document.querySelector(".forgot_password")!
const submit :HTMLInputElement = document.querySelector(".submit")!
const input_username:HTMLInputElement = document.querySelector(".input_username")!
const input_password:HTMLInputElement = document.querySelector(".input_password")!

const BASE_URL:string =  "http://localhost:1414"

//change login page to sisn in and revers
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

//submit page and validation
submit.addEventListener("click" ,()=>{
    if(!input_username.value ||
         !input_password.value){
            alert("enter usernam and password")
         }
    if (submit.value == "send"){
        SignUpNewUser()       
    }
    else{
      
    }
})

const SignUpNewUser = async (): Promise<void> => {
    try {
        console.log(JSON.stringify({
            username:input_username.value?.toString(),
            password:input_password.value?.toString()
        }))
        const res: Response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
            username:input_username.textContent?.toString(),
            password:input_password.textContent?.toString()
        }),
        });
    const data: responsMessage = await res.json();
    console.log(data)
    } catch (err) {
      alert(`Couldn't proccess your players`);
    }
  };

  
interface responsMessage{
    err:boolean
}

interface Gamer {
    username:string
    password:string
  }


