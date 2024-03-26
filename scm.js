document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    search();
});

document.getElementById('searchBar').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        search();
    }
});

function search() {
    var searchTerm = document.getElementById('searchBar').value.toLowerCase();
    if (searchTerm === 'niyati') {
        window.location.href = 'https://creatormate.blogspot.com/p/for-u.html';
    } else {
        alert("We are sorry. This content is not available.");
    }
}
