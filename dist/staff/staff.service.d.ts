import { Repository } from 'typeorm';
import { Staff } from '../entities/staff.entity';
import { SignupDto } from '../auth/dto/auth.dto';
export declare class StaffService {
    private staffRepository;
    constructor(staffRepository: Repository<Staff>);
    create(signupDto: SignupDto): Promise<Staff>;
    findOne(id: number): Promise<Staff>;
    findByUsername(username: string): Promise<Staff | null>;
    findByEmail(email: string): Promise<Staff | null>;
    validateUser(email: string, password: string): Promise<Staff | null>;
    findAll(): Promise<Staff[]>;
    update(id: number, updateData: Partial<Staff>): Promise<Staff>;
    remove(id: number): Promise<void>;
}
