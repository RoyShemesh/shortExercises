class BookList{
    constructor(readedBooks,notReadedBooks,nextBook,currentBook,lastBook,booksArr){
        this.readedBooks=readedBooks;
        this.notReadedBooks=notReadedBooks;
        this.nextBook=nextBook;
        this.currentBook=currentBook;
        this.lastBook=lastBook;
        this.booksArr=booksArr;
    }

    addBook(book){
        this.booksArr.push(book);
    }
    
    finishCurrentBook(){
        this.readedBooks++;
        this.notReadedBooks--;
        this.currentBook.readDate=Date.now();
        this.lastBook=this.currentBook;
        this.currentBook=this.nextBook;
        this.nextBook=this.booksArr[0];
        this.booksArr.shift();
    }

    showStatus(){
        console.log(`Already books readed :${this.readedBooks}\nNot readed :${this.notReadedBooks}\nNow reading :${this.currentBook.title}\nRead next :${this.nextBook.title}\nLast book :${this.lastBook.title}\n`);
    }
}
class Book{
    constructor(title,genre,author,readBol,readDate){
        this.title=title;
        this.genre=genre;
        this.author=author;
        this.readBol=readBol;
        if(readDate instanceof Date)
            this.readDate=readDate;
        else
            readDate=null;
    }
}
let book1=new Book('A','comedy','A',false,null);
let book2=new Book('B','comedy','B',false,null);
let book3=new Book('C','comedy','C',false,null);
let book4=new Book('D','comedy','D',false,null);
let book5=new Book('E','comedy','E',false,null);
let newbooklist=new BookList(0,5,book2,book1,null,[book3,book4,book5]);
newbooklist.finishCurrentBook();
newbooklist.finishCurrentBook();
newbooklist.showStatus();
book1