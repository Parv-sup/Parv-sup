document.querySelectorAll('.movement').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const destination = this.getAttribute('onclick').match(/'([^']+)'/)[1];
        document.getElementById('page-wrapper').classList.add('slide-down');
        setTimeout(() => {
            window.location.href = destination;
        }, 300);
    });
});
