document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-button').addEventListener('click', function(event) {
        event.stopPropagation();
        var dropdown = document.querySelector('.menu-dropdown-content');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function() {
        var dropdown = document.querySelector('.menu-dropdown-content');
        dropdown.style.display = 'none';
    });

    document.querySelector('.menu-dropdown-content').addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
