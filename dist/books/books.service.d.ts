import { Repository } from 'typeorm';
import { Book } from '../entities/book.entity';
import { CreateBookDto, UpdateBookDto, FilterBookDto } from '../dto/book.dto';
export declare class BooksService {
    private booksRepository;
    constructor(booksRepository: Repository<Book>);
    create(createBookDto: CreateBookDto): Promise<Book>;
    findAll(filterDto?: FilterBookDto): Promise<Book[]>;
    findOne(id: number): Promise<Book>;
    update(id: number, updateBookDto: UpdateBookDto): Promise<Book>;
    remove(id: number): Promise<void>;
    updateAvailableCopies(id: number, change: number): Promise<void>;
}
