const isValid = () =>{

    let form = document.signup;
    let errorMessage = document.querySelector('.error-message');
    let details = {
      first_name: form.first_name.value,
      last_name: form.last_name.value,
      phone: form.phone.value,
      email: form.email.value,
      gender: form.gender.value,
      password: form.password.value
    }
    if(details.first_name || details.last_name || details.phone || details.email || details.gender || details.password === ""){
        errorMessage.textContent = `you left a space or some spaces blank,fill them then proceed`
        return false;
    }    

}


const  validate = (event)=> {
    event.preventDefault();
    const check = isValid();
    if (check){
        return true;
    }
}
document.querySelector('form').addEventListener('submit',validate)





