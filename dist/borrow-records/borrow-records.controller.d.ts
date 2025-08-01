import { BorrowRecordsService } from './borrow-records.service';
import { BorrowBookDto, ReturnBookDto } from '../dto/borrow-record.dto';
import { BorrowRecord } from '../entities/borrow-record.entity';
export declare class BorrowRecordsController {
    private readonly borrowRecordsService;
    constructor(borrowRecordsService: BorrowRecordsService);
    borrowBook(borrowBookDto: BorrowBookDto): Promise<BorrowRecord>;
    returnBook(returnBookDto: ReturnBookDto): Promise<BorrowRecord>;
    findAll(): Promise<BorrowRecord[]>;
    findOne(id: string): Promise<BorrowRecord>;
    getOverdueBooks(): Promise<BorrowRecord[]>;
    getMostPopularGenres(): Promise<any[]>;
    getAnalyticsSummary(): Promise<any>;
}
