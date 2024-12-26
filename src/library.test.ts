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

});
