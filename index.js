let formValue=[
    
]

const handleChange = (e) => {
    document.getElementById("errorNumber").innerText = "";
    const { name, value } = e.target;
    document.getElementById(name).innerText = value;
    formValue[name]=value;
}

const validate = () => {
    let regexp = /^\d{4}(\s\d{4}){3}$/;
    document.getElementById("errorNumber").innerHTML = "";
    document.getElementById("errorMonth").innerText = "";
    document.getElementById("errorYear").innerText = "";
    document.getElementById("errorCVC").innerText = "";

    
   
    let regVal = regexp.test(String(formValue['cardNumber']).toLowerCase());
    let flag=false;
    console.log(regVal);
    console.log(formValue);
    if (!regVal) {
        // document.getElementById("box1").style.height="fit-content";
        document.getElementById("errorNumber").innerText = "Wrong format, numbers only";
        document.getElementById("cardNumberInput").style.border = "2px solid red";
        
        flag=true;
    }
    else{
        document.getElementById("cardNumberInput").style.border = "2px solid black";
    }
    if(!formValue['MM']){
        document.getElementById("errorMonth").innerText = "Can't be blank";
        document.getElementById("monthInput").style.border = "2px solid red";
        flag=true;
    }
    else{
        document.getElementById("monthInput").style.border = "2px solid black";
    }
    if(!formValue['YY']){
        document.getElementById("errorYear").innerText = "Can't be blank";
        document.getElementById("yearInput").style.border = "2px solid red";
        flag=true;
    }
    else{
        document.getElementById("yearInput").style.border = "2px solid black";
    }
    if(!formValue['cvc']){
        document.getElementById("errorCVC").innerText = "Can't be blank";
        document.getElementById("errorCVC").style.display = "block";
        document.getElementById("cvcInput").style.border = "2px solid red";
        flag=true;
    }
    else{
        document.getElementById("errorCVC").style.display = "none";
        document.getElementById("cvcInput").style.border = "2px solid black";
    }
    return (flag===false)?true:false
    
}

const handleSubmit = () => {
    if (validate()) {
        document.getElementById("box1").style.display = "none";
        document.getElementById("box2").style.display = "flex";
    }

}


window.addEventListener("change", handleChange);