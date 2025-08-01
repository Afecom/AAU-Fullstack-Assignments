export declare class CreateBookDto {
    title: string;
    author: string;
    published_year: number;
    available_copies: number;
    genre_id: number;
}
export declare class UpdateBookDto {
    title?: string;
    author?: string;
    published_year?: number;
    available_copies?: number;
    genre_id?: number;
}
export declare class FilterBookDto {
    genre_id?: number;
    available?: boolean;
}
