import { MembersService } from './members.service';
import { CreateMemberDto, UpdateMemberDto } from '../dto/member.dto';
import { Member } from '../entities/member.entity';
import { BorrowRecord } from '../entities/borrow-record.entity';
export declare class MembersController {
    private readonly membersService;
    constructor(membersService: MembersService);
    create(createMemberDto: CreateMemberDto): Promise<Member>;
    findAll(): Promise<Member[]>;
    findOne(id: string): Promise<Member>;
    getBorrowingHistory(id: string): Promise<BorrowRecord[]>;
    update(id: string, updateMemberDto: UpdateMemberDto): Promise<Member>;
    remove(id: string): Promise<void>;
}
