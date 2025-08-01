import { Genre } from './genre.entity';
import { BorrowRecord } from './borrow-record.entity';
export declare class Book {
    id: number;
    title: string;
    author: string;
    published_year: number;
    available_copies: number;
    genre: Genre;
    genre_id: number;
    borrowRecords: BorrowRecord[];
}
