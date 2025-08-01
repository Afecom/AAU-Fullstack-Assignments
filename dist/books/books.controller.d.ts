import { BooksService } from './books.service';
import { CreateBookDto, UpdateBookDto, FilterBookDto } from '../dto/book.dto';
import { Book } from '../entities/book.entity';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): Promise<Book>;
    findAll(filterDto?: FilterBookDto): Promise<Book[]>;
    findOne(id: string): Promise<Book>;
    update(id: string, updateBookDto: UpdateBookDto): Promise<Book>;
    remove(id: string): Promise<void>;
}
