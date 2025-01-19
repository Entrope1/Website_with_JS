let form = document.querySelector('form')
form.addEventListener('submit',function(event){
    event.preventDefault();
    
    let pseudo = document.querySelector('#pseudo')
    let email = document.querySelector('#email')
    let mdp = document.querySelector('#password')
    let mdp2 = document.querySelector('#password2')

    if(pseudo.value.length < 6){
        pseudo.classList.add('echec')
        document.querySelector(".message-error").style.display = "block"
    }
    else {
        pseudo.classList.add('success')
    }
    if(email.value ==''){
        email.classList.add('echec')
        document.querySelector(".message-error").style.display = "block"
    }
    else {
        email.classList.add('success')
    }
    if(mdp.value.length < 8){
        mdp.classList.add('echec')
        document.querySelector(".message-error").style.display = "block"
    }
    else {
        mdp.classList.add('success')
    }
    if(mdp2.value == mdp.value){
        mdp2.classList.add('success')
    }
    else{
        mdp2.classList.add('echec')
        document.querySelector(".message-error").style.display = "block"
    }

    if(pseudo.classList.contains('success') &&
    email.classList.contains('success') &&
    mdp.classList.contains('success') &&
    mdp2.classList.contains('success')
    ) {
    document.querySelector('.message-success').style.display = "block"
    }
})