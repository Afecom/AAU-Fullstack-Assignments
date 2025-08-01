import { JwtAuthService } from './jwt.service';
import { StaffService } from '../staff/staff.service';
import { LoginDto, SignupDto } from './dto/auth.dto';
import { Staff } from '../entities/staff.entity';
export declare class AuthService {
    private readonly staffService;
    private readonly jwtAuthService;
    constructor(staffService: StaffService, jwtAuthService: JwtAuthService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        user: Partial<Staff>;
    }>;
    signup(signupDto: SignupDto): Promise<{
        access_token: string;
        user: Partial<Staff>;
    }>;
    validateUser(id: number): Promise<Staff>;
}
