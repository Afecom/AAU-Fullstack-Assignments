import { BorrowRecord } from './borrow-record.entity';
export declare class Member {
    id: number;
    name: string;
    email: string;
    phone: string;
    join_date: Date;
    borrowRecords: BorrowRecord[];
}
