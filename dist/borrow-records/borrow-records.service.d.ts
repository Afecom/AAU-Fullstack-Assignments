import { Repository } from 'typeorm';
import { BorrowRecord } from '../entities/borrow-record.entity';
import { BorrowBookDto, ReturnBookDto } from '../dto/borrow-record.dto';
import { BooksService } from '../books/books.service';
import { MembersService } from '../members/members.service';
export declare class BorrowRecordsService {
    private borrowRecordsRepository;
    private booksService;
    private membersService;
    constructor(borrowRecordsRepository: Repository<BorrowRecord>, booksService: BooksService, membersService: MembersService);
    borrowBook(borrowBookDto: BorrowBookDto): Promise<BorrowRecord>;
    returnBook(returnBookDto: ReturnBookDto): Promise<BorrowRecord>;
    getOverdueBooks(): Promise<BorrowRecord[]>;
    getMostPopularGenres(): Promise<any[]>;
    findAll(): Promise<BorrowRecord[]>;
    findOne(id: number): Promise<BorrowRecord>;
    getAnalyticsSummary(): Promise<any>;
}
