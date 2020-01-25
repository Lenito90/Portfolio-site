document.getElementById('design-experience-toggle')
    .addEventListener('click', togglePanel);


function togglePanel() {
    let currentPanel = document.getElementById('design-experience-panel');
    if (currentPanel.classList.contains('closed')) {
        currentPanel.classList.remove('closed');
    } else {
        currentPanel.classList.add('closed');
    }
}