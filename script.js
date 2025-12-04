// Selecting popup buttons
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Cancel popup
var cancelpopup = document.getElementById("cancel-popup");
cancelpopup.addEventListener("click", function(event){
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Selecting container and form inputs
var container = document.querySelector(".container");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");
var addbook = document.getElementById("add-book");

// Load saved books from LocalStorage on page load
window.addEventListener("DOMContentLoaded", function() {
    loadBooks();
});

function loadBooks() {
    container.innerHTML = ""; // Clear container
    var books = JSON.parse(localStorage.getItem("books")) || [];
    books.forEach((book, index) => {
        var div = document.createElement("div");
        div.setAttribute("class","book-container");
        div.innerHTML = `<h2>${book.title}</h2>
                         <h4>${book.author}</h4>         
                         <p>${book.description}</p>
                         <button onclick='deleteBook(${index})'>Delete</button>`;
        container.append(div);
    });
}

// Add book
addbook.addEventListener("click", function(event){
    event.preventDefault();

    var title = booktitleinput.value.trim();
    var author = bookauthorinput.value.trim();
    var description = bookdescriptioninput.value.trim();

    if (!title || !author || !description) {
        alert("Please fill all fields!");
        return;
    }

    // Save book in LocalStorage
    var books = JSON.parse(localStorage.getItem("books")) || [];
    books.push({ title, author, description });
    localStorage.setItem("books", JSON.stringify(books));

    // Reload books to update DOM
    loadBooks();

    popupoverlay.style.display = "none";
    popupbox.style.display = "none";

    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";
});

// Delete book
function deleteBook(index){
    var books = JSON.parse(localStorage.getItem("books")) || [];
    books.splice(index, 1); // remove the book from array
    localStorage.setItem("books", JSON.stringify(books));
    
    loadBooks(); // Reload all books
}
