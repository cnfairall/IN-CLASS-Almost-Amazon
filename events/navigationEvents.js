import { signOut } from '../utils/auth';
import { booksOnSale, getBooks, searchBooks } from '../api/bookData';
import { showBooks, emptyBooks } from '../pages/books';
import { showAuthors, emptyAuthors } from '../pages/authors';
import { faveAuthors, getAuthors } from '../api/authorData';
import { showOrders, emptyOrders } from '../pages/orders';
import { getOrders } from '../api/orderData';

// navigation events
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    booksOnSale(user.uid).then(showBooks);
  });

  // ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks(user.uid).then((array) => {
      if (array.length) {
        showBooks(array);
      } else {
        emptyBooks();
      }
    });
  });

  // 3. If the array is empty because there are no authors, make sure to use the emptyAuthor function
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors(user.uid).then((array) => {
      if (array.length) {
        showAuthors(array);
      } else {
        emptyAuthors();
      }
    });
  });

  document.querySelector('#fave-authors').addEventListener('click', () => {
    faveAuthors().then(showAuthors);
  });

  // ALL ORDERS
  document.querySelector('#order').addEventListener('click', () => {
    getOrders(user.uid).then((array) => {
      if (array.length) {
        showOrders(array);
      } else {
        emptyOrders();
      }
    });
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    if (e.keyCode === 13) {
      searchBooks(searchValue, user.uid)
        .then((search) => {
          if (search.length) {
            showBooks(search);
          } else {
            emptyBooks();
          }
        });
      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
