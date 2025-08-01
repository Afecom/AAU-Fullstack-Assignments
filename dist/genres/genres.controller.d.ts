import { GenresService } from './genres.service';
import { Genre } from '../entities/genre.entity';
import { CreateGenreDto } from './dto/create-genre.dto';
export declare class GenresController {
    private readonly genresService;
    constructor(genresService: GenresService);
    create(createGenreDto: CreateGenreDto): Promise<Genre>;
    findAll(): Promise<Genre[]>;
    findOne(id: string): Promise<Genre>;
    update(id: string, name: string): Promise<Genre>;
    remove(id: string): Promise<void>;
}
