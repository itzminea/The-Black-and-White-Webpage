document.getElementById('light-mode').addEventListener('click', function (event) {
    event.preventDefault();
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
});
  
document.getElementById('dark-mode').addEventListener('click', function (event) {
    event.preventDefault();
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
});

  