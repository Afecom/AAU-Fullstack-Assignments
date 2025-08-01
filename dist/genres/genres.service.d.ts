import { Repository } from 'typeorm';
import { Genre } from '../entities/genre.entity';
export declare class GenresService {
    private genresRepository;
    constructor(genresRepository: Repository<Genre>);
    create(name: string): Promise<Genre>;
    findAll(): Promise<Genre[]>;
    findOne(id: number): Promise<Genre>;
    update(id: number, name: string): Promise<Genre>;
    remove(id: number): Promise<void>;
}
