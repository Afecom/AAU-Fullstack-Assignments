import { Repository } from 'typeorm';
import { Genre } from '../entities/genre.entity';
import { Book } from '../entities/book.entity';
import { Member } from '../entities/member.entity';
import { Staff } from '../entities/staff.entity';
export declare class SeederService {
    private genreRepository;
    private bookRepository;
    private memberRepository;
    private staffRepository;
    constructor(genreRepository: Repository<Genre>, bookRepository: Repository<Book>, memberRepository: Repository<Member>, staffRepository: Repository<Staff>);
    seed(): Promise<void>;
}
