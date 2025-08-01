import { Book } from './book.entity';
import { Member } from './member.entity';
export declare class BorrowRecord {
    id: number;
    book: Book;
    book_id: number;
    member: Member;
    member_id: number;
    borrow_date: Date;
    due_date: Date;
    return_date: Date;
}
