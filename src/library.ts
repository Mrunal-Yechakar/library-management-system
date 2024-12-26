export class Library {
    private books: { isbn: string; title: string; author: string; year: number; available: boolean }[] = [];

    // Adds a new book to the library
    addBook(isbn: string, title: string, author: string, year: number): void {
        this.books.push({ isbn, title, author, year, available: true });
    }

    // Borrows a book (marks it as unavailable)
    borrowBook(isbn: string): void {
        
    }

    // Views all available books
    viewAvailableBooks() {
        return this.books.filter((book) => book.available);

    }
}
