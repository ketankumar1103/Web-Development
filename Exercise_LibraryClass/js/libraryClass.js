console.log(`hi! this is ketan's library`);

class Library {
    constructor(bookList){
        this.bookList = bookList;
        localStorage.setItem('booklist', JSON.stringify(bookList));
        this.issuedBooks = {};
    }

    getBookList() {
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookName, user) {
        if (this.issuedBooks[bookName] == undefined) {
            this.issuedBooks[bookName] = user;
            console.log(`This book has been successfully issued!`);
        } 
        else {
            console.log(`This book is already issued so cannot issue it !`);
        }
    }
    
    returnBook(bookName) {
       delete this.issuedBooks[bookName];
       console.log(`Book has been returned.`);
    }

}
