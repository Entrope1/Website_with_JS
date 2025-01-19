let all_li = document.querySelectorAll('li')

all_li.forEach(item => {
    item.addEventListener('click',function(){
        this.classList.toggle('active')

        if(this.classList.contains("li1")) {
            document.getElementById('div1').classList.add('afficher-contenu')
        }

    })


})