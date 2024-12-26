import { Library } from './library';

describe('Library Management System', () => {
 
    it('adds a book to the library', () => {
        const library = new Library();
        library.addBook('123456', 'Advanced TypeScript', 'Mrunal Bharat Yechakar', 2024);
        const books = library.viewAvailableBooks();
        expect(books.length).toBe(1);
        expect(books[0].title).toBe('Advanced TypeScript');
        expect(books[0].author).toBe('Mrunal Bharat Yechakar');
    });
    it('borrows a book from the library', () => {
        const library = new Library();
        library.addBook('123456', 'Advanced TypeScript', 'Mrunal Bharat Yechakar', 2024);
        library.borrowBook('123456');
        const books = library.viewAvailableBooks();
        expect(books.length).toBe(0);
    });

    it('throws an error if the book is not available for borrowing', () => {
        const library = new Library();
        library.addBook('123456', 'Advanced TypeScript', 'Mrunal Bharat Yechakar', 2024);
        library.borrowBook('123456');
        expect(() => library.borrowBook('123456')).toThrowError('Book not available');
    });
    it('returns a borrowed book to the library', () => {
        const library = new Library();
        library.addBook('123456', 'Advanced TypeScript', 'Mrunal Bharat Yechakar', 2024);
        library.borrowBook('123456');
        library.returnBook('123456');
        const books = library.viewAvailableBooks();
        expect(books.length).toBe(1);
        expect(books[0].available).toBe(true);
    });

    it('throws an error if trying to return a book that was not borrowed', () => {
        const library = new Library();
        library.addBook('123456', 'Advanced TypeScript', 'Mrunal Bharat Yechakar', 2024);
        expect(() => library.returnBook('123456')).toThrowError('Book was not borrowed');
    });

  it('view all available books in the library', () => {
        const library = new Library();
        // Adding multiple books to the library
        library.addBook('789012', 'Introduction to Machine Learning', 'Bharat Yechakar', 2023);
        library.addBook('345678', 'Deep Learning Essentials', 'Janhavi Dalvi', 2022);
    
        // Viewing all available books
        const books = library.viewAvailableBooks();
    
        // Assertions to ensure correctness
        expect(books.length).toBe(3); // Verify that three books are available
        expect(books[0].title).toBe('Advanced TypeScript');
        expect(books[0].author).toBe('Mrunal Bharat Yechakar');
        expect(books[1].title).toBe('Introduction to Machine Learning');
        expect(books[1].author).toBe('Bharat Yechakar');
        expect(books[2].title).toBe('Deep Learning Essentials');
        expect(books[2].author).toBe('Janhavi Dalavi');
    });
   

});
