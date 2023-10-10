const booksContainer = document.getElementById("books-container");
const cart = [];


const books = [
    { 
        title: 'The King Of Drugs ', 
        price: 10.99, 
        image: './Images/book1.jpg',
        category :  "romance"
    },
    { 
        title: 'Book Cover', 
        price: 12.99, 
        image: './Images/book2.jpg',
        category :  "romance"  
    },
    { 
        title: 'Creative Thinking', 
        price: 14.99, 
        image: './Images/book3.jpg'  ,
        category :  "romance"
    },
    { 
        title: 'Independent Woman', 
        price: 14.99, 
        image: './Images/book4.jfif',  
        category :  "romance"
    },
    { 
        title: 'PatrickNess', 
        price: 14.99, 
        image: './Images/book5.jfif',
        category :  "economy"  
    },
    { 
        title: 'Patric Ansswr', 
        price: 14.99, 
        image: './Images/Book 16.jpg', 
        category :  "economy"   
    },
    { 
        title: 'Knife Letting go', 
        price: 18.73, 
        image: './Images/book7.jfif',
        category :  "economy"    
    },
    { 
        title: 'Book Cover', 
        price: 13.69, 
        image: './Images/novel1.jpg',
        category :  "economy"    // Replace with the actual image file name
    },
    { 
        title: 'Thank you', 
        price: 16.54, 
        image: './Images/Book 3.jpg'
        ,
        category :  "economy"   // Replace with the actual image file name
    },
    { 
        title: 'Anna Karenina', 
        price: 12.44, 
        image: './Images/Book 4.jpg' 
        ,
        category :  "novel"  // Replace with the actual image file name
    },
    { 
        title: 'Watership Down', 
        price: 12.44, 
        image: './Images/Book 5.jpg'
        ,
        category :  "novel"   // Replace with the actual image file name
    },
    { 
        title: 'Light We Cannot See', 
        price: 19.99, 
        image: './Images/Book 6.jpg'
        ,
        category :  "novel"  // Replace with the actual image file name
    },
    { 
        title: 'The Hobbit', 
        price: 8.92, 
        image: './Images/Book 7.jpg'
        ,
        category :  "politics"  // Replace with the actual image file name
    },
    { 
        title: 'Address Book', 
        price: 16.29, 
        image: './Images/Book 11.jpg',
        category :  "politics"  // Replace with the actual image file name
    },
    { 
        title: 'Nerve', 
        price: 12.44, 
        image: './Images/Book 12.jpg',
        category :  "politics"  // Replace with the actual image file name
    },
    { 
        title: 'Just Us', 
        price: 17.99, 
        image: './Images/Book 14.jpg',
        category :  "politics"  // Replace with the actual image file name
    },
    { 
        title: 'The Help', 
        price: 12.44, 
        image: './Images/Book 15.jpg'
        ,
        category :  "politics"  // Replace with the actual image file name
    },

];
function displayBooks() {
    console.log(books)
    booksContainer.innerHTML = "";
    books.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Price: $${book.price}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        booksContainer.appendChild(bookDiv);
    });
}

function addToCart(index) {
    const selectedBook = books[index];
    cart.push(selectedBook);
    updateCartCount();

}

function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
}

displayBooks();
