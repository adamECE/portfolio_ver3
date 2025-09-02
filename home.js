const loadingBar    = document.getElementById('loadingBar');
const button        = document.getElementById('revealBtn');
const table         = document.getElementById('adamQueryTable')
const loadContainer = document.getElementById('load-container');

button.addEventListener('click', () => {
    loadingBar.classList.remove('hidden');  

    // Hide the loading bar after 1 second
    setTimeout(() => {
        loadContainer.classList.add('hidden');
        table.classList.remove('hidden');
    }, 1000);

    
});