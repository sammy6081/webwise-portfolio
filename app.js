const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');


function pageTransition(){
    for(i = 0; i < secBtn.length; i++){
        secBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.activeBtn');
            currentBtn[0].className = currentBtn[0].className.replace('activeBtn','');
            this.className += ' activeBtn';
        });
    }

    // sections
    allSections.forEach(function(allSection){
        allSection.addEventListener('click', function(e){
            const id = e.target.dataset.id;
            if(id){
                // remove selected from other btns
                secBtns.forEach(function(btn){
                    btn.classList.remove('active')
                });
                e.target.classList.add('active');

                // hide other classlist
                sections.forEach(function(section){
                    section.classList.remove('active');
                });
                const element = document.getElementById(id);
                element.classList.add('active');
            }
        });
    });

    // toggle button
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', function(){
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}
pageTransition();