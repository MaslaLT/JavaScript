document.addEventListener('keypress', (event) => {
    const keyName = event.ctrlKey;

    alert('keypress event\n\n' + 'key: ' + keyName);
});

let labas = document.getElementById('labas');

document.addEventListener('dblclick', function(){
    alert('Double clicked');
});
