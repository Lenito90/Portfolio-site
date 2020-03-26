document.getElementById('design-experience-toggle')
    .addEventListener('click', toggleDesignPanel);


function toggleDesignPanel() {
    let currentPanel = document.getElementById('design-experience-panel');
    if (currentPanel.classList.contains('closed')) {
        currentPanel.classList.remove('closed');
    } else {
        currentPanel.classList.add('closed');
    }
}

document.getElementById('personal-experience-toggle')
    .addEventListener('click', togglePersonalPanel);


function togglePersonalPanel() {
    let currentPanel = document.getElementById('personal-experience-panel');
    if (currentPanel.classList.contains('closed')) {
        currentPanel.classList.remove('closed');
    } else {
        currentPanel.classList.add('closed');
    }
}

document.getElementById('design-elevated-button')
    .addEventListener('click', toggleDesignButton);

function toggleDesignButton() {
    let imageInput = document.getElementById('design-elevated-button');
    if (imageInput.src.indexOf('Assets/plus.svg')!==-1){
        imageInput.src=imageInput.src.replace('plus.svg','minus.svg');
    } else{
        imageInput.src=imageInput.src.replace('minus.svg','plus.svg');
    }
}

document.getElementById('personal-elevated-button')
    .addEventListener('click', togglePersonalButton);

function togglePersonalButton() {
    let imageInput = document.getElementById('personal-elevated-button');
    if (imageInput.src.indexOf('Assets/plus.svg')!==-1){
        imageInput.src=imageInput.src.replace('plus.svg','minus.svg');
    } else{
        imageInput.src=imageInput.src.replace('minus.svg','plus.svg');
    }
}
