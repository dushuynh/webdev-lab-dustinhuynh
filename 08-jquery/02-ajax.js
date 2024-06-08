$(document).ready(() => {
  const url = 'https://anapioficeandfire.com/api/books/';

  const addBookToDom = (item) => {
    console.log(item.name);

    $('#books').append(
      $('<div>')
        .css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px',
        })
        .append($('<h3>').text(item.name))
        .append($('<p>').text(item.authors[0]))
        .append($('<p>').text(item.released.substr(0,4)))
        .append($('<p>').text('${item.numberOfPages} pages'))
      );
        
    );
  }
});


const fetchData = (url) => {
  $.ajax({
    type: 'GET',
    url: url,
    success: (data) => {
      data.forEach((item) => {
        addBookToDom(item);
      });
    },
    error: (error) => {
      console.error(error);
      $('#books').append(
        $('<div>').text('An error occured. Please try again.')
      );
    },
    complete: () => {
      $('#loading').remove();
    },
  });
  fetchData(url);
};