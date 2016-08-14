var Book = function(title, author, genre, pageCount, publisherID, ISBN) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pageCount = pageCount;
  this.publisherID = publisherID;
  this.ISBN = ISBN;
};

var BookFactory = (function() {
  var existingBooks = {};
  var existingBook;

  return {
    createBook: function(title, author, genre, pageCount, publisherID, ISBN) {
      //注目した本のメタデータの組み合わせが以前に作成されたかを調べる
      //!!により、強制的に真偽値を返す
      existingBook = existingBooks[ISBN];
      if (!!existingBook) {
        return existingBook;
      } else {
        //作成されていなければ、新しい本のインスタンスを作成し、保存する。
        var book = new Book(title, author, genre, pageCount, publisherID, ISBN);
        existingBooks[ISBN] = book;
        return book;
      }
    }
  };
});

var BookRecordManager = (function() {
  var bookRecordDatabase = {};
  return {
    addBookRecord: function(id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability) {
      var book = bookFactory.createBook(title, author, genre, pageCount, publisherID, ISBN);

      bookRecordDatabase[id] = {
        checkoutMember: checkoutMember,
        checkoutDate: checkoutDate,
        dueReturnDate: dueReturnDate,
        availability: availability,
        book: book
      };
    }

    updateCheckoutStatus: function(bookID, newStatus, checkoutDate, checkoutMember, newReturnDate) {
      var record = bookRecordDatabase[bookID];
      record.availability = newStatus;
      record.checkoutDate = checkoutDate;
      record.checkoutMember = checkoutMember;
      record.dueReturnDate = newReturnDate;
    },

    extendCheckoutPeriod: function(bookId, newReturnDate) {
      bookRecordDatabase[bookID].dueReturnDate = newReturnDate;
    },

    isPastDue: function(bookID) {
      var currentDate = new Date();
      return currentDate.getTime() > Date.parse(bookRecordDatabase[bookID].dueReturnDate);
    }

  },

});
