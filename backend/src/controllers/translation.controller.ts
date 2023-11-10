import { Router } from "express";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export default class TranslationController {
  // bookService: BookService;
  // router: Router;

  // constructor(bookService: BookService) {
  //   this.bookService = bookService;
  //   this.router = new Router();
  // }

  get() {
    return this.bookService.getBooks();
  }
}
