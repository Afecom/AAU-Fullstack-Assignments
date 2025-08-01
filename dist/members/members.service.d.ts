import { Repository } from 'typeorm';
import { Member } from '../entities/member.entity';
import { BorrowRecord } from '../entities/borrow-record.entity';
import { CreateMemberDto, UpdateMemberDto } from '../dto/member.dto';
export declare class MembersService {
    private membersRepository;
    private borrowRecordsRepository;
    constructor(membersRepository: Repository<Member>, borrowRecordsRepository: Repository<BorrowRecord>);
    create(createMemberDto: CreateMemberDto): Promise<Member>;
    findAll(): Promise<Member[]>;
    findOne(id: number): Promise<Member>;
    update(id: number, updateMemberDto: UpdateMemberDto): Promise<Member>;
    remove(id: number): Promise<void>;
    getBorrowingHistory(memberId: number): Promise<BorrowRecord[]>;
}
