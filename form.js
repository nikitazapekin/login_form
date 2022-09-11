let user = document.getElementById("user");
let input_username = document.getElementById("input_username");
input_username.addEventListener("mouseover", () => {
    setTimeout(() => {
        user.value = "100"
    }, 100)
})


input_username.addEventListener("mouseout", () => {
    setTimeout(() => {
        user.value = "0"
    }, 100)
})


let pass = document.getElementById("pass");
let input_password = document.getElementById("input_password");
input_password.addEventListener("mouseover", () => {
    setTimeout(() => {
        pass.value = "100"
    }, 100)
})
input_password.addEventListener("mouseout", () => {
    setTimeout(() => {
        pass.value = "0"
    }, 0)
})
let eye = document.querySelector(".ey");
let count =1;
eye.addEventListener("click", ()=> {
    let pass= document.getElementById("input_password");

    pass.setAttribute('type', 'text');
    let eye_img = document.querySelector(".ey_img");
    let mass =["https://cdn-icons-png.flaticon.com/512/2874/2874802.png", "https://cdn-icons-png.flaticon.com/512/2710/2710718.png"];
    count++;
    if(count%2==0){
        eye_img.src = mass[1];
        pass.setAttribute('type', 'password');
    }
    else {
        eye_img.src = mass[0];
    }
})
let login = document.querySelector(".btn");
login.addEventListener("click", ()=> {
    let pass_value = input_password.value;
    let uss_value = input_username.value;
    let num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    if(pass_value.length==0){
        let exception = document.querySelector(".exception");
        exception.innerHTML="enter password";
        exception.style.display="block";
    }

    if(uss_value.length==0){
        let exception1 = document.querySelector(".exception1");
        exception1.innerHTML="enter name";
        exception1.style.display="block";
    }
    else {
        let exception1 = document.querySelector(".exception1");
        exception1.style.display="none";
    }
    for(let i=0; i<pass_value.length; i++){
if(!pass_value.includes("1") || !pass_value.includes("2") || !pass_value.includes("3") || !pass_value.includes("4") || !pass_value.includes("5")
       || !pass_value.includes("6") || !pass_value.includes("7") || !pass_value.includes("8") || !pass_value.includes("9") || !pass_value.includes("0")) {
 let exception = document.querySelector(".exception");
 exception.style.display="block";
    exception.innerHTML="enter nums";
        }
else {
    exception.style.display="none";
}
    }

})