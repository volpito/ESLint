import React from 'react';

const Books = () => {

  const [booksList, setBooksList] = React.useState({books: [], isFetching: false});

  React.useEffect(() => {

    const fetchBooks = async () => {
      try {
        setBooksList({books: [], isFetching: true});
        const response = await fetch('https://gist.githubusercontent.com/MathisDYKDan/76bc73ec77481ccb82677cc7c0d8b524/raw/a23c99027b9bfc1bfdb22e22ddcb4301a5f870ee/books.json');
        const forecast = await response.json();
        setBooksList({books: forecast.books[0].map(a => a.title), isFetching: true});

        console.log(forecast.books[0].map(a => a.title))

      } catch (e) {
        alert(e);
        setBooksList({books: [], isFetching: false});
      }
    };
    fetchBooks();
/*
    fetch('https://gist.githubusercontent.com/MathisDYKDan/76bc73ec77481ccb82677cc7c0d8b524/raw/a23c99027b9bfc1bfdb22e22ddcb4301a5f870ee/books.json')
  .then(response => response.json())
  .then((jsonData) => {
    setbookList({bookList: jsonData.books[0][0]});
    console.log(jsonData.books[0][0]);
  })
  .catch((error) => {
    // handle your errors here
    console.error(error)
  })
*/

  }, [])

  return(
    <div>
    <p>ca marche presque !</p>
    <p>Books : {booksList.books}</p>
    </div>
  );
  
};


export default Books;