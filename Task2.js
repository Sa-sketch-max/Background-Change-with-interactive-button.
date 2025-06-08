let modbtn = document.querySelector("button");
let body = document.querySelector("body");
let background = "light";
modbtn.addEventListener("click", () => {
    if(background=="light"){
        background="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
         background="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(modbtn);

})

