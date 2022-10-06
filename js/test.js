// Alert

const revealButton = document.getElementById('revealButton')
const hideButton = document.getElementById('hideButton')
const mainTitle = document.getElementById('mainTitle')


if(revealButton) {
    revealButton.addEventListener ("click", () => {
        mainTitle.classList.remove('content3');
        mainTitle.classList.add('content2');
    });    
}

if(hideButton) {
    hideButton.addEventListener ("click", () => {
        mainTitle.classList.remove('content2');
        mainTitle.classList.add('content3');
    });
}  


// Transition






