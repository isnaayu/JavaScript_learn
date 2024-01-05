/**
 * Ani dan Anton adalah mahasiswa dari Enigma Academy
 * mereka diangkat menjadi seorang perpustakawan di enigma univeristy
 * mereka mendapat tugas membuat aplikasi untuk menambahkan buku
 * buku memiliki info code,title,publisher,publicationyear,dan author
 * kriteria :
 * - buat class buku dengan constructor dan propertynya
 * - lalu buatlah sebuah class yang mempunyai method add(untuk menambahkan buku), getAll(untuk melihat semua buku), dan searchByTitle(untuk mencari buku) , dan deleted(untuk menghpus buku)
 * - buatlah validasi dimana ketika buku kosong , buku ditambahkan ,buku di search tidak ditemukan
 * - tambahkan minimal 5 buku
 */
class Book {
  constructor(code, title, publisher, publicationYear, author) {
    // Properti
    this.code = code,
    this.title = title,
    this.publisher = publisher,
    this.publicationYear = publicationYear,
    this.author = author
  }
}
const commonResponse = {
  // Objek konstanta untuk respons

};
class Response {
  constructor() {
    // Properti respons
  }
}
class Validate {
  constructor(checkBook) {
    // Constructor
    this.checkBook = checkBook
  }

  checkBook(book){
    if(book.code == null || book.title == null || book.publisher || book.publicationYear || book.author){
        console.log("Field is Empty")
    }else{
        console.log("Success Added new Book")
    }
  }

  isBookExist(book){
    if(this.book.find(b => b.title == book.title)){
        console.log("Book Already Exist")
    }else{
        console.log("Success Added a Book")
    }
  }

}
class BookService{
  constructor(book) {
    // super()
    // Constructor
    this.book = [];
  }
  
  addBook(newBook){
    // if(this.checkBook(newBook)){
        this.book.push(newBook)
    // }
  }

  getAllBook(){
    console.log(this.book)
  }

  searchByName(bookName){
    console.log(this.book.find(b => b.title == bookName));
  }

  deleteById(id){
    if(this.book.find(b => b.code == id)){
        this.book = this.book.filter(x => x.code !== id);
    }
  }

}



const main = () => {

  // Fungsi utama
  const book1 = new Book("1", "Nathan", "JakartaBook", 2022, "tere liye")
  const book2 = new Book("2", "Nila", "JakartaBook", 2022, "Putri")
  const book3 = new Book("3", "Gigi", "JakartaBook", 2022, "Sulis")
  const book4 = new Book("4", "BlueSky", "JakartaBook", 2022, "Susi")
  const book5 = new Book("5", "Barbie", "JakartaBook", 2022, "Cantika")


  const listBook = new BookService()
  listBook.addBook(book1)
  listBook.addBook(book2)
  listBook.addBook(book3)
  listBook.addBook(book4)
  listBook.addBook(book5)

  listBook.getAllBook()
  listBook.searchByName("Nila")
  listBook.deleteById("1")
  listBook.getAllBook()
};
main();
