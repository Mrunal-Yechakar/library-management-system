export class Library {
    private books: { isbn: string; title: string; author: string; year: number; available: boolean }[] = [];

    // Adds a new book to the library
    addBook(isbn: string, title: string, author: string, year: number): void {
        this.books.push({ isbn, title, author, year, available: true });
    }

    // Borrows a book (marks it as unavailable)
    borrowBook(isbn: string): void {
        const book = this.books.find((b) => b.isbn === isbn && b.available);
        if (!book) throw new Error('Book not available');
        book.available = false;
    }

    
    // Returns a borrowed book (marks it as available)
    returnBook(isbn: string): void {
        const book = this.books.find((b) => b.isbn === isbn && !b.available);
        if (!book) throw new Error('Book was not borrowed');
        book.available = true;
    }

    // Views all available books
    viewAvailableBooks() {
        return this.books.filter((book) => book.available);

    }
}
